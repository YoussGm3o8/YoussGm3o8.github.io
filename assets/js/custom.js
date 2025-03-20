document.addEventListener('DOMContentLoaded', function() {
  const scrollPage = document.querySelector('.scroll-page');
  const sidebar = document.querySelector('.sidebar');
  let lastScroll = 0;
  let isTransitioning = false;

  function handleScroll() {
    if (!isTransitioning) {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 100 && !scrollPage.classList.contains('content-expanded')) {
        isTransitioning = true;
        sidebar.classList.add('hidden');
        
        // Wait for sidebar to start hiding before expanding content
        setTimeout(() => {
          scrollPage.classList.add('content-expanded');
          // Reset transition lock after animation completes
          setTimeout(() => {
            isTransitioning = false;
          }, 500);
        }, 100);
      } else if (currentScroll <= 100 && scrollPage.classList.contains('content-expanded')) {
        isTransitioning = true;
        scrollPage.classList.remove('content-expanded');
        
        // Wait for content to start contracting before showing sidebar
        setTimeout(() => {
          sidebar.classList.remove('hidden');
          // Reset transition lock after animation completes
          setTimeout(() => {
            isTransitioning = false;
          }, 500);
        }, 100);
      }
      
      lastScroll = currentScroll;
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
});
