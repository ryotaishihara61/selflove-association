
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleNavigateToMembership = () => {
    navigate('/membership');
    setMobileMenuOpen(false);
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
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              >
                協会について
              </button>
              <button
                onClick={() => scrollToSection('special-program')}
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              >
                代表的な活動
              </button>
              <button
                onClick={() => scrollToSection('activities')}
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
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors whitespace-nowrap cursor-pointer"
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
            <div className="md-hidden mt-4 pb-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4 pt-4">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  協会について
                </button>
                <button
                  onClick={() => scrollToSection('special-program')}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  代表的な活動
                </button>
                <button
                  onClick={() => scrollToSection('activities')}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  活動紹介
                </button>
                <button
                  onClick={handleNavigateToMembership}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  入会案内
                </button>
                <button
                  onClick={() => navigate('/donation')}
                  className="text-left bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors whitespace-nowrap cursor-pointer w-fit"
                >
                  寄付
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* ヒーローセクション */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.0), rgba(255, 255, 255, 1.0)), url('/assets/images/hero-background.jpeg')`
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight" style={{ fontFamily: '"Hiragino Sans", "Noto Sans JP", sans-serif', textShadow: '2px 2px 8px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.7)' }}>
              自分を愛することから、<br className="hidden sm:block" />
              <span className="block sm:inline">学びは始まる</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed" style={{ textShadow: '1px 1px 6px rgba(255, 255, 255, 0.9), 0 0 25px rgba(255, 255, 255, 0.7)' }}>
              セルフラブ教育を通じて、<br className="sm:hidden" />子どもも大人も<br />
              「ありのままの自分」を<br className="sm:hidden" />育てる社会へ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('activities')}
                className="bg-pink-500 hover:bg-pink-6 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                活動を見る
              </button>
              <button
                onClick={() => navigate('/membership')}
                className="bg-orange-400 hover:bg-orange-5 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
              >
                入会案内
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 協会について */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">協会について</h2>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-pink-600 mb-2">一般社団法人セルフラブ協会</h3>
              <p className="text-gray-600">Self Love Association Japan</p>
            </div>

            {/* 活動風景画像 */}
            <div className="mb-12">
              <img
                src="/selflove-okura.jpg"
                alt="協会の活動風景"
                className="rounded-2xl shadow-xl object-cover w-full h-96 md:h-[500px]"
              />
            </div>

            {/* 設立目的 */}
            <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl p-8 md:p-10 mb-8 shadow-sm">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-heart-line text-2xl text-white"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">設立目的</h4>
                  <p className="text-gray-700 leading-relaxed">
                    セルフラブ協会は、自己理解・感情理解・対話力など、社会情動的スキル（SEL）を育む教育の普及を目的としています。朗読・物語体験・ワークを通じて、子どもから大人までが"安心して自分を表現できる関係づくり" を促し、学習意欲・自己肯定感・心の健康の向上に寄与します。
                  </p>
                </div>
              </div>
            </div>

            {/* 2カラムグリッド */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* 活動の特徴 */}
              <div className="bg-white border-2 border-pink-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mr-3">
                    <i className="ri-star-line text-xl text-orange-600"></i>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800">活動の特徴</h4>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-pink-500 mr-2 mt-1 flex-shrink-0"></i>
                    <span>朗読・アート・心理教育・ワークショップ・講師派遣など</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-pink-500 mr-2 mt-1 flex-shrink-0"></i>
                    <span>学校・教育機関・地域団体へのワークショップ、研修、講師派遣</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-pink-500 mr-2 mt-1 flex-shrink-0"></i>
                    <span>海外（カンボジア）を含む教育機関との連携</span>
                  </li>
                  <li className="flex items-start">
                    <i className="ri-checkbox-circle-fill text-pink-500 mr-2 mt-1 flex-shrink-0"></i>
                    <span>心理的安全性と教育効果に配慮したプログラム設計・少人数運営</span>
                  </li>
                </ul>
              </div>

              {/* 拠点と法人形態 */}
              <div className="space-y-6">
                <div className="bg-white border-2 border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <i className="ri-map-pin-line text-xl text-blue-600"></i>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800">拠点</h4>
                  </div>
                  <p className="text-gray-700">
                    日本全国およびオンラインで活動し、海外の教育機関（カンボジア）とも連携しています。
                  </p>
                </div>

                <div className="bg-white border-2 border-purple-100 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <i className="ri-building-line text-xl text-purple-600"></i>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800">法人形態</h4>
                  </div>
                  <p className="text-gray-700">
                    非営利型一般社団法人
                  </p>
                </div>
              </div>
            </div>

            {/* 代表理事について */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 md:p-10 mb-6 shadow-sm">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <i className="ri-user-heart-line text-2xl text-white"></i>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">代表理事について</h4>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-pink-700">石原 蘭（Ran Ishihara）</span><br />
                    セルフラブ講師・研修講師。創作絵本『ビビアン』共著者。20年間で約2万人の自己理解・対話支援に携わり、教育・企業・地域を対象とした研修や講座の実績を持つ。
                  </p>
                </div>
              </div>
            </div>

            {/* 運営体制 */}
            <div className="bg-white border-2 border-green-100 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <i className="ri-team-line text-xl text-green-600"></i>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-800 mb-3">運営体制</h4>
                  <p className="text-gray-700">
                    代表理事を中心とした少人数の運営チームで事業を実施しています。活動内容に応じて教育・福祉・地域支援の専門家とも連携し、安全で質の高い学びの場を提供しています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ビビアンの朗読ワーク特別紹介 */}
      <section id="special-program" className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">代表的な活動</h2>
              <p className="text-xl text-gray-700">セルフラブ教育の核となる朗読ワークショップ</p>
            </div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-12 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-pink-600 mb-6">ビビアンの朗読ワーク</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    声と言葉の力を通じて、自分自身と深くつながる特別な体験。ビビアンが導く朗読ワークショップでは、参加者一人ひとりが自分の内なる声に耳を傾け、ありのままの自分を受け入れる力を育みます。
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <i className="ri-heart-line text-pink-600 text-sm"></i>
                      </div>
                      <p className="text-gray-700">自己受容と自己表現の統合</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <i className="ri-voice-recognition-line text-pink-600 text-sm"></i>
                      </div>
                      <p className="text-gray-700">声を通じた感情の解放</p>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <i className="ri-group-2-line text-pink-600 text-sm"></i>
                      </div>
                      <p className="text-gray-700">共感と繋がりの体験</p>
                    </div>
                  </div>
                  
                  {/* ワーク実績 */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">ワーク実績</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="bg-pink-50 rounded-lg px-4 py-2">
                        <p className="text-gray-700 text-sm">桜丘中学・高等学校（東京都）</p>
                      </div>
                      <div className="bg-pink-50 rounded-lg px-4 py-2">
                        <p className="text-gray-700 text-sm">兵庫県公立小学校</p>
                      </div>
                      <div className="bg-pink-50 rounded-lg px-4 py-2">
                        <p className="text-gray-700 text-sm">山形県公立小学校</p>
                      </div>
                      <div className="bg-pink-50 rounded-lg px-4 py-2">
                        <p className="text-gray-700 text-sm">他</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href="https://vivian-selflove.site/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                  >
                    詳細を見る
                    <i className="ri-external-link-line ml-2"></i>
                  </a>
                </div>
                <div className="relative">
                  <img
                    src="/assets/images/vivian-workshop.png"
                    alt="ビビアンの朗読ワークショップ"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 活動紹介 */}
      <section id="activities" className="py-20 bg-pink-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">活動紹介</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-mic-line text-2xl text-pink-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">朗読×セルフラブプログラム</h3>
                <p className="text-gray-700">
                  自己表現・言葉の力を通じた自己理解の教育プログラム。
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-palette-line text-2xl text-orange-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">アート＆ワークショップ</h3>
                <p className="text-gray-700">
                  創作を通じて自分を知り、他者とつながる教育イベント。
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-seedling-line text-2xl text-green-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">教育現場との連携</h3>
                <p className="text-gray-700">
                  学校・教育委員会・地域団体・家庭と協力し、授業・研修・出張授業を実施。
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-earth-line text-2xl text-blue-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">国際教育・留学プログラム</h3>
                <p className="text-gray-700">
                  海外教育機関との交流・共同プロジェクト・留学支援。
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-book-line text-2xl text-purple-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">研究・コンテンツ開発</h3>
                <p className="text-gray-700">
                  心理教育・教材開発・書籍出版などの制作活動。
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-group-line text-2xl text-yellow-600"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">講師派遣・研修</h3>
                <p className="text-gray-700">
                  専門講師による出張授業や研修プログラムの提供。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 入会案内セクション */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-12">入会案内</h2>
            <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl p-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">セルフラブ教育を広める仲間を募集しています</h3>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                私たちと一緒に、自己理解と自己肯定感を育む教育を広めませんか？<br />
                活動理念に賛同する個人・教育関係者・団体の皆様のご参加をお待ちしています。
              </p>
              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">入会資格（例）</h4>
                  <ul className="text-gray-700 text-left space-y-2">
                    <li>・セルフラブ教育の理念に賛同する法人</li>
                    <li>・教育関係者（教師、カウンセラー等）</li>
                    <li>・セルフラブ教育の理念に賛同する個人</li>
                    <li>・子育て中の保護者</li>
                    <li>・セルフラブ教育活動者を目指す学生</li>
                  </ul>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="text-xl font-bold text-gray-800 mb-4">会費</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">法人会員</span>
                      <span className="font-semibold text-gray-800">1口 50,000円</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">個人会員</span>
                      <span className="font-semibold text-gray-800">当面の間 無料</span>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-gray-600 space-y-1">
                    <p>※法人会員は複数口の申込が可能です</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => {
                    navigate('/membership');
                    window.scrollTo(0, 0);
                  }}
                  className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                >
                  入会案内の詳細を見る
                </button>
                <a
                  href="https://forms.gle/kCDf1q5d8fp72zXa7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer"
                >
                  今すぐ入会する
                  <i className="ri-external-link-line ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

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

export default HomePage;
