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

  <xsl:param name="xml2rfc-private">OpenSocial</xsl:param>
  
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
  
  <xsl:template match="x:u">
    <u>
      <xsl:call-template name="copy-anchor"/>
      <xsl:apply-templates/>
    </u>
  </xsl:template>

  <xsl:template match="x:draft">
    <div style="border: 2px solid #d00">
      <div style="background: #d00; color: #fff; padding: 2px;">
        <strong style="margin-right: 4px;">DRAFT SECTION</strong>
        <xsl:if test="@href">
          <a target="_blank" style="color: #000; text-decoration: underline; margin-right: 4px;" href="{@href}">Link</a> 
        </xsl:if>
        <xsl:value-of select="@note"/>
      </div>
      <xsl:apply-templates mode="t-content" select="node()[1]" />
    </div>
  </xsl:template>
  
  <xsl:template match="x:incubating">
    <div style="border: 2px solid #0d0">
      <div style="background: #0d0; color: #fff; padding: 2px;">
        <strong style="margin-right: 4px;">Incubating</strong>
        <xsl:if test="@href">
          <a target="_blank" style="color: #fff; text-decoration: underline; margin-right: 4px;" href="{@href}">Link</a> 
        </xsl:if>
        <xsl:value-of select="@note"/>
      </div>
      <xsl:apply-templates mode="t-content" select="node()[1]" />
    </div>
  </xsl:template>
  
  <xsl:template match="x:testcase">
      <div style="margin-right: 4px;">
        <xsl:if test="@href">
          <a target="_blank" style="color: #339933; text-decoration: underline; margin-right: 4px;" href="{@href}">Test Case</a> 
        </xsl:if>
        <xsl:value-of select="@note"/>
        <xsl:apply-templates mode="t-content" select="node()[1]" /> 
      </div>
  </xsl:template>
  
  <xsl:template match="x:deprecated">
    <div style="border: 2px solid #CCCC33">
      <div style="background: #CCCC33; color: #000; padding: 2px;">
        <strong style="margin-right: 4px;">Deprecated</strong>
        <xsl:choose>
          <xsl:when test="@use and @href">
            Use <a target="_blank" style="color: #000; text-decoration: underline; margin-right: 4px;" href="{@href}"><xsl:value-of select="@use"/></a> instead. 
          </xsl:when>
          <xsl:when test="@use">
            Use <xsl:value-of select="@use"/> instead. 
          </xsl:when>
          <xsl:when test="@href">
            <a target="_blank" style="color: #000; text-decoration: underline; margin-right: 4px;" href="{@href}">Link</a>
          </xsl:when>
        </xsl:choose>
        <xsl:value-of select="@note"/>
      </div>
      <xsl:apply-templates mode="t-content" select="node()[1]" />
    </div>
  </xsl:template>
  
</xsl:transform>
