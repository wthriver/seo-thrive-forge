import { useEffect } from 'react';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object | object[];
  noIndex?: boolean;
  noFollow?: boolean;
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
  articleSection?: string;
  articleTag?: string[];
}

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  twitterTitle,
  twitterDescription,
  twitterImage,
  structuredData,
  noIndex = false,
  noFollow = false,
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor,
  articleSection,
  articleTag
}: SEOHeadProps) => {
  useEffect(() => {
    // Set title
    document.title = title;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Set keywords
    if (keywords) {
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywords);
      } else {
        const meta = document.createElement('meta');
        meta.name = 'keywords';
        meta.content = keywords;
        document.head.appendChild(meta);
      }
    }

    // Set robots meta
    const robotsContent = `${noIndex ? 'noindex' : 'index'},${noFollow ? 'nofollow' : 'follow'}`;
    const metaRobots = document.querySelector('meta[name="robots"]');
    if (metaRobots) {
      metaRobots.setAttribute('content', robotsContent);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'robots';
      meta.content = robotsContent;
      document.head.appendChild(meta);
    }

    // Set canonical URL
    if (canonical) {
      const existingCanonical = document.querySelector('link[rel="canonical"]');
      if (existingCanonical) {
        existingCanonical.setAttribute('href', canonical);
      } else {
        const link = document.createElement('link');
        link.rel = 'canonical';
        link.href = canonical;
        document.head.appendChild(link);
      }
    }

    // Set Open Graph tags
    const setOGTag = (property: string, content: string) => {
      const existing = document.querySelector(`meta[property="${property}"]`);
      if (existing) {
        existing.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', property);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    setOGTag('og:title', ogTitle || title);
    setOGTag('og:description', ogDescription || description);
    setOGTag('og:type', ogType);
    setOGTag('og:url', canonical || window.location.href);

    if (ogImage) {
      setOGTag('og:image', ogImage);
      setOGTag('og:image:secure_url', ogImage);
      setOGTag('og:image:alt', title);
    }

    // Article-specific OG tags
    if (ogType === 'article') {
      if (articlePublishedTime) {
        setOGTag('article:published_time', articlePublishedTime);
      }
      if (articleModifiedTime) {
        setOGTag('article:modified_time', articleModifiedTime);
      }
      if (articleAuthor) {
        setOGTag('article:author', articleAuthor);
      }
      if (articleSection) {
        setOGTag('article:section', articleSection);
      }
      if (articleTag && articleTag.length > 0) {
        articleTag.forEach((tag) => {
          setOGTag('article:tag', tag);
        });
      }
    }

    // Set Twitter Card tags
    const setTwitterTag = (name: string, content: string) => {
      const existing = document.querySelector(`meta[name="${name}"]`);
      if (existing) {
        existing.setAttribute('content', content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('name', name);
        meta.content = content;
        document.head.appendChild(meta);
      }
    };

    setTwitterTag('twitter:card', ogImage ? 'summary_large_image' : 'summary');
    setTwitterTag('twitter:title', twitterTitle || ogTitle || title);
    setTwitterTag('twitter:description', twitterDescription || ogDescription || description);
    if (twitterImage || ogImage) {
      setTwitterTag('twitter:image', twitterImage || ogImage!);
    }

    // Set structured data (supports single object or array)
    // Remove previous tags added by SEOHead
    const prevLd = document.querySelectorAll('script[type="application/ld+json"][data-seohead="true"]');
    prevLd.forEach((n) => n.parentNode?.removeChild(n));

    if (structuredData) {
      const dataArray = Array.isArray(structuredData) ? structuredData : [structuredData];
      dataArray.forEach((data) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seohead', 'true');
        script.textContent = JSON.stringify(data);
        document.head.appendChild(script);
      });
    }
  }, [title, description, keywords, canonical, ogTitle, ogDescription, ogImage, ogType, twitterTitle, twitterDescription, twitterImage, structuredData, noIndex, noFollow, articlePublishedTime, articleModifiedTime, articleAuthor, articleSection, articleTag]);

  return null;
};

export default SEOHead;
