import { Page } from '@playwright/test';

export async function stabilizeHeroCarousel(page: Page) {
  // 1) Глобально глушим CSS-анимации/переходы (самый большой источник шума)
  await page.addStyleTag({
    content: `
      *,
      *::before,
      *::after {
        animation: none !important;
        transition: none !important;
        scroll-behavior: auto !important;
        caret-color: transparent !important;
      }

      /* Owl: убираем transform/transition */
      .owl-stage {
        transition: none !important;
        transform: translate3d(0px, 0px, 0px) !important;
        will-change: auto !important;
      }

      /* Если Lottie даёт шум — можно замаскировать только его */
      .lottie-slide, [data-animation-path] {
        animation: none !important;
      }
    `,
  });

  // 2) Останавливаем Owl autoplay и переводим на фиксированный слайд (0)
  await page.evaluate(() => {
    const carousels = document.querySelectorAll<HTMLElement>('.owl-carousel');
    carousels.forEach((c) => {
      // Если на странице есть jQuery + Owl events (часто так и есть)
      const w = window as any;
      if (w.jQuery && w.jQuery(c)?.trigger) {
        try {
          w.jQuery(c).trigger('stop.owl.autoplay');
          // to.owl.carousel: [position, speed, standard]
          w.jQuery(c).trigger('to.owl.carousel', [0, 0, true]);
        } catch {}
      }

      // На всякий случай — “ручная фиксация” stage
      const stage = c.querySelector<HTMLElement>('.owl-stage');
      if (stage) {
        stage.style.transition = 'none';
        stage.style.transform = 'translate3d(0px, 0px, 0px)';
      }
    });

    // 3) Попробуем “прибить” lottie если библиотека доступна
    const w = window as any;
    if (w.lottie?.pause) {
      try { w.lottie.pause(); } catch {}
    }
  });

  // 4) Дай верстке “успокоиться”
  await page.waitForTimeout(200);
}