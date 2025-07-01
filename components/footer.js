// components/footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10 mt-16">
      <div className="container mx-auto px-4 text-center">
        {/* Instagram Feed */}
        <iframe
          src="https://snapwidget.com/embed/1101348"
          className="snapwidget-widget mx-auto"
          allowTransparency="true"
          frameBorder="0"
          scrolling="no"
          style={{
            border: "none",
            overflow: "hidden",
            width: "480px",
            height: "160px",
          }}
          title="Posts from Instagram"
        ></iframe>
      </div>
    </footer>
  );
}