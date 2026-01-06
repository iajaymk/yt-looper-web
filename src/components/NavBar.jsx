import { Download } from "lucide-react";

const NavBar = () => {
  return (
    <div className="border-b border-white/10 backdrop-blur-sm bg-black/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8">
            <img src="./src/assets/ytm-logo.png" alt="YTM Looper Logo" />
          </div>
          <span className="text-white">YouTube Music Looper</span>
        </div>
        <a
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex gap-2 items-center"
          href="https://github.com/iajaymk/YTM-looper"
          target="_"
        >
          <Download className="w-4 h-4" />
          <span className="hidden md:block">Add to Chrome</span>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
