import { useEffect } from 'react';

export default function Footer() {
  useEffect(() => {
    // Load SnapWidget script dynamically
    const script = document.createElement('script');
    script.src = 'https://snapwidget.com/js/snapwidget.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <footer className="bg-gray-100 py-16 mt-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-semibold mb-6">Follow me on Instagram</h2>
        <div className="overflow-hidden rounded-xl shadow-md max-w-5xl mx-auto">
          <iframe
            src="https://snapwidget.com/embed/1101382"
            className="snapwidget-widget w-full h-[300px] rounded-xl"
            allowTransparency="true"
            frameBorder="0"
            scrolling="no"
            style={{
              border: 'none',
              overflow: 'hidden',
              width: '100%',
              height: '300px',
              borderRadius: '1rem'
            }}
            title="Instagram Feed"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}