/**
 * VivianVideo - 朗読ワーク動画セクション
 * YouTubeの朗読ワーク動画を埋め込み表示
 */
const VivianVideo = () => {
  return (
    <section id="video" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-6 relative inline-block px-6">
            朗読ワーク動画
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-red-400 rounded-full"></div>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-pink-400 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto text-left">
            実際の朗読ワークの様子をご覧いただけます
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-xl"
                  src="https://www.youtube.com/embed/Bt4X-wUuuBE"
                  title="朗読ワーク実践編"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
            <div>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-xl"
                  src="https://www.youtube.com/embed/gbJQOxnjv3w"
                  title="ワークショップの様子"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VivianVideo;
