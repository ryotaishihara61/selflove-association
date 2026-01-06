/**
 * ビビアン教育OS - 先生向けランディングページ
 * メインJavaScriptファイル
 */

// =====================================================
// 定数
// =====================================================
const CONFIG = {
  WORKSHOP_FORM_URL: 'https://forms.gle/TYzuDEVu9SDBPtNQ8', // 勉強会申込フォームURL（このURLを変更すれば全CTAが更新されます）
  GIFT: {
    enabled: true, // 特典表示のON/OFF
    text: 'ご参加いただいた方には学びの場の状態がわかる「教室のいまMAP」を差し上げております。',
    image: '/kyoushitsu-ima-map.png', // 教室のいまMAP画像
  },
};

// 先生の声データ
const TESTIMONIALS = [
  {
    summary: '教室の空気が明らかに変わりました',
    text: '子どもたちが安心して話せるようになり、私自身も無理をしなくてよくなりました。',
    author: '私立中学校・担任',
    image: './assets/images/teacher1.png',
  },
  {
    summary: '10分だから続けやすい',
    text: '朝の会でビビアンワークをするようになってから、1日の始まりが穏やかになりました。',
    author: '公立小学校・担任',
    image: './assets/images/teacher2.png',
  },
  {
    summary: '探究学習の土台ができました',
    text: '子どもたちが自分の考えを言えるようになり、対話が深まりました。探究学習の前提づくりとして最適です。',
    author: '中学校・専科教員',
    image: './assets/images/teacher3.png',
  },
];

// ギャラリー画像データ
const GALLERY_IMAGES = [
  { src: './assets/images/gallery/1.jpg', alt: '実施のようす1' },
  { src: './assets/images/gallery/2.jpg', alt: '実施のようす2' },
  { src: './assets/images/gallery/3.jpg', alt: '実施のようす3' },
  { src: './assets/images/gallery/4.jpg', alt: '実施のようす4' },
  { src: './assets/images/gallery/5.png', alt: '実施のようす5' },
  { src: './assets/images/gallery/6.png', alt: '実施のようす6' },
];

// =====================================================
// DOMContentLoaded
// =====================================================
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initFAQ();
  initGallery();
  initTestimonials();
  initGift();
  initCTAButtons();
  initScrollBehavior();
});

// =====================================================
// モバイルメニュー
// =====================================================
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const menuIcon = document.getElementById('menuIcon');

  if (!mobileMenuBtn || !mobileMenu || !menuIcon) return;

  mobileMenuBtn.addEventListener('click', () => {
    const isActive = mobileMenu.classList.contains('active');

    if (isActive) {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('ri-close-line');
      menuIcon.classList.add('ri-menu-line');
    } else {
      mobileMenu.classList.add('active');
      menuIcon.classList.remove('ri-menu-line');
      menuIcon.classList.add('ri-close-line');
    }
  });

  // メニューリンクをクリックしたらメニューを閉じる
  const mobileNavLinks = mobileMenu.querySelectorAll('.vivian-mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('active');
      menuIcon.classList.remove('ri-close-line');
      menuIcon.classList.add('ri-menu-line');
    });
  });
}

// =====================================================
// FAQアコーディオン
// =====================================================
function initFAQ() {
  const faqItems = document.querySelectorAll('.vivian-faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.vivian-faq-question');

    if (!question) return;

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // 他のFAQを閉じる
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
        }
      });

      // クリックされたFAQをトグル
      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

