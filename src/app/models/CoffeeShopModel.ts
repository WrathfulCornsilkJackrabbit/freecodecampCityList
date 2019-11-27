export class CoffeeShopModel {
  constructor(
    public id: number,
    public name: string,
    public location: string,
    public hasPowerOutlets: boolean,
    public hasWifi: boolean,
    public hasGroupTables: boolean
  ) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.hasPowerOutlets = hasPowerOutlets;
    this.hasWifi = hasWifi;
    this.hasGroupTables = hasGroupTables;
  }
}
