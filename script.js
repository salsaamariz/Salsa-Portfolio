/* DOM */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navMenu = document.querySelector('#nav-menu');
let sections = document.querySelectorAll('section');

/* JSON Data */
const navData = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "education", name: "Education" },
    { id: "projects", name: "Projects" },
    { id: "services", name: "Services" },
    { id: "skills", name: "Skills" },
    { id: "contact", name: "Contact" }
];

/* Menambahkan Menu ke Navbar Menggunakan DOM */
navData.forEach(item => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.href = `#${item.id}`;
    a.textContent = item.name;
    li.appendChild(a);
    navMenu.appendChild(li);
});

/* Ambil ulang elemen navigasi setelah ditambahkan ke DOM */
let navlinks = document.querySelectorAll('header nav a');

/* Fungsi ScrollSpy untuk Menandai Menu Aktif */
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });
};

/* Toggle Navbar saat ikon menu diklik (untuk tampilan responsif) */
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};