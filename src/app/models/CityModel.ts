import { CoffeeShopModel } from './CoffeeShopModel';

export class CityModel {
  id: number;
  name: string;
  imagePath: string;
  coffeeShops: CoffeeShopModel[];
}