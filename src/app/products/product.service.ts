import { Injectable } from '@angular/core';
import { IProduct } from './product';

// Http service
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // This should be external but for demo purpose internal (local json file)
  // Make sure that this folder structure is listed in the angular
  // Point this to an appropriate web server.
  private productUrl = 'api/products/products.json';

// specify the parameter
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    // Response to be json structure, containing an array of product
    // When response back -- this return below will...
    // Automatically map the response
    return this.http.get<IProduct[]>(this.productUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // In a real world app, we may send the server to some remote logging infrastructure
    // instead of just loggin it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A Client side or network error occurred. handle appropriately
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}

    // [
    //   {
    //     'productId': 1,
    //     'productName': 'Leaf Rake',
    //     'productCode': 'GDN-0011',
    //     'releaseDate': 'March 19, 2016',
    //     'description':  'Leaf rake with 48-inch wooden handle.',
    //     'price': 19.95,
    //     'starRating': 3.2,
    //     'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
    //   },
    //   {
    //     'productId': 2,
    //     'productName': 'Garden Cart',
    //     'productCode': 'GDN-0023',
    //     'releaseDate': 'March 18, 2016',
    //     'description': '15 gallon capacity rolling garden cart',
    //     'price': 32.99,
    //     'starRating': 4.2,
    //     'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
    //   },
    //   {
    //     'productId': 5,
    //     'productName': 'Hammer',
    //     'productCode': 'TBX-0048',
    //     'releaseDate': 'May 21, 2016',
    //     'description': 'Curved claw steel hammer',
    //     'price': 8.9,
    //     'starRating': 4.8,
    //     'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png'
    //   },
    //   {
    //     'productId': 8,
    //     'productName': 'Saw',
    //     'productCode': 'TBX-0022',
    //     'releaseDate': 'May 15, 2016',
    //     'description': '15-inch steel blade hand saw',
    //     'price': 11.55,
    //     'starRating': 3.7,
    //     'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png'
    //   },
    //   {
    //     'productId': 10,
    //     'productName': 'Video Game Controller',
    //     'productCode': 'GMG-0042',
    //     'releaseDate': 'October 15, 2015',
    //     'description': 'Standard two-button video game controller',
    //     'price': 35.95,
    //     'starRating': 4.6,
    //     'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
    //   },
    //   {
    //     'productId': 10,
    //     'productName': 'Video Game Controller',
    //     'productCode': 'GMG-0042',
    //     'releaseDate': 'October 15, 2015',
    //     'description': 'Standard two-button video game controller',
    //     'price': 35.95,
    //     'starRating': 4.6,
    //     'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
    //   },
    //   {
    //     'productId': 10,
    //     'productName': 'Video Game Controller',
    //     'productCode': 'GMG-0042',
    //     'releaseDate': 'October 15, 2015',
    //     'description': 'Standard two-button video game controller',
    //     'price': 35.95,
    //     'starRating': 4.6,
    //     'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
    //   },
    //   {
    //     'productId': 10,
    //     'productName': 'Video Game Controller',
    //     'productCode': 'GMG-0042',
    //     'releaseDate': 'October 15, 2015',
    //     'description': 'Standard two-button video game controller',
    //     'price': 35.95,
    //     'starRating': 4.6,
    //     'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
    //   },
    //   {
    //     'productId': 10,
    //     'productName': 'Video Game Controller',
    //     'productCode': 'GMG-0042',
    //     'releaseDate': 'October 15, 2015',
    //     'description': 'Standard two-button video game controller',
    //     'price': 35.95,
    //     'starRating': 4.6,
    //     'imageUrl': 'https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png'
    //   }
    // ];

