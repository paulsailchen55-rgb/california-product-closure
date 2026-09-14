// Small, dependency-free interaction layer. The site intentionally remains static and portable.
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>document.body.classList.add('navigated')));
