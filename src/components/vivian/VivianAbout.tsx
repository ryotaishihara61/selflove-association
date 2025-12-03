import { useState } from 'react';

/**
 * VivianAbout - 絵本についてセクション
 * Vivian絵本の特徴と登場人物を紹介
 */
const VivianAbout = () => {
  const [showCharacterModal, setShowCharacterModal] = useState(false);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 relative inline-block px-6">
            絵本について
            <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-pink-400 rounded-full"></div>
            <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-8 bg-purple-400 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-left">
            「ビビアン」は、自分の弱みを受け入れることから始まる成長の物語です。<br />
            主人公と一緒に、自分だけの「虹」を見つけていきます。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mx-auto">
              <i className="ri-user-heart-fill text-3xl text-pink-500"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">自己理解・自己肯定感</h3>
              <p className="text-gray-600 leading-relaxed">
                内面を見つめ、ありのままの自分を受け入れる力、自分らしさを大切にする心を育みます。
              </p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-gradient-to-r from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto">
              <i className="ri-group-fill text-3xl text-green-500"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">共感力・コミュニケーション</h3>
              <p className="text-gray-600 leading-relaxed">
                相手の気持ちに寄り添い、自分の感情を言葉で表現する力、対話力を身につけます。
              </p>
            </div>
          </div>

          <div className="text-center space-y-6 md:col-span-2 lg:col-span-1">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full flex items-center justify-center mx-auto">
              <i className="ri-rainbow-fill text-3xl text-yellow-500"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">多様性の尊重</h3>
              <p className="text-gray-600 leading-relaxed">
                「みんな違ってみんな良い」。個性を大切にし、自他の違いを活かし合う心を育みます。
              </p>
            </div>
          </div>
        </div>

        {/* 登場人物紹介セクション */}
        <div className="max-w-5xl mx-auto mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4 relative inline-block px-6">
              登場人物紹介
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-pink-400 rounded-full"></div>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-1 h-6 bg-purple-400 rounded-full"></div>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-left">
              物語には個性豊かなキャラクターたちが登場します。それぞれの「虹」を持つ仲間たちと一緒に、成長の旅を体験してください。
            </p>
          </div>
          <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-3xl shadow-xl p-6 md:p-8 mx-auto">
            <img
              src="/assets/images/vivian/vivian_characters.jpg"
              alt="ビビアンの登場人物たち - それぞれの個性と虹を持つキャラクター"
              className="w-full rounded-2xl shadow-lg md:cursor-pointer md:hover:opacity-90 transition-opacity duration-300"
              onClick={() => {
                // デスクトップのみモーダル表示
                if (window.innerWidth >= 768) {
                  setShowCharacterModal(true);
                }
              }}
            />
            <p className="hidden md:block text-center text-sm text-gray-500 mt-4">
              クリックで拡大表示
            </p>
          </div>
        </div>

        {/* キャラクターモーダル - デスクトップのみ */}
        {showCharacterModal && (
          <div
            className="hidden md:flex fixed inset-0 bg-black/80 z-50 items-center justify-center p-4"
            onClick={() => setShowCharacterModal(false)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <button
                onClick={() => setShowCharacterModal(false)}
                className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300 transition-colors z-10"
              >
                <i className="ri-close-line"></i>
              </button>
              <img
                src="/assets/images/vivian/vivian_characters.jpg"
                alt="ビビアンの登場人物たち - それぞれの個性と虹を持つキャラクター"
                className="max-w-full max-h-full object-contain rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default VivianAbout;
