class SwapiService {
    
}


const getResourse = async (url) => {
    const res = await fetch(url);
    const body = await res.json();
    return body;
}

getResourse('https://swapi.co/api/people/1212312/')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.log('Could not fatch', err);
    });