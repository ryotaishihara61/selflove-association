/**
 * VivianHero - ヒーローセクション
 * 一般社団法人セルフラブ協会のオリジナルキャラクター「Vivian」の紹介
 */
const VivianHero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 py-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* 画像セクション - モバイルでは先、デスクトップでは後 */}
          <div className="lg:w-1/2 order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://static.readdy.ai/image/eaa52119033ac8864aa00eb190fc57f3/73cee288bc799de519e17daf49b813a4.png"
                alt="セルフラブ絵本ビビアン - あなたの虹はなあに？朗読とワークで弱みを好きになれる"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-2xl animate-bounce">
                ✨
              </div>
            </div>
          </div>

          {/* テキストセクション */}
          <div className="lg:w-1/2 space-y-8 order-2 lg:order-1">
            <div className="space-y-6">
              <div className="inline-block bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-purple-600 font-medium shadow-lg">
                <a
                  href="https://www.instagram.com/selflove.laboratory/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-800 transition-colors cursor-pointer flex items-center"
                >
                  <i className="ri-instagram-fill mr-2"></i>
                  @selflove.laboratory
                </a>
              </div>

              {/* タイトルセクション */}
              <div className="relative">
                {/* 背景エフェクト */}
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-200/30 via-purple-200/30 to-blue-200/30 rounded-3xl blur-2xl opacity-60 animate-pulse"></div>

                <div className="relative space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                    {/* 第1行 */}
                    <span className="block relative">
                      <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 blur-sm opacity-70">
                        セルフラブ絵本
                      </span>
                      <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 drop-shadow-lg">
                        セルフラブ絵本
                      </span>
                    </span>

                    {/* 第2行 - メインタイトル */}
                    <span className="block relative mt-2">
                      <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-pink-500 blur-md opacity-50">
                        ビビアン
                      </span>
                      <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 via-blue-500 to-pink-500">
                        ビビアン
                      </span>
                      {/* スパークルエフェクト */}
                      <span className="absolute -top-2 -right-2 text-3xl animate-pulse">✨</span>
                      <span className="absolute -bottom-2 -left-2 text-2xl animate-pulse">🌈</span>
                    </span>
                  </h1>

                  {/* サブタイトル */}
                  <div className="relative mt-6 inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-2xl blur-md opacity-40"></div>
                    <p className="relative text-2xl lg:text-3xl font-bold bg-white/80 backdrop-blur-sm px-6 py-3 rounded-2xl shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                      あなたの虹はなあに？
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed pt-2">
                <strong className="text-pink-700">一般社団法人セルフラブ協会</strong>のオリジナルキャラクター『<strong className="text-purple-700">Vivian（ビビアン）</strong>』。<br />
                朗読とワークで「弱みを好きになれる」セルフラブの物語。<br />
                子どもたちが自分らしさを大切にし、他者を尊敬する心を育む絵本です。
              </p>
            </div>

            {/* ボタン */}
            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <button
                onClick={() => scrollToSection('contact-form')}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                朗読ワークのご依頼
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="bg-white/90 backdrop-blur-sm border-2 border-purple-400 text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-500 hover:text-white hover:border-purple-500 hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                活用プログラム
              </button>
              <button
                onClick={() => scrollToSection('purchase')}
                className="bg-gradient-to-r from-blue-400 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 whitespace-nowrap cursor-pointer"
              >
                絵本の購入
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VivianHero;
