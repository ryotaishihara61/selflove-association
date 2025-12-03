import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VivianHero from '../../components/vivian/VivianHero';
import VivianAbout from '../../components/vivian/VivianAbout';
import VivianPrograms from '../../components/vivian/VivianPrograms';
import VivianTestimonials from '../../components/vivian/VivianTestimonials';
import VivianImageSlider from '../../components/vivian/VivianImageSlider';
import VivianVideo from '../../components/vivian/VivianVideo';
import VivianContact from '../../components/vivian/VivianContact';
import VivianPurchase from '../../components/vivian/VivianPurchase';
import VivianResources from '../../components/vivian/VivianResources';

/**
 * Vivianページ
 * セルフラブ協会のオリジナルキャラクター「Vivian（ビビアン）」と
 * 絵本を使った朗読ワークプログラムを紹介するページ
 */
const VivianPage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
      {/* ヘッダー - SelfLoveサイトのデザインを使用 */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="/assets/images/logo.png"
                alt="セルフラブ協会ロゴ"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-800" style={{ fontFamily: '"Pacifico", serif' }}>
                  一般社団法人セルフラブ協会
                </h1>
                <p className="text-sm text-gray-600">Self Love Association Japan</p>
              </div>
            </div>

            {/* デスクトップナビゲーション */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => navigate('/')}
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              >
                ホーム
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              >
                絵本について
              </button>
              <button
                onClick={() => scrollToSection('programs')}
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              >
                朗読ワーク
              </button>
              <button
                onClick={() => scrollToSection('purchase')}
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              >
                絵本の購入
              </button>
              <button
                onClick={() => scrollToSection('resources')}
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              >
                資料ダウンロード
              </button>
              <button
                onClick={() => scrollToSection('contact-form')}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition-colors whitespace-nowrap cursor-pointer"
              >
                ご依頼
              </button>
            </nav>

            {/* モバイルハンバーガーメニューボタン */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            >
              <i className={`ri-${mobileMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}></i>
            </button>
          </div>

          {/* モバイルメニュー */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => {
                    navigate('/');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  ホーム
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  絵本について
                </button>
                <button
                  onClick={() => scrollToSection('programs')}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  朗読ワーク
                </button>
                <button
                  onClick={() => scrollToSection('purchase')}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  絵本の購入
                </button>
                <button
                  onClick={() => scrollToSection('resources')}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  資料ダウンロード
                </button>
                <button
                  onClick={() => scrollToSection('contact-form')}
                  className="text-left bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition-colors whitespace-nowrap cursor-pointer w-fit"
                >
                  ご依頼
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="pt-20">
        <VivianHero />
        <VivianAbout />
        <VivianPrograms />
        <VivianTestimonials />
        <VivianImageSlider />
        <VivianVideo />
        <VivianContact />
        <VivianPurchase />
        <VivianResources />
      </main>

      {/* フッター - SelfLoveサイトのデザインを使用 */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                src="/assets/images/logo.png"
                alt="セルフラブ協会ロゴ"
                className="h-10 w-10 object-contain"
              />
              <h3 className="text-2xl font-bold">一般社団法人セルフラブ協会</h3>
            </div>
            <p className="text-gray-300 mb-6">Self Love Association Japan</p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-semibold mb-2">お問い合わせ</h4>
                <a href="mailto:info@selflove.or.jp" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  info@selflove.or.jp
                </a>
              </div>
              <div>
                <h4 className="font-semibold mb-2">所在地</h4>
                <p className="text-gray-300">東京都千代田区九段南一丁目5番6号<br />りそな九段ビル5階KSフロア</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">SNS</h4>
                <div className="flex justify-center">
                  <a
                    href="https://www.instagram.com/selflove.laboratory/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-xl hover:shadow-lg hover:scale-110 transition-all duration-300 cursor-pointer"
                  >
                    <i className="ri-instagram-fill text-4xl text-white"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm">
                Copyright © Self Love Association Japan. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VivianPage;
