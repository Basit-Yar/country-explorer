const filterHeader = document.querySelector("#filter-header");
const filterDropDown = document.querySelector("#filter-drop-down");



filterHeader.addEventListener("click", () => {
    filterDropDown.classList.toggle("display-none")
})