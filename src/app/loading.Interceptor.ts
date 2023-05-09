import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from './services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(private loadingService: LoadingService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Set the loading state before making the request
    // You can use a global service to store the loading state and update it accordingly
    this.loadingService.setLoading(true);

    return next.handle(request).pipe(
      // Clear the loading state after the request completes
      finalize(() => {
        this.loadingService.setLoading(false);
      })
    );
  }
}
