const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-gray-400 flex items-center gap-3">
            <div className="h-8 w-8">
              <img src="./src/assets/ytm-logo.png" alt="YTM Looper Logo" />
            </div>
            <span>YouTube Music Looper</span>
          </div>
          <div className="text-gray-500 text-sm">© 2025 YTM Looper</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
