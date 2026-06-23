(() => {
  const canonicalHost = "fdtesisat.com";
  const path = window.location.pathname.replace(/\/index\.html$/, "/") || "/";
  const canonicalUrl = `https://${canonicalHost}${path}`;

  const ensureMeta = (selector, identity, content) => {
    let tag = document.head.querySelector(selector);
    if (!tag) {
      tag = document.createElement("meta");
      Object.entries(identity).forEach(([name, value]) => tag.setAttribute(name, value));
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", content);
  };

  document.head.querySelector('link[rel="canonical"]')?.setAttribute("href", canonicalUrl);
  document.head
    .querySelector('link[rel="alternate"][hreflang="tr-TR"]')
    ?.setAttribute("href", canonicalUrl);

  ensureMeta('meta[property="og:url"]', { property: "og:url" }, canonicalUrl);
  ensureMeta('meta[name="twitter:url"]', { name: "twitter:url" }, canonicalUrl);
  ensureMeta('meta[property="al:web:url"]', { property: "al:web:url" }, canonicalUrl);
})();
