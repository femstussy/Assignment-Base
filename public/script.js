
const cities = [];

fetch(endpoint)  //fetch request
    .then(blob => blob.json())
    .then(data => cities.push(...data))

function findMatches(wordToMatch, cities){
    return cities.filter(place => {

        constregex = new RegExp(wordToMatch, 'gi'); //looks through string matching lower/uppercase
        return place.city.match(regex) || place.state.match(regex)  //checks if city or state matches
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//called when someone changes value
function displayMatches(){
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="h1">${this.value}
        </span>`) //finds what matched in regex & replace with span & searched value
        const stateName = place.state.replace(regex, `<span class="h1">${this.value}
        </span>`)
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const searchInput = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

window.onload = windowActions;
