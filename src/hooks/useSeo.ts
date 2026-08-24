import { useEffect } from 'react';

type SeoOptions = {
  title: string;
  description: string;
  path?: string;
  ogTitle?: string;
  ogDescription?: string;
};

const SITE_ORIGIN = 'https://funngro-revamp.example.com';

/**
 * Updates document title and meta tags for the current page.
 * Keeps SEO metadata in sync with client-side route changes.
 */
export function useSeo({ title, description, path = '/', ogTitle, ogDescription }: SeoOptions) {
  useEffect(() => {
    document.title = title;

    const setMeta = (selector: string, attr: 'name' | 'property', key: string, content: string) => {
      let el = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', ogTitle ?? title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', ogDescription ?? description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', `${SITE_ORIGIN}${path}`);
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', ogTitle ?? title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', ogDescription ?? description);

    const canonical = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (canonical) {
      canonical.setAttribute('href', `${SITE_ORIGIN}${path}`);
    } else {
      const link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', `${SITE_ORIGIN}${path}`);
      document.head.appendChild(link);
    }
  }, [title, description, path, ogTitle, ogDescription]);
}
