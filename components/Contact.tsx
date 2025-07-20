'use client';

import { Mail, Send, Copy } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('danino.dev@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="w-full bg-[#121212] text-white px-6 md:px-20 py-20">
      <p className="text-sm text-gray-400">Contact</p>
      <h2 className="text-4xl font-bold mb-10">Want to work together?</h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Formulario */}
        <form className="flex flex-col gap-5 w-full md:w-1/2">
          <input
            type="text"
            placeholder="Your name"
            className="bg-[#1c1c1c] text-white px-4 py-3 rounded-md border border-transparent focus:border-[#581BB7] outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="bg-[#1c1c1c] text-white px-4 py-3 rounded-md border border-transparent focus:border-[#581BB7] outline-none"
          />
          <textarea
            rows={6}
            placeholder="Type your message"
            className="bg-[#1c1c1c] text-white px-4 py-3 rounded-md border border-transparent focus:border-[#581BB7] outline-none"
          ></textarea>
          <button
            type="submit"
            className="mt-4 bg-[#581BB7] hover:bg-[#471095] text-white py-3 rounded-md font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition"
          >
            Send message <Send size={18} />
          </button>
        </form>

        {/* Información de contacto */}
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center space-y-6">
          <h3 className="text-3xl font-bold text-[#581BB7]">David Niño</h3>
          <p className="text-gray-300">
            Got something in mind? Share your vision through the form and let's start building
            something amazing together.
          </p>

          <hr className="w-full border-gray-700" />

          <p className="text-sm text-gray-400">Or contact me</p>

          <div className="flex items-center gap-3">
            <button className="bg-[#1c1c1c] text-white px-4 py-2 rounded-md flex items-center gap-2">
              <Mail size={16} />
              Email
            </button>
            <span className="text-sm text-white select-all">danino.dev@gmail.com</span>
            <button onClick={handleCopy} className="text-gray-400 hover:text-white">
              <Copy size={16} />
            </button>
            {copied && <span className="text-green-400 text-sm ml-2">Copied!</span>}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-20 text-sm text-gray-500">
        Made with ❤️ by <span className="text-[#581BB7] font-medium">David Nino</span>
      </div>
    </section>
  );
}
