import { useState } from 'react';
import Header from '../../components/Header';
import '../../styles/vivian-os.css';

const VivianOSPage = () => {
  const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const testimonials = [
    {
      summary: '教室の空気が明らかに変わりました',
      text: '子どもたちが安心して話せるようになり、私自身も無理をしなくてよくなりました。',
      author: '私立中学校・担任',
      image: '/assets/images/vivian-os/teacher1.jpg',
    },
    {
      summary: '10分だから続けやすい',
      text: '朝の会でビビアンワークをするようになってから、1日の始まりが穏やかになりました。',
      author: '公立小学校・担任',
      image: '/assets/images/vivian-os/teacher2.jpg',
    },
    {
      summary: '探究学習の土台ができました',
      text: '子どもたちが自分の考えを言えるようになり、対話が深まりました。探究学習の前提づくりとして最適です。',
      author: '中学校・専科教員',
      image: '/assets/images/vivian-os/teacher3.jpg',
    },
  ];

  const galleryImages = [
    { src: '/assets/images/vivian-os/gallery/1.jpg', alt: '実施のようす1' },
    { src: '/assets/images/vivian-os/gallery/2.jpg', alt: '実施のようす2' },
    { src: '/assets/images/vivian-os/gallery/3.jpg', alt: '実施のようす3' },
    { src: '/assets/images/vivian-os/gallery/4.jpg', alt: '実施のようす4' },
    { src: '/assets/images/vivian-os/gallery/5.jpg', alt: '実施のようす5' },
    { src: '/assets/images/vivian-os/gallery/6.jpg', alt: '実施のようす6' },
  ];

  const faqs = [
    {
      question: '忙しくても続けられますか？',
      answer: '1回10分から始められます。朝の会や帰りの会など、既存の時間枠の中で無理なく実践できます。',
    },
    {
      question: '学年は限定されますか？',
      answer: '小学校から高校まで、学年・教科を問わず実施できます。担任・専科・管理職の先生にもご活用いただけます。',
    },
    {
      question: '特別な準備は必要ですか？',
      answer: '特別な準備や研修は不要です。勉強会で基本的なワークを体験すれば、すぐに教室で始められます。',
    },
    {
      question: '効果はどのくらいで実感できますか？',
      answer: '個人差はありますが、継続することで徐々に教室の雰囲気が変わってきます。数週間から1ヶ月程度で変化を感じる先生が多いです。',
    },
    {
      question: '学校全体で導入することは可能ですか？',
      answer: 'はい、可能です。学校単位での研修や導入支援も行っています。詳しくはお問い合わせください。',
    },
  ];

  const toggleQuestion = (index: number) => {
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <Header currentPage="vivian-os" />

      {/* メインコンテンツ */}
      <main className="vivian-main">
        {/* 1. ファーストビュー */}
        <section className="vivian-hero" id="hero">
          <div className="vivian-hero-overlay"></div>
          <div className="vivian-hero-content">
            <h2 className="vivian-hero-title">
              <span className="vivian-hero-title-line">教室に「話し合える空気」をつくる。</span>
              <span className="vivian-hero-title-line">たった10分から始める、教育のOS。</span>
            </h2>
            <p className="vivian-hero-subtitle">
              絵本×朗読×対話で 子どもと先生のウェルビーイングを整える <strong>ビビアン教育OS</strong>
            </p>
            <div className="vivian-hero-cta">
              <a
                href="https://forms.gle/TYzuDEVu9SDBPtNQ8"
                target="_blank"
                rel="noopener noreferrer"
                className="vivian-btn vivian-btn-primary"
              >
                勉強会に申し込む（無料）
              </a>
              <p className="vivian-hero-note">すでに複数校で実践が始まっています</p>
            </div>
          </div>
        </section>

        {/* 2. 5点訴求 */}
        <section className="vivian-section vivian-features">
          <div className="vivian-container">
            <div className="vivian-features-grid">
              {[
                { icon: 'ri-time-line', title: '1回10分。15〜20分で始められる', text: '朝の会・帰りの会・授業のすき間に無理なく実践できます。慣れてきたら15〜20分に拡張も可能です。' },
                { icon: 'ri-team-line', title: '学年・教科・立場を問わない', text: '小学校から高校まで、どの学年・どの教科でも実践可能。担任・専科・管理職の先生にもご活用いただけます。' },
                { icon: 'ri-settings-line', title: '教材やツールではなく「教育のOS」', text: '教室に流れる"前提"を整えることで、すべての活動がスムーズに機能し始めます。' },
                { icon: 'ri-lightbulb-line', title: '探究学習・対話の前提をつくる', text: '安心して話せる空気が学びを動かします。探究学習や主体的・対話的で深い学びの土台になります。' },
                { icon: 'ri-thumb-up-line', title: '導入がラクで、続けやすい', text: '特別な準備や研修は不要。勉強会で基本を学べば、翌日から教室で実践できます。' },
              ].map((feature, index) => (
                <div key={index} className="vivian-feature-card">
                  <div className="vivian-feature-icon">
                    <i className={feature.icon}></i>
                  </div>
                  <h3 className="vivian-feature-title">{feature.title}</h3>
                  <p className="vivian-feature-text">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. 共感セクション */}
        <section className="vivian-section vivian-empathy">
          <div className="vivian-container">
            <h2 className="vivian-section-title">こんな教室の悩み、ありませんか？</h2>
            <div className="vivian-empathy-content">
              <div className="vivian-empathy-bubbles">
                {['手を挙げる子が限られている', '間違えることを怖がる雰囲気がある', '話し合いが深まらない', '探究学習が形だけになってしまう', '先生が一人で抱え込んでしまう'].map((text, index) => (
                  <div key={index} className="vivian-empathy-bubble">
                    <p>{text}</p>
                  </div>
                ))}
              </div>
              <p className="vivian-empathy-message">
                これらは先生の努力不足ではありません。<br />
                教室の「前提となる空気」が、まだ整っていないだけです。
              </p>
            </div>
          </div>
        </section>

        {/* 4. ビビアン教育OSとは */}
        <section className="vivian-section vivian-about-os">
          <div className="vivian-container">
            <h2 className="vivian-section-title">ビビアン教育OSとは？</h2>
            <div className="vivian-about-os-content">
              <p className="vivian-about-os-text">
                ビビアン教育OSは、<br />
                絵本「ビビアン」を使った朗読の時間、<br />
                教室で続けられる1回10分のシンプルなワーク、<br />
                そして仲間と共有する時間を組み合わせた仕組みです。
              </p>
              <p className="vivian-about-os-text">
                教材や指導法ではなく、<br />
                教室に流れる「安心して話せる前提」を整えることを目的としています。
              </p>
              <div className="vivian-os-steps">
                <div className="vivian-os-step">
                  <div className="vivian-os-step-number">1</div>
                  <h3 className="vivian-os-step-title">絵本の朗読</h3>
                  <p className="vivian-os-step-text">ビビアンの物語を共有</p>
                </div>
                <div className="vivian-os-step-arrow">
                  <i className="ri-arrow-right-line"></i>
                </div>
                <div className="vivian-os-step">
                  <div className="vivian-os-step-number">2</div>
                  <h3 className="vivian-os-step-title">10分ワーク</h3>
                  <p className="vivian-os-step-text">教室で実践できるシンプルなワーク</p>
                </div>
                <div className="vivian-os-step-arrow">
                  <i className="ri-arrow-right-line"></i>
                </div>
                <div className="vivian-os-step">
                  <div className="vivian-os-step-number">3</div>
                  <h3 className="vivian-os-step-title">共有</h3>
                  <p className="vivian-os-step-text">仲間や子どもたちとの対話</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 子どもたちの変化 */}
        <section className="vivian-section vivian-changes-kids">
          <div className="vivian-container">
            <h2 className="vivian-section-title">教室で起きる、子どもたちの変化</h2>
            <p className="vivian-section-intro">
              ビビアン教育OSを続けることで、<br />
              子どもたちの行動に少しずつ変化が現れます。
            </p>
            <div className="vivian-changes-grid">
              {[
                { icon: 'ri-hand-heart-line', text: '手が挙がる' },
                { icon: 'ri-question-line', text: '質問が増える' },
                { icon: 'ri-chat-3-line', text: '自分の考えを言える' },
                { icon: 'ri-user-voice-line', text: '友達の意見を聞ける' },
                { icon: 'ri-flashlight-line', text: '間違いを恐れず挑戦できる' },
              ].map((change, index) => (
                <div key={index} className="vivian-change-item">
                  <i className={change.icon}></i>
                  <p>{change.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. 先生の声 */}
        <section className="vivian-section vivian-testimonials">
          <div className="vivian-container">
            <h2 className="vivian-section-title">実践した先生の声</h2>
            <div className="vivian-testimonials-grid">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="vivian-testimonial-card">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    loading="lazy"
                    className="vivian-testimonial-avatar"
                  />
                  <div className="vivian-testimonial-content">
                    <div className="vivian-testimonial-quote">"</div>
                    <p className="vivian-testimonial-summary">{testimonial.summary}</p>
                    <p className="vivian-testimonial-text">{testimonial.text}</p>
                    <p className="vivian-testimonial-author">（{testimonial.author}）</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. 教室・先生の変化 */}
        <section className="vivian-section vivian-changes-teacher">
          <div className="vivian-container">
            <h2 className="vivian-section-title">教室と先生にも、こんな変化が</h2>
            <div className="vivian-teacher-changes-grid">
              {[
                { icon: 'ri-home-smile-line', title: '教室の雰囲気が安定する', text: '落ち着いた、安心できる空間に' },
                { icon: 'ri-chat-4-line', title: '対話が自然に生まれる', text: '強制しなくても話し合いが起きる' },
                { icon: 'ri-plant-line', title: '学びが深まる', text: '探究・創造的な学びにつながる' },
                { icon: 'ri-heart-3-line', title: '先生が無理をしなくてよくなる', text: '教室運営がラクになる' },
              ].map((change, index) => (
                <div key={index} className="vivian-teacher-change-card">
                  <div className="vivian-teacher-change-icon">
                    <i className={change.icon}></i>
                  </div>
                  <h3 className="vivian-teacher-change-title">{change.title}</h3>
                  <p className="vivian-teacher-change-text">{change.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. 実施校写真ギャラリー */}
        <section className="vivian-section vivian-gallery">
          <div className="vivian-container">
            <h2 className="vivian-section-title">実施のようす</h2>
            <div className="vivian-gallery-grid">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="vivian-gallery-item"
                  onClick={() => setSelectedImage(image.src)}
                  style={{ cursor: 'pointer' }}
                >
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ギャラリーモーダル */}
        {selectedImage && (
          <div className="vivian-modal active">
            <div className="vivian-modal-overlay" onClick={() => setSelectedImage(null)}></div>
            <div className="vivian-modal-content">
              <button className="vivian-modal-close" onClick={() => setSelectedImage(null)} aria-label="閉じる">
                <i className="ri-close-line"></i>
              </button>
              <img src={selectedImage} alt="" />
            </div>
          </div>
        )}

        {/* 9. 勉強会でわかること */}
        <section className="vivian-section vivian-study-content">
          <div className="vivian-container">
            <h2 className="vivian-section-title">勉強会でお伝えすること</h2>
            <div className="vivian-study-content-list">
              {[
                { icon: 'ri-book-open-line', title: 'ビビアン教育OSの全体像', text: 'なぜ今、教育のOSが必要なのか' },
                { icon: 'ri-edit-line', title: '10分ワークの具体例', text: 'すぐに実践できるワークを体験' },
                { icon: 'ri-school-line', title: '教室への落とし込み方', text: '具体的な導入ステップと継続のコツ' },
                { icon: 'ri-presentation-line', title: '実践校の事例紹介', text: 'リアルな変化と先生の声' },
                { icon: 'ri-question-answer-line', title: '質疑応答', text: '気になることを直接質問できます' },
              ].map((content, index) => (
                <div key={index} className="vivian-study-content-item">
                  <div className="vivian-study-content-icon">
                    <i className={content.icon}></i>
                  </div>
                  <div className="vivian-study-content-text">
                    <h3>{content.title}</h3>
                    <p>{content.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 10. 勉強会概要 & 最終CTA */}
        <section className="vivian-section vivian-study-session" id="study-session">
          <div className="vivian-container">
            <h2 className="vivian-section-title">勉強会の概要</h2>
            <div className="vivian-study-session-content">
              <div className="vivian-study-session-info">
                {[
                  { label: '対象', value: '学校の先生（小・中・高）' },
                  { label: '所要時間', value: '約90分' },
                  { label: '開催形式', value: 'オンライン（Zoom）／対面' },
                  { label: '開催頻度', value: '月1〜2回程度' },
                  { label: '参加費', value: '無料' },
                  { label: '準備物', value: 'なし' },
                  { label: '申込締切', value: '開催日の3日前まで' },
                ].map((info, index) => (
                  <div key={index} className="vivian-study-info-item">
                    <div className="vivian-study-info-label">{info.label}</div>
                    <div className="vivian-study-info-value">{info.value}</div>
                  </div>
                ))}
              </div>
              <div className="vivian-study-flow">
                <h3 className="vivian-study-flow-title">参加の流れ</h3>
                <ol className="vivian-study-flow-list">
                  <li>下記ボタンから申込フォームに入力</li>
                  <li>自動返信メールで詳細をご案内</li>
                  <li>当日、オンラインまたは会場にて参加</li>
                </ol>
              </div>
            </div>
            <div className="vivian-final-cta">
              <h3 className="vivian-final-cta-title">まずは勉強会で体験してください</h3>
              <p className="vivian-final-cta-text">
                導入のハードルは高くありません。<br />
                教室の空気づくりから、少しずつ始められます。
              </p>
              <div className="vivian-gift-section">
                <div className="vivian-gift-content">
                  <div className="vivian-gift-image-wrapper">
                    <img src="/kyoushitsu-ima-map.png" alt="参加特典" className="vivian-gift-image" />
                  </div>
                  <p className="vivian-gift-text">
                    ご参加いただいた方には学びの場の状態がわかる「教室のいまMAP」を差し上げております。
                  </p>
                </div>
              </div>
              <a
                href="https://forms.gle/TYzuDEVu9SDBPtNQ8"
                target="_blank"
                rel="noopener noreferrer"
                className="vivian-btn vivian-btn-primary vivian-btn-large"
              >
                勉強会に申し込む（無料）
              </a>
            </div>
          </div>
        </section>

        {/* 11. FAQ */}
        <section className="vivian-section vivian-faq">
          <div className="vivian-container">
            <h2 className="vivian-section-title">よくある質問</h2>
            <div className="vivian-faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className={`vivian-faq-item ${activeQuestion === index ? 'active' : ''}`}>
                  <button className="vivian-faq-question" onClick={() => toggleQuestion(index)}>
                    <span>{faq.question}</span>
                    <i className="ri-arrow-down-s-line"></i>
                  </button>
                  <div className="vivian-faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="vivian-footer">
        <div className="vivian-container">
          <div className="vivian-footer-content">
            <div className="vivian-footer-logo-area">
              <img src="/assets/images/logo.png" alt="セルフラブ協会ロゴ" className="vivian-footer-logo-img" />
              <h3 className="vivian-footer-title">一般社団法人セルフラブ協会</h3>
            </div>
            <p className="vivian-footer-subtitle">Self Love Association Japan</p>
            <div className="vivian-footer-info">
              <div className="vivian-footer-info-section">
                <h4 className="vivian-footer-info-title">お問い合わせ</h4>
                <a href="mailto:info@selflove.or.jp" className="vivian-footer-link">
                  info@selflove.or.jp
                </a>
              </div>
              <div className="vivian-footer-info-section">
                <h4 className="vivian-footer-info-title">所在地</h4>
                <p className="vivian-footer-text">
                  東京都千代田区九段南一丁目5番6号
                  <br />
                  りそな九段ビル5階KSフロア
                </p>
              </div>
              <div className="vivian-footer-info-section">
                <h4 className="vivian-footer-info-title">SNS</h4>
                <div className="vivian-footer-social">
                  <a
                    href="https://www.instagram.com/selflove.laboratory/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="vivian-footer-social-link"
                    aria-label="Instagram"
                  >
                    <i className="ri-instagram-fill"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="vivian-footer-bottom">
              <p className="vivian-footer-copyright">
                Copyright © Self Love Association Japan. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* モバイル固定CTA（スマホのみ表示） */}
      <div className="vivian-mobile-cta" id="mobileCta">
        <a
          href="https://forms.gle/TYzuDEVu9SDBPtNQ8"
          target="_blank"
          rel="noopener noreferrer"
          className="vivian-mobile-cta-btn"
        >
          勉強会に申し込む（無料）
        </a>
      </div>
    </div>
  );
};

export default VivianOSPage;
