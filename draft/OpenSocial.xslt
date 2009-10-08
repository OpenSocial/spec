<xsl:transform xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                version="1.0"
                
                xmlns:date="http://exslt.org/dates-and-times"
                xmlns:ed="http://greenbytes.de/2002/rfcedit"
                xmlns:exslt="http://exslt.org/common"
                xmlns:msxsl="urn:schemas-microsoft-com:xslt"
                xmlns:myns="mailto:julian.reschke@greenbytes.de?subject=rcf2629.xslt"
                xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
                xmlns:saxon="http://saxon.sf.net/"
                xmlns:saxon-old="http://icl.com/saxon"
                xmlns:x="http://purl.org/net/xml2rfc/ext"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"

                exclude-result-prefixes="date ed exslt msxsl myns rdf saxon saxon-old x xhtml"
                >

  <xsl:import href="rfc2629.xslt"/>
  
  <xsl:template match="x:ref">
    <xsl:variable name="val" select="."/>
  <!--  <xsl:variable name="target" select="//*[(@anchor and x:anchor-alias/@value=$val) or (@anchor and ed:replace/ed:ins/x:anchor-alias/@value=$val) or (@anchor=$val)]"/> -->
    <xsl:variable name="target" select="key('anchor-item',$val) | key('anchor-item-alias',$val)"/>
    <xsl:variable name="irefs" select="//iref[@x:for-anchor=$val]"/>
    <xsl:choose>
      <xsl:when test="$target">
        <a href="#{$target/@anchor}" style="text-decoration: underline;">
          <xsl:call-template name="copy-anchor"/>
          <!-- to be indexed? -->
          <xsl:if test="$irefs">
            <xsl:attribute name="id"><xsl:call-template name="compute-extref-anchor"/></xsl:attribute>
          </xsl:if>
          <xsl:value-of select="."/>
        </a>
      </xsl:when>
      <xsl:otherwise>
        <xsl:call-template name="warning">
          <xsl:with-param name="inline" select="'no'"/>
          <xsl:with-param name="msg">internal link target for '<xsl:value-of select="."/>' does not exist.</xsl:with-param>
        </xsl:call-template>
        <xsl:value-of select="."/>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>
  
  <xsl:template name="insertCopyright" myns:namespaceless-elements="xml2rfc">
  </xsl:template>
  
  <xsl:template match="x:u">
    <u>
      <xsl:call-template name="copy-anchor"/>
      <xsl:apply-templates/>
    </u>
  </xsl:template>

</xsl:transform>
