// Hiệu ứng đổi màu navbar khi scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50);
});