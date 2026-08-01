// Mobile nav
const toggle = document.getElementById('nav-toggle');
const links = document.getElementById('nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});
links.addEventListener('click', e => {
  if (e.target.closest('a')) {
    links.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Scroll reveal fallback for browsers without scroll-driven animations (Safari, Firefox)
if (!CSS.supports('animation-timeline', 'view()')) {
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px -12% 0px' });
  document.querySelectorAll('.rv, .rvi').forEach(el => io.observe(el));
}

// Contact form: posts to the action URL (Formspree by default). Falls back to mailto if unconfigured.
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');
form.addEventListener('submit', async e => {
  const data = new FormData(form);
  if (form.action.includes('YOUR_FORM_ID')) {
    e.preventDefault();
    const email = encodeURIComponent(String(data.get('email') || ''));
    const body = encodeURIComponent(String(data.get('message') || '') + '\n\n— ' + email);
    window.location.href = `mailto:you@email.com?subject=Portfolio enquiry&body=${body}`;
    note.textContent = 'Opening your email client — set a form endpoint in index.html to send from the page.';
    return;
  }
  e.preventDefault();
  note.textContent = 'Sending…';
  try {
    const res = await fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } });
    if (!res.ok) throw new Error('Request failed');
    form.reset();
    note.textContent = 'Thanks — message received. I reply within a day or two.';
  } catch {
    note.textContent = 'That did not send. Email you@email.com directly and it will reach me.';
  }
});
