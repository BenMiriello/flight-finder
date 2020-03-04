export const fetchAirports = (input) => {
    console.log(input)
    return fetch(`https://cometari-airportsfinder-v1.p.rapidapi.com/api/airports/by-text?text=${input}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "cometari-airportsfinder-v1.p.rapidapi.com",
                "x-rapidapi-key": "e1cdf5f0e0mshde71621b569eda5p1bb99cjsn988de04b7910"
            }
        })
        .then(r => r.json())
        .then(places => {
            console.log(places)
            return places
        })
        .catch(err => {
            console.log(err)
        })
}

