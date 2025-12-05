// mobile nav toggle
const navToggle = document.getElementById('navToggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => {
  if (!nav) return;
  nav.style.display = nav.style.display === 'block' ? '' : 'block';
});

// smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
      if (nav.style.display === 'block') nav.style.display = '';
    }
  });
});

// modal for projects
const modal = document.getElementById('projectModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

document.querySelectorAll('.view-project').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.dataset.project;
    // sample content (بعدا خودت توضیح پروژه بذار)
    modalContent.innerHTML = <h3>پروژه ${id}</h3><p>توضیحات کامل پروژه ${id} اینجا قرار می‌گیرد.</p>;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden','false');
  });
});

if (closeModal) closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden','true');
});

// footer year
document.getElementById('year').innerText = new Date().getFullYear();

// contact form (نمایشی یا ارسال با Formspree)
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');
form && form.addEventListener('submit', e => {
  // اگر از Formspree استفاده می‌کنی، فرم ارسال واقعی می‌شود (action در HTML)
  // برای حالت نمایشی فقط پیام نشان می‌دیم:
  if (!form.action.includes('formspree.io')) {
    e.preventDefault();
    formMessage.innerText = 'پیام شما ثبت شد — اینجا فعلاً حالت آزمایشی است.';
    form.reset();
    setTimeout(()=> formMessage.innerText = '', 4000);
  }
});