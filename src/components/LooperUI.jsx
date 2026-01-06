const LooperUI = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-red-500/20 to-purple-500/20 rounded-3xl p-8 md:p-12 border border-white/10 backdrop-blur-sm">
        <div className="bg-black/40 rounded-2xl p-8 border border-white/10">
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4 border border-white/10">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-400 text-sm">Loop Status</span>
                <span className="text-green-400 text-sm">Active</span>
              </div>
              <div className="bg-white/10 h-2 rounded-full overflow-hidden">
                <div className="bg-red-500 h-full w-3/4 rounded-full animate-pulse"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <div className="text-gray-400 text-xs mb-1">Start</div>
                <div className="text-white">1:23</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 border border-white/10">
                <div className="text-gray-400 text-xs mb-1">End</div>
                <div className="text-white">2:45</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LooperUI;
