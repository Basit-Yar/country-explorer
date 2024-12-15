const filterHeader = document.querySelector("#filter-header");
const filterDropDown = document.querySelector("#filter-drop-down");
const filterHeaderIcon = document.querySelector("#filter-header i");
const countryListing = document.querySelector("#country-listing");
let filterHeaderText = document.querySelector("#filter-header span");

filterDropDown.addEventListener("click", event => {
    filterHeaderText.textContent = event.target.textContent;
    filterDropDown.classList.toggle("display-none");
    filterHeaderIcon.classList.toggle("bx-chevron-up");
})

filterHeader.addEventListener("click", () => {
    filterDropDown.classList.toggle("display-none");
    filterHeaderIcon.classList.toggle("bx-chevron-up");
})

// rest countries api data fetching

const baseUrl = "https://restcountries.com/v2/all";
const specifiedFields = "?fields=name,capital,region,population,flags";

// fetch(url)
//     .then(response => {
//         return response.json(); // Parse JSON from the response
//     })
//     .then(data => {
//         countriesData = data;
//     })
//     .catch(error => {
//         console.error('There was a problem with the fetch operation:', error);
//     });

async function fetchCountriesDataWithSpecifiedFields() {
    try {
        const response = await fetch(baseUrl + specifiedFields);
        const countriesData = await response.json();
        // console.log(countriesData)
        return countriesData;
    } catch (error) {
        console.log(`Error: ${error}`);
        return [];
    }
}

countryCards = "";
fetchCountriesDataWithSpecifiedFields().then(data => {
    data.map(country => {
        countryCards += `<div class="country-card">
                            <img src="${country.flags.png}" alt="err_img">
                            <div class="country-info">
                                <h3 class="country-title">${country.name}</h3>
                                <ul>
                                    <li><span class="text-bold">Population:</span> ${country.population}</li>
                                    <li><span class="text-bold">Capital:</span> ${country.capital}</li>
                                    <li><span class="text-bold">Region:</span> ${country.region}</li>
                                </ul>
                            </div>
                        </div>`
    })

    countryListing.innerHTML = countryCards;
});

