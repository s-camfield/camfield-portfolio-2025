import Navigation from '../../components/Navigation';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="container mx-auto pt-24 px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Contact</h1>
        
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="max-w-md mx-auto mt-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="mb-4">
            Feel free to reach out for collaborations or just to say hello!
          </p>
          <p className="font-medium">
            Email: your.email@example.com
          </p>
        </div>
      </div>
    </main>
  );
}
