import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
}

const SEOHead = ({ 
  title, 
  description, 
  keywords,
  canonicalPath = "",
  ogImage = "/og-image.jpg",
  ogType = "website"
}: SEOHeadProps) => {
  const baseUrl = "https://anthonydigitalhub.com";
  const fullUrl = `${baseUrl}${canonicalPath}`;
  const fullTitle = title.includes("Anthony Digital Hub") ? title : `${title} | Anthony Digital Hub`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Standard meta tags
    updateMetaTag("description", description);
    if (keywords) updateMetaTag("keywords", keywords);

    // Open Graph tags
    updateMetaTag("og:title", fullTitle, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:url", fullUrl, true);
    updateMetaTag("og:type", ogType, true);
    updateMetaTag("og:image", ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`, true);

    // Twitter Card tags
    updateMetaTag("twitter:title", fullTitle);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", ogImage.startsWith("http") ? ogImage : `${baseUrl}${ogImage}`);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", fullUrl);

  }, [fullTitle, description, keywords, fullUrl, ogImage, ogType]);

  return null;
};

export default SEOHead;
