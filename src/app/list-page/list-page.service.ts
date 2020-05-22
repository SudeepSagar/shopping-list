import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListPageService {

  apiURL = 'https://api.myjson.com/bins/qzuzi';

  private metaData = {
    items: [
      {
        name: 'Samsung Series 4',
        image: 'https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90',
        price: {
          actual: 13999,
          display: 22500
        },
        discount: 37
      },
      {
        name: 'Samsung Super 6',
        image: 'https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90',
        price: {
          actual: 35999,
          display: 66900
        },
        discount: 46
      },
      {
        name: 'Samsung The Frame',
        image: 'https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90',
        price: {
          actual: 84999,
          display: 133900
        },
        discount: 36
      },
      {
        name: 'Thomson B9 Pro',
        image: 'https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90',
        price: {
          actual: 9999,
          display: 16999
        },
        discount: 41
      },
      {
        name: 'LG Ultra HD',
        image: 'https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90',
        price: {
          actual: 39990,
          display: 79990
        },
        discount: 50
      },
      {
        name: 'Vu Ready LED TV',
        image: 'https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90',
        price: {
          actual: 7999,
          display: 17e3
        },
        discount: 52
      },
      {
        name: 'Koryo Android TV',
        image: 'https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90',
        price: {
          actual: 55999,
          display: 199990
        },
        discount: 71
      },
      {
        name: 'Micromax LED Smart',
        image: 'https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90',
        price: {
          actual: 9999,
          display: 27990
        },
        discount: 64
      }
    ]
  };

  constructor(private http: HttpClient) { }

  public fetchData() {
    return this.metaData;
  }

  public updateData(arrayItem) {
    this.metaData['items'].filter((items, index) => {
      if (arrayItem === items) {
        this.metaData['items'][index]['added'] = true;
      }
    });
  }

  // working API call method
  // public getList() {
  //   return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
  //     .pipe(
  //       catchError(this.handleError)
  //     );
  // }

  // Error handling
  // handleError(error) {
  //   let errorMessage = '';
  //   if (error.error instanceof ErrorEvent) {
  //     // Get client-side error
  //     errorMessage = error.error.message;
  //   } else {
  //     // Get server-side error
  //     errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  //   }
  //   return throwError(errorMessage);
  // }

}
