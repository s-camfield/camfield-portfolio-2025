export default function ImageTest() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Image Test</h1>
      
      <div className="mb-8">
        <h2 className="text-xl mb-2">Test Image 1 (from public root):</h2>
        <img 
          src="/camfield-logo-horiz-white.svg" 
          alt="Logo Test" 
          width={300}
          height={100}
        />
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl mb-2">Test Image 2 (from portfolio):</h2>
        <img 
          src="/portfolio/66/thumbnail.png" 
          alt="66 Thumbnail" 
          width={300}
          height={300}
        />
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl mb-2">Test Image 3 (external image):</h2>
        <img 
          src="https://picsum.photos/300/300" 
          alt="External Image" 
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
