const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
loadCountries();

const displayCountries = countries => {
    // for (const country of counties) {
    //     console.log(country);
    // }
    const countriesDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country')
        div.innerHTML = `
            <p><img src=${country.flags.png} width="50px"> ${country.continents}</p>
            <p>Country: ${country.name.common}</p>
            <p>Capital: ${country.capital}</p>
            <p>Total Population: ${country.population}</p>
        `;
        countriesDiv.appendChild(div);
    });
}