export class CoffeeShopModel {
  constructor(
    public name: string,
    public location: string,
    public hasPowerOutlets: boolean,
    public hasWifi: boolean,
    public hasGroupTables: boolean,

    ) {
    this.name = name;
    this.location = location;
    this.hasPowerOutlets = hasPowerOutlets;
    this.hasWifi = hasWifi;
    this.hasGroupTables = hasGroupTables;
  }
}