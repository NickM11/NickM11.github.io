// Tab navigation: highlight active section, scroll to it, support mobile toggle
(function () {
  const tabs = document.querySelectorAll('.tab');
  const tabsWrap = document.querySelector('.tabs');
  const toggle = document.querySelector('.navtoggle');
  const ctaButtons = document.querySelectorAll('[data-goto]');
  const sections = document.querySelectorAll('.section');

  function setActive(id) {
    tabs.forEach(t => t.classList.toggle('is-active', t.dataset.target === id));
  }

  function goTo(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActive(id);
    tabsWrap.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => goTo(tab.dataset.target));
  });

  ctaButtons.forEach(btn => {
    btn.addEventListener('click', () => goTo(btn.dataset.goto));
  });

  toggle.addEventListener('click', () => {
    const isOpen = tabsWrap.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Update active tab on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );
  sections.forEach(s => observer.observe(s));

  // Flag placeholder links in the console so they're easy to find when editing
  document.querySelectorAll('[data-placeholder]').forEach(el => {
    el.addEventListener('click', (e) => {
      if (el.getAttribute('href') === '#') {
        e.preventDefault();
        console.info('Update this link: data-placeholder="' + el.dataset.placeholder + '"');
      }
    });
  });
})();
