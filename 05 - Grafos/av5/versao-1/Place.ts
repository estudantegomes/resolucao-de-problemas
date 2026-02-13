export default class Place{
    private continent: string; 
    private country?: string; 
    private city?: string;

    public constructor(continent: string, country?: string, city?: string){
        this.continent = continent;
        this.country = country;
        if(country)
            this.city = city;
    }

    public getContinent(): string{
        return this.continent;
    }

    public getCountry(): string{
        if(this.country)
            return this.country;
        return 'País não cadastrado.';
    }

    public getCity(): string{
        if(this.city)
            return this.city;
        return 'Cidade não cadastrada.';
    }

    public setContinent(continent: string): void{
        this.continent = continent;
    }

    public setCountry(country: string): void{
        this.country = country;
    }

    public setCity(city: string): void{
        this. city = city;
    }
}