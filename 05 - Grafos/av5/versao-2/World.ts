import Place from "./Place.ts";

export default class World {
  private tree = new Map<string, string[]>();

  public constructor() {
    this.tree.set("World", []);
  }

  public add(place: Place): boolean {
    let aux: boolean = false;

    if(place.getContinent()) {
      aux = this.addContinent(place);
      this.addContinent(place);
    }

    if(place.getCountry()){
      aux = this.addCountry(place);
      this.addCountry(place);
    }

    if(place.getCity()){
      aux = this.addCity(place);
      this.addCity(place);
    }

    return aux;
  }

  private addContinent(place: Place): boolean {
    if(!this.tree.has(place.getContinent())){
      this.tree.get("World")?.push(place.getContinent());
      this.tree.set(place.getContinent(), []);
      return true;
    }
    return false;
  }

  private addCountry(place: Place): boolean {
    let country = place.getCountry();
    if (this.tree.has(place.getContinent()) && country && !this.tree.has(country)) {
        this.tree.get(place.getContinent())?.push(country);
        this.tree.set(country, []);
        return true;
      }
    return false;
  }

  private addCity(place: Place): boolean {
    let city = place.getCity();
    let country = place.getCountry();
    if(country && this.tree.has(country) && city && !this.tree.has(city)) {
      this.tree.get(country)?.push(city);
      this.tree.set(city, []);
      return true;
    }

    return false;
  }

  public toString(): string {
    let aux: string = "World\n";

    let continents = this.tree.get("World");

    if (!continents) return "Nenhum continente cadastrado.";

    for (let continent of continents) {
      aux += `- ${continent}\n`;

      let countries = this.tree.get(continent);

      if (countries) {
        for (let country of countries) {
          aux += `  - ${country}\n`;

          let cities = this.tree.get(country);
          if (cities) {
            for (let city of cities) {
              aux += `    - ${city}\n`;
            }
          }
        }
      }
    }

    return aux;
  }
}
