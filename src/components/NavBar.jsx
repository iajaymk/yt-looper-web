const NavBar = () => {
  return (
    <div className="border-b border-white/10 backdrop-blur-sm bg-black/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="">
          <span className="text-white">YouTube Music Looper</span>
        </div>
        <a
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
          href="https://github.com/iajaymk/YTM-looper"
          target="_"
        >
          Add to Chrome
        </a>
      </div>
    </div>
  );
};

export default NavBar;
