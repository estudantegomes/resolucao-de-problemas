export default class Place {
  private continent: string;
  private country?: string;
  private city?: string;

  public constructor(continent: string, country?: string, city?: string) {
    this.continent = continent;
    this.country = country;
    this.city = city;
  }

  public getContinent(): string {
    return this.continent;
  }

  public getCountry(): string | undefined {
    return this.country;
  }

  public getCity(): string | undefined {
    return this.city;
  }

  public setContinent(continent: string): void {
    this.continent = continent;
  }

  public setCountry(country: string): void {
    this.country = country;
  }

  public setCity(city: string): void {
    this.city = city;
  }
}
