<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" doctype-system="about:legacy-compat" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Sitemap – Cadence Henderson</title>
        <style>
          body { font-family: system-ui, sans-serif; margin: 2rem; color: #1a1a1a; }
          h1 { font-size: 1.5rem; margin-bottom: 0.5rem; }
          p { color: #666; margin-bottom: 1.5rem; }
          table { width: 100%; border-collapse: collapse; }
          th, td { padding: 0.5rem 0.75rem; text-align: left; border-bottom: 1px solid #eee; }
          th { background: #f5f5f5; font-weight: 600; }
          tr:hover { background: #fafafa; }
          a { color: #0066cc; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>Sitemap</h1>
        <p>Cadence Henderson – Homes By Dr Jan Duffy. This sitemap is for search engines; the table below is a human-readable view.</p>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>URL</th>
              <th>Last modified</th>
              <th>Change freq</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="sitemap:urlset/sitemap:url">
              <tr>
                <td><xsl:value-of select="position()"/></td>
                <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                <td><xsl:value-of select="sitemap:lastmod"/></td>
                <td><xsl:value-of select="sitemap:changefreq"/></td>
                <td><xsl:value-of select="sitemap:priority"/></td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
