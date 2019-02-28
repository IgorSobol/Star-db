export default class SwapiService {
    _apiBase = 'https://swapi.co/api';
    async getResourse (url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not feth ${url}, received ${res.status}`)
        }
        const body = await res.json();
        return body;
    }
    // People
    async getAllPeople() {
        const res = await this.getResourse(`/people/`);
        return res.results;
    }
    getPerson(id){
        return this.getResourse(`/people/${id}/`)
    }
    // Planets
    async getAllPlanets() {
        const res = await this.getResourse(`/planets/`);
        return res.results;
    }
    getPlanet(id){
        return this.getResourse(`/planets/${id}/`)
    }
    // Starships
    async getAllStarships() {
        const res = await this.getResourse(`/starships/`);
        return res.results;
    }
    getStarship(id){
        return this.getResourse(`/starships/${id}/`)
    }
}


const swapi = new SwapiService();

swapi.getAllStarships().then((planets) => {
    planets.forEach(element => {
        console.log(element.name);
    });
})