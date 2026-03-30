function copyValue(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert("Berhasil disalin: " + text);
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 80) {
        nav.classList.add('shadow-md', 'py-2');
        nav.classList.remove('py-3');
    } else {
        nav.classList.remove('shadow-md', 'py-2');
        nav.classList.add('py-3');
    }
});