import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {Item} from './item';
import {AppConfig} from '../../config/app.config';
import {Observable, of} from 'rxjs';
import {LoggerService} from '../../core/shared/logger.service';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type':  'application/json', 'accept-language': 'ru' })
};

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

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl, httpOptions)
      .pipe(
        tap(items => LoggerService.log(`fetched items`)),
        catchError(this.handleError('getItems', []))
      );
  }
}
