import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Food } from './food';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const foods = [
        { id: 11, name: 'Salad' },
        { id: 12, name: 'Lasagnia' },
        { id: 13, name: 'Chicken soup' },
        { id: 14, name: 'Borsht' },
        { id: 15, name: 'Baked potato' },
        { id: 16, name: 'Stewed Salmon' },
        { id: 17, name: 'Meat in Eggplant' },
        { id: 18, name: 'Lasagnia' },
        { id: 19, name: 'Steak' },
        { id: 20, name: 'Omelet' },
        { id: 21, name: 'Avocado' },
        { id: 22, name: 'Tuna Salad' },
        { id: 23, name: 'Vegetable Salad' }
      ];
    return {foods};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(foods: Food[]): number {
    return foods.length > 0 ? Math.max(...foods.map(food => food.id)) + 1 : 11;
  }
}