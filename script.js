const filterHeader = document.querySelector("#filter-header");
const filterDropDown = document.querySelector("#filter-drop-down");
const filterHeaderIcon = document.querySelector("#filter-header i")



filterHeader.addEventListener("click", () => {
    filterDropDown.classList.toggle("display-none");
    filterHeaderIcon.classList.toggle("bx-chevron-up");
})