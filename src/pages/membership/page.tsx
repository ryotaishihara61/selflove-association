
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MembershipPage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateWithScroll = (path: string, sectionId?: string) => {
    navigate(path);
    setMobileMenuOpen(false);
    if (sectionId) {
      setTimeout(() => scrollToSection(sectionId), 100);
    }
  };

  const handleGoogleFormOpen = () => {
    window.open('https://forms.gle/PFbRndqP61kjd7gG7', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
      {/* ヘッダー */}
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
                onClick={() => handleNavigateWithScroll('/', 'about')}
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              >
                協会について
              </button>
              <button
                onClick={() => navigate('/vivian')}
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              >
                ビビアン朗読ワーク
              </button>
              <a
                href="/vivian-os/"
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              >
                先生の皆さまへ
              </a>
              <a
                href="https://note.com/ran_ishihara"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              >
                Blog
              </a>
              <button
                onClick={() => navigate('/membership')}
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              >
                入会案内
              </button>
              <button
                onClick={() => navigate('/donation')}
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              >
                寄付
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
                  onClick={() => handleNavigateWithScroll('/')}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  ホーム
                </button>
                <button
                  onClick={() => handleNavigateWithScroll('/', 'about')}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  協会について
                </button>
                <button
                  onClick={() => {
                    navigate('/vivian');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  ビビアン朗読ワーク
                </button>
                <a
                  href="/vivian-os/"
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  先生の皆さまへ
                </a>
                <a
                  href="https://note.com/ran_ishihara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  Blog
                </a>
                <button
                  onClick={() => navigate('/membership')}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  入会案内
                </button>
                <button
                  onClick={() => {
                    navigate('/donation');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  寄付
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* メインコンテンツ */}
      <main className="py-20 pt-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* ページタイトル */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-800 mb-6">入会案内</h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                セルフラブ教育を通じて、より良い社会を築く仲間になりませんか？
              </p>
            </div>

            {/* 会員特典 */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">会員特典</h2>
                
                {/* 全会員共通の権利 */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-pink-600 mb-6 text-center">全会員共通</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <i className="ri-id-card-line text-blue-600 text-xl"></i>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">会員証の発行</h4>
                      <p className="text-gray-700 text-sm">協会オリジナルデザインのオンライン会員証を発行</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                        <i className="ri-calendar-event-line text-pink-600 text-xl"></i>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">講座・イベント参加</h4>
                      <p className="text-gray-700 text-sm">協会の主催する講座、イベント、フォーラム等への参加</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                        <i className="ri-mail-line text-orange-600 text-xl"></i>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">情報受領</h4>
                      <p className="text-gray-700 text-sm">協会が発行するニュースレター、活動報告等の受領</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                        <i className="ri-feedback-line text-green-600 text-xl"></i>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">意見・提案・協力</h4>
                      <p className="text-gray-700 text-sm">協会に対する意見・提案・協力の申出</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                        <i className="ri-vip-crown-line text-purple-600 text-xl"></i>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">優先情報提供</h4>
                      <p className="text-gray-700 text-sm">協会の活動報告・講座情報等の優先提供</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                        <i className="ri-music-line text-indigo-600 text-xl"></i>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">テーマソング音源</h4>
                      <p className="text-gray-700 text-sm">協会テーマソング「Selflove」の歌詞付き音源をプレゼント</p>
                    </div>
                  </div>
                </div>

                {/* 会員証サンプル */}
                <div className="mb-8 mt-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">オリジナル会員証デザイン（サンプル）</h3>
                  <div className="flex justify-center">
                    <div className="max-w-md w-full">
                      <img
                        src="/membercard.png"
                        alt="セルフラブ協会会員証サンプル"
                        className="w-full h-auto rounded-2xl shadow-xl"
                      />
                      <p className="text-gray-600 text-sm text-center mt-3">
                        入会後、オンライン会員証を発行いたします
                      </p>
                    </div>
                  </div>
                </div>

                {/* 法人会員の追加権利 */}
                <div>
                  <h3 className="text-xl font-bold text-purple-600 mb-6 text-center">法人会員</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                        <i className="ri-global-line text-blue-600 text-xl"></i>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">ウェブサイト掲載</h4>
                      <p className="text-gray-700 text-sm">協会ウェブサイトへの法人名掲載</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-md">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                        <i className="ri-graduation-cap-line text-yellow-600 text-xl"></i>
                      </div>
                      <h4 className="font-bold text-gray-800 mb-2">法人向けプログラム</h4>
                      <p className="text-gray-700 text-sm">将来的に実施される法人向けプログラム・研修の優先案内</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 入会申込フォーム */}
            <section>
              <div className="bg-white rounded-2xl shadow-lg p-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">入会申込フォーム</h2>

                {/* 会員規則へのリンク */}
                <div className="mb-8 pb-8 border-b border-gray-200 text-center">
                  <p className="text-gray-700 mb-4">入会前に必ずご確認ください</p>
                  <button
                    onClick={() => navigate('/member-rules')}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-flex items-center"
                  >
                    <i className="ri-file-text-line mr-2"></i>
                    会員規則を確認する
                  </button>
                </div>

                {/* 個人会員申込 */}
                <div className="text-center py-12 border-b border-gray-200">
                  <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="ri-user-line text-3xl text-pink-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">個人会員申込みフォーム</h3>
                  <div className="mb-6">
                    <span className="inline-block bg-pink-100 text-pink-700 px-6 py-2 rounded-full font-bold text-lg">
                      個人会員は無料です
                    </span>
                  </div>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    入会申込フォームにご記入いただき、送信してください。<br />
                    担当者より3営業日以内にご連絡いたします。
                  </p>
                  <button
                    onClick={handleGoogleFormOpen}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-colors cursor-pointer inline-flex items-center"
                  >
                    <i className="ri-external-link-line mr-2"></i>
                    申込フォームを開く
                  </button>
                  <p className="text-gray-500 text-sm mt-4">
                    ※外部サイト（Googleフォーム）が開きます
                  </p>
                </div>

                {/* 法人会員申込 */}
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="ri-building-line text-3xl text-purple-600"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">法人会員の入会申込</h3>
                  <p className="text-gray-700 mb-8 leading-relaxed">
                    法人会員の入会をご希望の方は、下記メールアドレスまでお問い合わせください。<br />
                    担当者より詳細をご案内いたします。
                  </p>
                  <a
                    href="mailto:info@selflove.or.jp?subject=法人会員入会について"
                    className="bg-purple-500 hover:bg-purple-600 text-white px-10 py-4 rounded-lg text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-flex items-center"
                  >
                    <i className="ri-mail-line mr-2"></i>
                    メールで問い合わせる
                  </a>
                  <p className="text-gray-500 text-sm mt-4">
                    info@selflove.or.jp
                  </p>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* フッター */}
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

export default MembershipPage;
