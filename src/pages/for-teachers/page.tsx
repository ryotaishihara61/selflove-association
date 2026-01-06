import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * 先生向けページ（学校・教育委員会向け）
 * SEL × ビビアン朗読ワークの導入案内
 */

// 先生の声データ型
interface TeacherTestimonial {
  id: number;
  name: string;
  school: string;
  role: string;
  comment: string;
  image?: string; // 任意：顔写真のパス
}

// 5つの強みデータ型
interface KeyStrength {
  id: number;
  title: string;
  description: string;
  icon: string; // Remix Iconのクラス名
  bgColor: string; // 背景色のTailwindクラス
  iconBgColor: string; // アイコン背景色のTailwindクラス
  iconColor: string; // アイコン色のTailwindクラス
}

// 5つの強みデータ（訴求ポイント）
const keyStrengths: KeyStrength[] = [
  {
    id: 1,
    title: '15分〜20分という手軽さ！',
    description: '朝の会や学活の「スキマ時間」で実施可能',
    icon: 'ri-time-line',
    bgColor: 'from-pink-100 to-pink-200',
    iconBgColor: 'bg-pink-500',
    iconColor: 'text-white',
  },
  {
    id: 2,
    title: '言語、年齢、男女問わない！',
    description: '多様なバックグラウンドの子どもたちと一緒に使える汎用性',
    icon: 'ri-global-line',
    bgColor: 'from-orange-100 to-orange-200',
    iconBgColor: 'bg-orange-500',
    iconColor: 'text-white',
  },
  {
    id: 3,
    title: 'ツールではなく、OS！',
    description: '単発教材ではなく、学級経営や対話文化の"土台"になるプログラム',
    icon: 'ri-cpu-line',
    bgColor: 'from-purple-100 to-purple-200',
    iconBgColor: 'bg-purple-500',
    iconColor: 'text-white',
  },
  {
    id: 4,
    title: '探究学習の限界を超える',
    description: '表面的な調べ学習を超えて、子ども自身の内面の「問い」に届く',
    icon: 'ri-rocket-line',
    bgColor: 'from-blue-100 to-blue-200',
    iconBgColor: 'bg-blue-500',
    iconColor: 'text-white',
  },
  {
    id: 5,
    title: '導入がラク。継続しやすい。',
    description: '準備物が少なく、先生の負担を増やさずに続けられる設計',
    icon: 'ri-check-double-line',
    bgColor: 'from-green-100 to-green-200',
    iconBgColor: 'bg-green-500',
    iconColor: 'text-white',
  },
];

// 先生の声サンプルデータ（将来的にJSONファイルやAPIから取得可能）
const teacherTestimonials: TeacherTestimonial[] = [
  {
    id: 1,
    name: 'A先生',
    school: '○○市立△△小学校',
    role: '6年担任',
    comment: '話すことが苦手だった子どもたちが、ワーク後に自分の気持ちを言葉にできるようになりました。学級全体の雰囲気が穏やかになり、授業にも前向きに取り組む姿が見られます。',
  },
  {
    id: 2,
    name: 'B先生',
    school: '□□中学校',
    role: '2年学年主任',
    comment: '思春期の生徒たちは感情表現が難しい時期ですが、ビビアンのワークを通じて自然と自分の内面と向き合えたようです。クラスでの対話が増え、いじめの芽を早期に発見できるようになりました。',
  },
  {
    id: 3,
    name: 'C先生',
    school: '私立◎◎学園',
    role: 'スクールカウンセラー',
    comment: '特別支援が必要な子どもや、日本語が第二言語の子どもたちにも、物語を通じた感情理解のアプローチはとても有効でした。言葉の壁を越えて心が通じ合う瞬間が何度もありました。',
  },
  {
    id: 4,
    name: 'D先生',
    school: '●●市教育委員会',
    role: '指導主事',
    comment: 'SEL教育の重要性は理解していても、実践のハードルが高いと感じていました。ビビアン朗読ワークは台本もあり、20分で実施できるので、忙しい学校現場でも無理なく導入できます。',
  },
];

