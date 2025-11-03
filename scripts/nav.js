const toggle = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-nav-menu]");
const backdrop = document.querySelector("[data-nav-backdrop]");

function openNav() {
    document.body.classList.add("nav-open");
    toggle?.setAttribute("aria-expanded", "true");
    menu?.setAttribute("aria-hidden", "false");
    if (backdrop) backdrop.hidden = false;
}

function closeNav() {
    document.body.classList.remove("nav-open");
    toggle?.setAttribute("aria-expanded", "false");
    menu?.setAttribute("aria-hidden", "true");
    if (backdrop) backdrop.hidden = true;
}

toggle?.addEventListener("click", () => {
    document.body.classList.contains("nav-open") ? closeNav() : openNav();
});
backdrop?.addEventListener("click", closeNav);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeNav(); });
menu?.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a && window.matchMedia("(max-width: 767px)").matches) closeNav();
});

document.addEventListener("click", (e) => {
    const toggler = e.target.closest("[data-dropdown-toggle]");
    const dropdown = e.target.closest(".dropdown");
    document.querySelectorAll(".dropdown").forEach((d) => { if (d !== dropdown) d.classList.remove("is-open"); });
    if (toggler) toggler.closest(".dropdown")?.classList.toggle("is-open");
    else if (!dropdown) document.querySelectorAll(".dropdown").forEach((d) => d.classList.remove("is-open"));
});
