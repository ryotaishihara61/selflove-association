
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MemberRulesPage = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-orange-50">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                src="https://static.readdy.ai/image/eaa52119033ac8864aa00eb190fc57f3/1902391d84975e340bd26d675988ae2d.png"
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
                onClick={() => handleNavigateWithScroll('/', 'special-program')}
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              >
                特別プログラム
              </button>
              <button
                onClick={() => handleNavigateWithScroll('/', 'activities')}
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              >
                活動紹介
              </button>
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
                  onClick={() => handleNavigateWithScroll('/', 'special-program')}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  特別プログラム
                </button>
                <button
                  onClick={() => handleNavigateWithScroll('/', 'activities')}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  活動紹介
                </button>
                <button
                  onClick={() => navigate('/membership')}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  入会案内
                </button>
                <button
                  onClick={() => navigate('/donation')}
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
              <h1 className="text-5xl font-bold text-gray-800 mb-6">会員規則</h1>
            </div>

            {/* 会員規則内容 */}
            <section className="mb-16">
              <div className="bg-white rounded-2xl shadow-lg p-10">
                <div className="prose prose-lg max-w-none">
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-pink-600 mb-4">（目的）</h3>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>第1条</strong> この規則は、一般社団法人セルフラブ協会（以下「本協会」という。）の定款に基づき、本協会の会員制度に関する事項を定めるものとする。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-pink-600 mb-4">（会員の区分）</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>第2条</strong> 本協会の会員は、次の各号に掲げる区分とする。
                      </p>
                      <ol className="text-gray-700 space-y-2 ml-6">
                        <li>法人会員</li>
                        <li>個人会員</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-pink-600 mb-4">（会員の資格）</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>第3条</strong>
                      </p>
                      <ol className="text-gray-700 space-y-2 ml-6">
                        <li>会員は、本協会の目的に賛同し、その活動を支援または参加する意思を有する法人、団体または個人とする。</li>
                        <li>本協会の理事、職員その他の関係者も、所定の手続きを経て会員となることができる。</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-pink-600 mb-4">（入会手続）</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>第4条</strong>
                      </p>
                      <ol className="text-gray-700 space-y-2 ml-6">
                        <li>会員として入会を希望する者は、所定の入会申込書または入会申込フォームに必要事項を記入し、事務局に提出するものとする。</li>
                        <li>入会の可否は理事会の承認をもって決定する。</li>
                        <li>法人会員は、理事会の承認後、会費の納入をもって入会の効力を生じる。</li>
                        <li>個人会員は、理事会の承認または事務局の受理をもって入会の効力を生じる。</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-pink-600 mb-4">（会費）</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>第5条</strong>
                      </p>
                      <ol className="text-gray-700 space-y-2 ml-6">
                        <li>法人会員は、1口50,000円を年会費として納入するものとし、複数口の申込を妨げない。</li>
                        <li>個人会員は、当面の間、年会費を徴収しない。</li>
                        <li>会費は原則として返還しないものとする。</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-pink-600 mb-4">（会員の権利）</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>第6条</strong>
                      </p>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        会員は、本協会の活動趣旨に基づき、次の各号の権利を有する。
                      </p>
                      <ol className="text-gray-700 space-y-2 ml-6 mb-4">
                        <li>(1) 協会の主催する講座、イベント、フォーラム等への参加</li>
                        <li>(2) 協会が発行するニュースレター、活動報告等の受領</li>
                        <li>(3) 協会に対する意見・提案・協力の申出</li>
                      </ol>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        法人会員は、上記に加え、以下の権利を有する。
                      </p>
                      <ol className="text-gray-700 space-y-2 ml-6">
                        <li>(1) 協会ウェブサイトへの法人名掲載</li>
                        <li>(2) 協会の活動報告・講座情報等の優先提供</li>
                        <li>(3) 将来的に実施される法人向けプログラム・研修の優先案内</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-pink-600 mb-4">（会員の義務）</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>第7条</strong>
                      </p>
                      <ol className="text-gray-700 space-y-2 ml-6">
                        <li>会員は、本協会の定款および本規則を遵守し、協会の目的達成に協力しなければならない。</li>
                        <li>法人会員は、定められた会費を期限内に納入しなければならない。</li>
                        <li>会員は、協会の名誉を損なう行為をしてはならない。</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-pink-600 mb-4">（会員の資格の喪失）</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>第8条</strong> 会員は、次の各号のいずれかに該当したときは、その資格を喪失する。
                      </p>
                      <ol className="text-gray-700 space-y-2 ml-6">
                        <li>退会の届出をしたとき。</li>
                        <li>解散または死亡したとき（法人の場合は解散、個人の場合は死亡）。</li>
                        <li>会費を1ヶ月以上滞納したとき。</li>
                        <li>本協会の名誉を著しく損なう行為をしたとき、または目的に反する行為を行ったとき。</li>
                        <li>理事会において除名を決議されたとき。</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-pink-600 mb-4">（退会）</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>第9条</strong>
                      </p>
                      <ol className="text-gray-700 space-y-2 ml-6">
                        <li>会員は、任意に退会を申し出ることができる。</li>
                        <li>退会届を提出し、事務局が受理した時点で退会の効力を生じる。</li>
                        <li>既に納入された会費は返還しない。</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-pink-600 mb-4">（除名）</h3>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>第10条</strong> 会員が本協会の目的に反する行為、または協会の秩序を乱す行為を行った場合、理事会の決議により除名することができる。この場合、当該会員に対し、あらかじめ弁明の機会を与えるものとする。
                      </p>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-pink-600 mb-4">（会員情報の取扱い）</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>第11条</strong>
                      </p>
                      <ol className="text-gray-700 space-y-2 ml-6">
                        <li>会員の個人情報は、本協会の目的達成のために必要な範囲内でのみ利用する。</li>
                        <li>会員情報を第三者に提供する場合は、本人の同意を得るものとする。</li>
                      </ol>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-pink-600 mb-4">（附則）</h3>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        <strong>第12条</strong>
                      </p>
                      <ol className="text-gray-700 space-y-2 ml-6">
                        <li>本規則の改廃は、理事会の決議によって行う。</li>
                        <li>本規則は、理事会の承認の日から施行する。</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 戻るボタン */}
            <div className="text-center">
              <button
                onClick={() => navigate('/membership')}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap cursor-pointer inline-flex items-center"
              >
                <i className="ri-arrow-left-line mr-2"></i>
                入会案内に戻る
              </button>
            </div>

          </div>
        </div>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <img
                src="https://static.readdy.ai/image/eaa52119033ac8864aa00eb190fc57f3/1902391d84975e340bd26d675988ae2d.png"
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
                <div className="flex justify-center">
                  <a href="#" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    <i className="ri-instagram-line text-2xl"></i>
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

export default MemberRulesPage;
