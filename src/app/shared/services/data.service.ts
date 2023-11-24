import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { merge, catchError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  search(searchStr: any) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchStr}`;
    return this.http.get(url).pipe(
      map((response: any) => response.drinks),
      catchError((err) => {
        throw 'SOURCE_ERROR: ' + err;
      })
    );
  }

  getDrink(id: any) {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    return this.http.get(url).pipe(
      map((response: any) => response.drinks[0]),
      catchError((err) => {
        throw 'SOURCE_ERROR: ' + err;
      })
    );
  }

  getPopular() {
    const toUrl = (id: any) =>
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    return merge(
      this.http
        .get(toUrl(11000))
        .pipe(map((response: any) => response.drinks[0])),
      this.http
        .get(toUrl(11001))
        .pipe(map((response: any) => response.drinks[0])),
      this.http
        .get(toUrl(11002))
        .pipe(map((response: any) => response.drinks[0])),
      this.http
        .get(toUrl(11003))
        .pipe(map((response: any) => response.drinks[0])),
      this.http
        .get(toUrl(11004))
        .pipe(map((response: any) => response.drinks[0])),
      this.http
        .get(toUrl(11005))
        .pipe(map((response: any) => response.drinks[0])),
      this.http
        .get(toUrl(11006))
        .pipe(map((response: any) => response.drinks[0])),
      this.http
        .get(toUrl(11007))
        .pipe(map((response: any) => response.drinks[0]))
    );
  }

  getColor() {
    return {
      Light_rum: '#e7e7e7',
      Applejack: '#943500',
      Gin: '#0060df',
      Dark_rum: '#712800',
      Dark_Rum: '#712800',
      Sweet_Vermouth: '#3d0000',
      Strawberry_schnapps: '#ec0000',
      Scotch: '#ffb801',
      Apricot_brandy: '#f56800',
      Triple_sec: '#e7e7e7',
      Southern_Comfort: '#e49401',
      Orange_bitters: '#ea6300',
      Brandy: '#bf8010',
      Lemon_vodka: '#d5d5b8',
      Blended_whiskey: '#fdb700',
      Dry_Vermouth: '#6aa940',
      Amaretto: '#d23718',
      Tea: '#e73b01',
      Champagne: '#e6d795',
      Coffee_liqueur: '#644c40',
      Bourbon: '#9e5a37',
      Tequila: '#f8c272',
      Vodka: '#f0f0f0',
      Añejo_rum: '#c56e17',
      Bitters: '#c10006',
      Sugar: '#fff',
      Powdered_sugar: '#fff',
      Kahlua: '#020202',
      demerara_Sugar: '#e7e7e7',
      Dubonnet_Rouge: '#020202',
      Watermelon: '#c10006',
      Lime_juice: '#d5d5b8',
      Lime_Juice: '#d5d5b8',
      Irish_whiskey: '#dab669',
      Apple_brandy: '#f9b400',
      Carbonated_water: '#e7e7e7',
      Cherry_brandy: '#b33c51',
      Cherry: '#b33c51',
      Creme_de_Cacao: '#020202',
      Grenadine: '#b62924',
      Port: '#bd1f25',
      Coffee_brandy: '#020202',
      Red_wine: '#c60305',
      Rum: '#e65a00',
      Grapefruit_juice: '#e04801',
      Ricard: '#f2933a',
      Sherry: '#d6a260',
      Cognac: '#d84017',
      Sloe_gin: '#bc0103',
      Apple_juice: '#e4ab09',
      Pineapple_juice: '#f5ca03',
      Lemon_juice: '#f6dd7c',
      Sugar_syrup: '#ebb100',
      Milk: '#fff',
      Strawberries: '#fff',
      Chocolate_syrup: '#7e423d',
      Yoghurt: '#fff',
      Mango: '#ffcf14',
      Ginger: '#ffea96',
      Lime: '#b1ba46',
      Cantaloupe: '#f6ac5d',
      Berries: 'red',
      Grapes: 'purple',
      Kiwi: '#b5cc01',
      Tomato_juice: 'red',
      Cocoa_powder: '#7e423d',
      Chocolate: '#7e423d',
      Heavy_cream: '#fff',
      Galliano: '#f1e51c',
      Peach_Vodka: '#f0f0f0',
      Ouzo: '#e7e7e7',
      Coffee: '#1e1e1e',
      Spiced_rum: '#a51807',
      Water: '#f7f7f7',
      Espresso: '#c8873a',
      Angelica_root: '#e7e7e7',
      Orange: '#e7e7e7',
      Cranberries: '#e7e7e7',
      Johnnie_Walker: '#ec9921',
      Apple_cider: '#e47e00',
      Everclear: '#e7e7e7',
      Cranberry_juice: '#d34246',
      Egg_yolk: '#e7e7e7',
      Egg: '#e7e7e7',
      Grape_juice: '#39363d',
      Peach_nectar: '#f39501',
      Lemon: '#fbc101',
      Firewater: '#f7a529',
      Lemonade: '#a29f7c',
      Lager: '#dbaf00',
      Whiskey: '#d96002',
      Absolut_Citron: '#e7e7e7',
      Pisco: '#e7e7e7',
      Irish_cream: '#976d48',
      Ale: '#8a000d',
      Chocolate_liqueur: '#7e423d',
      Midori_melon_liqueur: '#188910',
      Sambuca: '#e7e7e7',
      Cider: '#f0d246',
      Sprite: '#007e2a',
      '7-Up': '7-Up',
      Blackberry_brandy: '#04011c',
      Peppermint_schnapps: '#e7e7e7',
      Creme_de_Cassis: '#7d151a',
      Angostura_bitters: '#883500',
      Club_soda: '#e7e7e7',
      Mint: '#437f1e',
      Soda_Water: '#e7e7e7',
      Ice: '#fff',
      White_Rum: '#e7e7e7',
      'Lemon-lime_soda': '#a29f7c',
      Blueberries: '#0060df',
      Olive: 'green',
      Goldschlager: '#e7e7e7',
      Jägermeister: '#644c40',
    };
  }
}
