export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center justify-start space-y-8 px-4 py-8 mt-10">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white text-center animate-pulse">
        AKADEMI CRYPTO <br />
        CLONE APP
        <span className="block text-2xl md:text-3xl mt-2 text-red-500 font-semibold">
          by AC FOR ALL
        </span>
      </h1>
      <div className="w-16 h-1 bg-red-600 rounded-full"></div>
      <h2 className="text-xl md:text-2xl text-gray-400 text-center">
        Sebuah clone app dari versi originalnya
      </h2>
      <p className="text-base md:text-lg text-gray-300 text-center max-w-xl">
        Akan selalu update baik dari segi modul maupun research dan sudah memakai bot auto forward dari aplikasi originalnya. Jadi ketika ada update dari versi originalnya, clone app ini akan menyesuaikan.
      </p>
      
      {/* Button with link */}
      <a href="https://akademicrypto.com/" target="_blank" rel="noopener noreferrer">
        <button className="w-full max-w-xs px-6 py-3 bg-red-600 text-white rounded-lg shadow-lg hover:bg-red-700 transition">
          Original Version
        </button>
      </a>

      <p className="text-xs md:text-sm text-gray-500 text-center">© 2025 Akademi Crypto. All rights reserved.</p>
    </div>
  );
}