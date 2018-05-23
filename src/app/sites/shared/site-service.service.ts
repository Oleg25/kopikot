import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Item } from './item';
import { AppConfig } from '../../config/app.config';
import { Observable, of} from 'rxjs';
import { LoggerService } from '../../core/shared/logger.service';
import { catchError, tap } from 'rxjs/operators';
import { map } from 'rxjs/internal/operators';

/**
 * Items service
 */
@Injectable()
export class SiteServiceService {
  private itemsUrl: string;

  constructor(private http: HttpClient) {
    this.itemsUrl = AppConfig.endpoints.items;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      LoggerService.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  getItems(limit: number, offset: number): Observable<any> {

    const params = new HttpParams().set('limit', String(limit));
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type':  'application/json', 'accept-language': 'ru' }),
      params: params.append('offset', String(offset))
    };

    return this.http.get<Item[]>(this.itemsUrl, httpOptions)
      .pipe(
        map(res => <Item[]> res),
        tap(items => LoggerService.log(`fetched items`)),
        catchError(this.handleError('getItems', []))
      );
  }
}
