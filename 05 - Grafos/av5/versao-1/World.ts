import Place from "./Place.ts";

export default class World {
    private tree = new Map<string, string[]>();

    public constructor(){
        this.tree.set('World', []);
    }

    public add(place: Place): boolean{

        if(!this.tree.has(place.getContinent())){
            this.tree.get('World')?.push(place.getContinent());
            this.tree.set(place.getContinent(), []);

            if(place.getCountry == undefined)
                return true;

            if(!this.tree.has(place.getCountry()) && place.getCountry != undefined){
                this.tree.get(place.getContinent())?.push(place.getCountry());
                this.tree.set(place.getCountry(), []);

                if(place.getCity() == undefined)
                    return true;

                if(!this.tree.has(place.getCity()) && place.getCity() != undefined){
                    this.tree.get(place.getCountry())?.push(place.getCity());
                    this.tree.set(place.getCity(), []);
                    return true;
                }
            }

        } 

        return false;
    }

    public toString(): string{
        let aux: string = '';

        let continents = this.tree.get('World');

        if(!continents)
            return 'Nenhum continente cadastrado';

        for(let continent of continents){
            aux += `- ${continent}\n`;

            let countries = this.tree.get(continent);

            if(countries) {
                for(let country of countries){
                    aux += `  - ${country}\n`;

                    let cities = this.tree.get(country);
                    if(cities) {
                        for(let city of cities){
                            aux += `    - ${city}\n`;
                        }
                    }
                }
            }
        }

        return aux;
    }



}