// ヘッダーのナビリンクをクリックしたとき、スムーズスクロール（CSS scroll-behavior でカバー済み）
// ここでは追加のインタラクションのみ記述

// カードのフェードイン（Intersection Observer）
const cards = document.querySelectorAll('.card, .stat-card');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  cards.forEach((card) => {
    card.classList.add('fade-init');
    observer.observe(card);
  });
}
