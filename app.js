const panelx = document.querySelectorAll(".panel");

panelx.forEach(panel => {
    panel.addEventListener("click", () => {
        removeActive();
        panel.classList.add("active");
    })
})
function removeActive() {
    panelx.forEach( panel => {
        panel.classList.remove("active");
    })
}