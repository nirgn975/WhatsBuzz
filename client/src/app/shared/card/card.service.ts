import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { CONFIG } from '../../config';


export class Card {
    constructor(
      public pk: number,
      public title: string,
      public body: string,
      public post_type: string,
      public image_banner: string,
      public games_images: Array<string>,
      public quizzes: Array<string>,
      public fb_users: Array<string>,
      public profile_image: Array<string>
    ){ }
}

@Injectable()
export class CardService {

    constructor(private http: Http) {}

    getCards(typeOfCards: string, numberOfCards: number = 5) {
        let params: URLSearchParams = new URLSearchParams();
        params.set('post_type', typeOfCards);

        return this.http.get(CONFIG.baseUrls + 'posts/?format=json', {search: params})
          .map((response: Response) => <Card[]>response.json())
          .do(data => console.log(data))
          .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