const ForTeachersPage = () => {
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
                onClick={() => navigate('/vivian')}
                className="text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
              >
                ビビアン朗読ワーク
              </button>
              <button
                onClick={() => navigate('/for-teachers')}
                className="text-pink-600 font-semibold underline underline-offset-4 cursor-pointer"
              >
                先生の皆さまへ
              </button>
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
                  onClick={() => {
                    navigate('/');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  ホーム
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
                <button
                  onClick={() => {
                    navigate('/for-teachers');
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-pink-600 font-semibold underline underline-offset-4 cursor-pointer"
                >
                  先生の皆さまへ
                </button>
                <a
                  href="https://note.com/ran_ishihara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left text-gray-700 hover:text-pink-600 transition-colors cursor-pointer"
                >
                  Blog
                </a>
                <button
                  onClick={() => {
                    navigate('/membership');
                    setMobileMenuOpen(false);
                  }}
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

      {/* 1. ヒーローセクション */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center pt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.9)), url('/assets/images/hero-background.jpeg')`
        }}
      >
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight" style={{ textShadow: '2px 2px 8px rgba(255, 255, 255, 0.9), 0 0 30px rgba(255, 255, 255, 0.7)' }}>
              話せなかった子が、<br className="md:hidden" />自分の言葉で話し出す教材<br />
              <span className="text-pink-600">SEL × ビビアン朗読ワーク</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-semibold" style={{ textShadow: '1px 1px 6px rgba(255, 255, 255, 0.9)' }}>
              83.3% の生徒が初回から"変化を体感"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('study-session')}
                className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer shadow-lg"
              >
                勉強会に参加する
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-orange-400 hover:bg-orange-500 text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors whitespace-nowrap cursor-pointer shadow-lg"
              >
                導入について相談する
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ★ 5つの強み（最重要訴求ポイント） */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 via-orange-50 to-purple-50 border-y-4 border-pink-400">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* セクションタイトル */}
            <div className="text-center mb-12 md:mb-16">
              <div className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-3 rounded-full text-sm md:text-base font-bold mb-4 shadow-lg">
                <i className="ri-star-fill mr-2"></i>
                この教材の5つの強み
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
                なぜ、多くの先生が<br className="md:hidden" />選ぶのか？
              </h2>
            </div>

            {/* 5つの強みカードグリッド */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {keyStrengths.map((strength) => (
                <div
                  key={strength.id}
                  className={`bg-gradient-to-br ${strength.bgColor} rounded-2xl p-8 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 border-2 border-white`}
                >
                  {/* アイコン */}
                  <div className={`w-20 h-20 ${strength.iconBgColor} rounded-2xl flex items-center justify-center mb-6 shadow-lg mx-auto md:mx-0`}>
                    <i className={`${strength.icon} text-4xl ${strength.iconColor}`}></i>
                  </div>

                  {/* タイトル */}
                  <h3 className="text-2xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight text-center md:text-left">
                    {strength.title}
                  </h3>

                  {/* 説明文 */}
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center md:text-left">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>

            {/* 補足メッセージ */}
            <div className="mt-12 text-center">
              <p className="text-lg md:text-xl text-gray-700 font-semibold bg-white/80 inline-block px-8 py-4 rounded-full shadow-lg">
                <i className="ri-lightbulb-flash-line text-yellow-500 mr-2"></i>
                忙しい学校現場でも、無理なく始められる実践的な教材です
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. この教材で得られるもの */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-3">この教材で得られるもの</h2>
            <p className="text-center text-gray-600 mb-10">学校現場の課題に、物語の力で応える</p>

            {/* 画像プレースホルダー：授業風景・子どもたちの表情 */}
            <div className="mb-10">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-xl h-64 md:h-80 flex items-center justify-center">
                <div className="text-center">
                  <i className="ri-image-line text-6xl text-gray-500 mb-3"></i>
                  <p className="text-2xl font-bold text-gray-600">SAMPLE IMAGE</p>
                  <p className="text-sm text-gray-500 mt-2">授業風景・子どもたちの表情のイメージ</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* カード1 */}
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-shield-check-line text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">学級経営の安定</h3>
                <p className="text-gray-700 leading-relaxed">
                  感情理解と自己調整のスキルを育むことで、学級全体が落ち着きます。子どもたちが安心して自己表現できる環境が生まれ、トラブルが減少します。
                </p>
              </div>

              {/* カード2 */}
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-heart-pulse-line text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">不登校・心の課題へのアプローチ</h3>
                <p className="text-gray-700 leading-relaxed">
                  自己肯定感を育み、心の安全基地を作ります。内面と向き合う時間が、子どもたちの心の回復力を高め、予防教育としても機能します。
                </p>
              </div>

              {/* カード3 */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-hand-heart-line text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">特別支援や外国籍児童の心のケア</h3>
                <p className="text-gray-700 leading-relaxed">
                  言葉を超えた物語体験は、多様な背景を持つ子どもたちの心にも届きます。共感的理解を育み、誰もが安心できるインクルーシブな場を作ります。
                </p>
              </div>

              {/* カード4 */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <i className="ri-seedling-line text-3xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">思春期の自己肯定感向上</h3>
                <p className="text-gray-700 leading-relaxed">
                  自分の感情を理解し、受け入れる力を育てます。思春期特有の不安や葛藤に対し、物語を通じて「自分も大丈夫」と感じられる体験を提供します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. 導入した先生の声 */}
      <section id="teacher-voices" className="py-20 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">導入した先生の声</h2>
            <p className="text-center text-gray-600 mb-12">実際に授業で使った先生方の感想</p>

            {/* 画像プレースホルダー：教室でワークを実施している様子 */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-xl h-72 md:h-96 flex items-center justify-center">
                <div className="text-center">
                  <i className="ri-image-line text-6xl text-gray-500 mb-3"></i>
                  <p className="text-2xl font-bold text-gray-600">SAMPLE IMAGE</p>
                  <p className="text-sm text-gray-500 mt-2">教室でワークを実施している様子</p>
                </div>
              </div>
            </div>

            {/* 先生の声カードグリッド */}
            <div className="grid md:grid-cols-2 gap-8">
              {teacherTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start mb-4">
                    {/* 顔写真（プレースホルダー） */}
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-orange-300 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      {testimonial.image ? (
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover rounded-full"
                        />
                      ) : (
                        <i className="ri-user-line text-2xl text-white"></i>
                      )}
                    </div>
                    {/* 名前・学校・役職 */}
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.school}</p>
                      <p className="text-sm text-pink-600 font-semibold">{testimonial.role}</p>
                    </div>
                  </div>
                  {/* コメント */}
                  <p className="text-gray-700 leading-relaxed">
                    {testimonial.comment}
                  </p>
                </div>
              ))}
            </div>

            {/* 将来的に追加する際のメモ */}
            <div className="mt-12 text-center">
              <p className="text-gray-500 text-sm">
                ※ 先生方の声は、実際の導入事例に基づいています（プライバシー保護のため一部仮名）
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. 実用性 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">実用性</h2>
            <p className="text-center text-gray-600 mb-12">忙しい学校現場でも、無理なく導入できる設計</p>

            {/* 2カラムレイアウト：カード + 画像 */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8 items-center">
              {/* 左側：4つのカード */}
              <div className="grid grid-cols-2 gap-6">
              <div className="bg-pink-50 rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-flashlight-line text-2xl text-white"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">即日導入OK</h3>
                <p className="text-gray-700 text-sm">
                  配布台本つき<br />
                  個人/複数で対応可
                </p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-time-line text-2xl text-white"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">所要時間20分</h3>
                <p className="text-gray-700 text-sm">
                  朝の会・道徳・学活<br />
                  探究に柔軟対応
                </p>
              </div>

              <div className="bg-purple-50 rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-team-line text-2xl text-white"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">対象学年</h3>
                <p className="text-gray-700 text-sm">
                  小学高学年・中学生<br />
                  発達段階に応じた読替え可
                </p>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 text-center">
                <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-file-list-3-line text-2xl text-white"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">必要物品</h3>
                <p className="text-gray-700 text-sm">
                  絵本／台本<br />
                  スライド・動画教材あり
                </p>
              </div>
            </div>

            {/* 右側：画像プレースホルダー */}
            <div className="order-first lg:order-last">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-xl h-80 lg:h-full min-h-[320px] flex items-center justify-center">
                <div className="text-center">
                  <i className="ri-image-line text-6xl text-gray-500 mb-3"></i>
                  <p className="text-2xl font-bold text-gray-600">SAMPLE IMAGE</p>
                  <p className="text-sm text-gray-500 mt-2 px-4">台本・絵本・教材の実物イメージ</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* 5. 教材効果 */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">教材効果</h2>
            <p className="text-center text-gray-600 mb-12">アンケート結果に基づく実証データ</p>

            {/* 画像プレースホルダー：生徒の変化・笑顔の様子 */}
            <div className="mb-12">
              <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden shadow-xl h-64 flex items-center justify-center">
                <div className="text-center">
                  <i className="ri-image-line text-6xl text-gray-500 mb-3"></i>
                  <p className="text-2xl font-bold text-gray-600">SAMPLE IMAGE</p>
                  <p className="text-sm text-gray-500 mt-2">生徒の変化・笑顔の様子</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="text-5xl font-bold text-pink-600 mb-4">83.3%</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">自己理解・自己受容</h3>
                <p className="text-gray-700">
                  「自分の感情がわかった」「自分を受け入れられた」と回答した生徒の割合
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="text-5xl font-bold text-orange-600 mb-4">77.8%</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">他者共感・関係性の気づき</h3>
                <p className="text-gray-700">
                  「友だちの気持ちが分かった」「つながりを感じた」と回答した生徒の割合
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="text-5xl font-bold text-purple-600 mb-4">68.5%</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">感動・応援の声</h3>
                <p className="text-gray-700">
                  「感動した」「またやりたい」と回答した生徒の割合
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. 教育的メリット（表形式） */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">教育的メリット</h2>
            <p className="text-center text-gray-600 mb-12">学校経営・生徒指導・学習指導への効果</p>

            <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-lg">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-pink-100 to-orange-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-bold text-gray-800">効果領域</th>
                    <th className="px-6 py-4 text-left text-lg font-bold text-gray-800">具体的な効果</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-pink-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">学校経営の安定</td>
                    <td className="px-6 py-4 text-gray-700">感情理解・自己調整・他者尊重の姿勢が育まれ、学級全体が落ち着きます</td>
                  </tr>
                  <tr className="hover:bg-pink-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">不登校・いじめの予防</td>
                    <td className="px-6 py-4 text-gray-700">自己肯定感・共感的理解の育成により、心の課題の予防につながります</td>
                  </tr>
                  <tr className="hover:bg-pink-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">学習への意欲・集中力の向上</td>
                    <td className="px-6 py-4 text-gray-700">感情コントロールによる学習環境の改善が、学びへの意欲を高めます</td>
                  </tr>
                  <tr className="hover:bg-pink-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-800">教師・保護者との対話の活性化</td>
                    <td className="px-6 py-4 text-gray-700">対話の土壌づくり・安心感の共有が、コミュニケーションを円滑にします</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 7. SEL教育とは */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-4">SEL教育とは</h2>
            <p className="text-center text-gray-600 mb-12">
              Social and Emotional Learning（社会情動的学習）
            </p>

            {/* 2カラムレイアウト：説明文 + 画像 */}
            <div className="grid lg:grid-cols-2 gap-8 items-center mb-10">
              {/* 左側：説明文 */}
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  SEL（Social and Emotional Learning：社会情動的学習）は、自己理解・感情調整・他者理解・対人関係スキル・責任ある意思決定という5つのスキルを育む教育アプローチです。
                  世界中の教育現場で導入が進んでおり、学力向上・いじめ予防・心の健康増進に効果があることが実証されています。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  ビビアン朗読ワークは、物語体験を通じてこれらのスキルを自然に育む、日本の学校現場に適したSEL教材です。
                </p>
              </div>

              {/* 右側：画像 */}
              <div>
                <img
                  src="/selinfogra.jpg"
                  alt="SELの5つのスキル図解 / インフォグラフィック"
                  className="rounded-2xl shadow-xl object-contain w-full max-h-80"
                />
              </div>
            </div>

            {/* 5つのスキル */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-pink-500">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-user-heart-line text-xl text-pink-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">自己理解</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  自分の感情・価値観・強みを認識する力
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-orange-500">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-settings-5-line text-xl text-orange-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">自己管理</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  感情や行動をコントロールし、目標に向かう力
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-purple-500">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-group-2-line text-xl text-purple-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">他者理解</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  他者の視点や感情を理解し、共感する力
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-blue-500">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-chat-smile-2-line text-xl text-blue-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">対人関係スキル</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  健全な関係を築き、協力し、対立を解決する力
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-t-4 border-green-500 md:col-span-2 lg:col-span-1">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <i className="ri-compass-3-line text-xl text-green-600"></i>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">責任ある意思決定</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  倫理的で建設的な選択をする力
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. まずは勉強会で体験してください */}
      <section id="study-session" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">まずは勉強会で体験してください</h2>
            <p className="text-center text-gray-600 mb-12">
              少人数制のオンライン勉強会で、気軽に体験・相談できます
            </p>

            {/* 画像：オンライン勉強会の様子 */}
            <div className="mb-10">
              <img
                src="/benkyokai.png"
                alt="オンライン勉強会の様子"
                className="rounded-2xl shadow-xl object-contain w-full max-h-64 md:max-h-80"
              />
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl p-10 shadow-xl">
              <div className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  SEL × ビビアン朗読ワークに興味のある先生向けに、少人数の勉強会・オンライン勉強会を継続的に開催しています。
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  実践例の共有やミニワーク体験など、導入前に雰囲気を感じていただける場です。
                  学校単位での導入を検討している先生も、まだ情報収集中の先生も、どなたでも歓迎です。
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  最新の勉強会情報は、公式LINEでお知らせしています。
                </p>
              </div>

              <div className="flex justify-center">
                <a
                  href="#"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-colors shadow-lg cursor-pointer"
                >
                  <i className="ri-line-fill text-2xl mr-3"></i>
                  勉強会情報をLINEで受け取る
                </a>
              </div>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  ※ クリックすると公式LINE（またはLINEグループ）へ移動します
                </p>
              </div>
            </div>

            {/* 教室のいまMAP */}
            <div className="mt-12 bg-white rounded-2xl p-10 shadow-xl border-2 border-pink-200">
              <div className="text-center mb-6">
                <div className="inline-block bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                  <i className="ri-gift-line mr-2"></i>
                  参加特典
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  ご参加いただいた方には学びの場の状態がわかる<br />
                  <span className="text-pink-600 font-bold text-xl">「教室のいまMAP」</span>を差し上げております。
                </p>
              </div>

              {/* 教室のいまMAP画像 */}
              <div className="flex justify-center">
                <img
                  src="/kyoushitsu-ima-map.png"
                  alt="教室のいまMAP - 学びの場の状態を可視化するツール"
                  className="rounded-xl shadow-lg object-contain w-full max-w-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. お問い合わせ */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">お問い合わせ</h2>
            <p className="text-center text-gray-600 mb-12">
              導入のご相談、研修のご依頼など、お気軽にお問い合わせください
            </p>

            <div className="bg-white rounded-2xl p-10 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-mail-line text-2xl text-pink-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">事務局メール</h3>
                    <a
                      href="mailto:info@selflove.or.jp"
                      className="text-pink-600 hover:text-pink-700 text-lg transition-colors cursor-pointer"
                    >
                      info@selflove.or.jp
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <i className="ri-user-line text-2xl text-orange-600"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2">担当</h3>
                    <p className="text-gray-700">
                      石原 蘭（セルフラブ教育家、ファシリテーター）
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 mt-6">
                  <p className="text-gray-700 leading-relaxed">
                    学校・教育委員会・放課後児童クラブなど、団体としてのご相談もこちらから受け付けています。
                    導入前のオンライン説明会や、教職員向け研修なども柔軟に対応いたします。
                  </p>
                </div>
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

export default ForTeachersPage;
