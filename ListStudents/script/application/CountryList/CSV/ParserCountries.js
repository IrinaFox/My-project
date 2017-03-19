'use strict';

//Create countries list
function parserCountries () {
    var countriesListCSV = countriesSCV.split(/\r?\n/),
        countryList = [];

    countriesListCSV.forEach(function (country) {
        var countryData = country.split('	'),
            countryName = countryData[0],
            region = countryData[1],
            population = countryData[2],
            area = countryData[3],
            newCountry,
            country = {
                name: countryName,
                population: population,
                area: area,
                region: region
            };

        newCountry = new Country(country);
        countryList.push(newCountry);
    });

    return countryList;
}

//Find unique regions
    function parserContinents () {
        var continents = countriesSCV.split(/\r?\n/),
            uniqueContinents =[],
            i;

        continents.forEach(function (continent) {
            var region = continent.split('	')[1];

            if (uniqueContinents.length === 0) {
                uniqueContinents.push(region);
            } else {
                for (i = 0; i < uniqueContinents.length; i++) {
                    if (region === uniqueContinents[i]) {
                        break;
                    }
                    if (i === (uniqueContinents.length - 1)) {
                        uniqueContinents.push(region);
                    }
                }
            }
    });

    return uniqueContinents;
}