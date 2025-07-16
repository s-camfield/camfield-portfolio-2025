// lib/portableTextComponents.js
import CtaBlock from '../components/CtaBlock';

export const portableTextComponents = {
  types: {
    // This tells PortableText how to render our custom 'cta' type
    cta: CtaBlock, 
  },
  // This section ensures your H2, H3, etc., from Sanity get styled correctly
  block: {
    h2: ({ children }) => <h2 className="text-3xl font-bold mt-10 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-bold mt-8 mb-3">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-bold mt-6 mb-2">{children}</h4>,
    blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6">{children}</blockquote>,
  },
};