// =====================================================
// ギャラリー
// =====================================================
function initGallery() {
  const galleryContainer = document.getElementById('galleryContainer');
  const modal = document.getElementById('galleryModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const modalClose = document.getElementById('modalClose');
  const modalImage = document.getElementById('modalImage');

  if (!galleryContainer) return;

  // ギャラリーアイテムを生成
  if (GALLERY_IMAGES.length > 0) {
    // 実際の画像がある場合
    GALLERY_IMAGES.forEach(image => {
      const item = document.createElement('div');
      item.className = 'vivian-gallery-item';
      item.innerHTML = `<img src="${image.src}" alt="${image.alt}">`;

      item.addEventListener('click', () => {
        openModal(image.src, image.alt);
      });

      galleryContainer.appendChild(item);
    });
  } else {
    // プレースホルダーを表示
    for (let i = 1; i <= 6; i++) {
      const item = document.createElement('div');
      item.className = 'vivian-gallery-item';
      item.innerHTML = `
        <div class="vivian-gallery-placeholder">
          <i class="ri-image-line" style="font-size: 3rem;"></i>
        </div>
      `;
      galleryContainer.appendChild(item);
    }
  }

  // モーダル開く
  function openModal(src, alt) {
    if (!modal || !modalImage) return;
    modalImage.src = src;
    modalImage.alt = alt;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // モーダル閉じる
  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // モーダルクローズイベント
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }

  // ESCキーでモーダルを閉じる
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// =====================================================
// 先生の声（Testimonials）
// =====================================================
function initTestimonials() {
  const testimonialsContainer = document.getElementById('testimonialsContainer');

  if (!testimonialsContainer) return;

  TESTIMONIALS.forEach(testimonial => {
    const card = document.createElement('div');
    card.className = 'vivian-testimonial-card';

    // 画像のHTML生成（画像がある場合は表示、ない場合はプレースホルダー）
    const imageHTML = testimonial.image
      ? `<img src="${testimonial.image}" alt="${testimonial.author}" class="vivian-testimonial-avatar">`
      : `<div class="vivian-testimonial-avatar vivian-testimonial-avatar-placeholder">
           <i class="ri-user-3-line"></i>
         </div>`;

    card.innerHTML = `
      ${imageHTML}
      <div class="vivian-testimonial-content">
        <div class="vivian-testimonial-quote">"</div>
        <p class="vivian-testimonial-summary">${testimonial.summary}</p>
        <p class="vivian-testimonial-text">${testimonial.text}</p>
        <p class="vivian-testimonial-author">（${testimonial.author}）</p>
      </div>
    `;
    testimonialsContainer.appendChild(card);
  });
}

// =====================================================
// 参加特典セクション
// =====================================================
function initGift() {
  const giftSection = document.getElementById('giftSection');

  if (!giftSection || !CONFIG.GIFT.enabled) return;

  giftSection.innerHTML = `
    <div class="vivian-gift-content">
      <div class="vivian-gift-image-wrapper">
        <img src="${CONFIG.GIFT.image}" alt="参加特典" class="vivian-gift-image">
      </div>
      <p class="vivian-gift-text">${CONFIG.GIFT.text}</p>
    </div>
  `;
}

// =====================================================
// CTAボタン
// =====================================================
function initCTAButtons() {
  // 全てのCTAボタンのリンクを更新
  const ctaButtons = document.querySelectorAll('a[href="https://example.com"]');

  ctaButtons.forEach(button => {
    button.href = CONFIG.WORKSHOP_FORM_URL;
  });

  // ハッシュリンクの処理
  const hashLinks = document.querySelectorAll('a[href^="#"]');

  hashLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#' || href === '') return;

      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const headerHeight = 80; // ヘッダーの高さ
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// =====================================================
// スクロール動作
// =====================================================
function initScrollBehavior() {
  // モバイルCTAの表示制御（スクロール時）
  const mobileCta = document.getElementById('mobileCta');
  const studySessionSection = document.getElementById('study-session');

  if (!mobileCta || !studySessionSection) return;

  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    const studySessionTop = studySessionSection.getBoundingClientRect().top;

    // 勉強会セクションが見えたらモバイルCTAを非表示
    if (studySessionTop < window.innerHeight && studySessionTop > 0) {
      mobileCta.style.transform = 'translateY(100%)';
    } else {
      mobileCta.style.transform = 'translateY(0)';
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
}

// =====================================================
// ユーティリティ関数
// =====================================================

/**
 * 要素が画面内に入ったかを判定
 */
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * スムーズスクロール（ポリフィル）
 */
if (!('scrollBehavior' in document.documentElement.style)) {
  const smoothScrollPolyfill = () => {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '') return;

        e.preventDefault();

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  };

  smoothScrollPolyfill();
}

// =====================================================
// パフォーマンス最適化
// =====================================================

/**
 * デバウンス関数
 */
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * スロットル関数
 */
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// =====================================================
// エクスポート（必要に応じて）
// =====================================================
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CONFIG,
    TESTIMONIALS,
    GALLERY_IMAGES,
  };
}
