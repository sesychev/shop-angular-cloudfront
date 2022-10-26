import { Injectable } from '@angular/core';
import {
  HttpErrorResponse, //new
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationService } from '../notification.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorPrintInterceptor implements HttpInterceptor {
  constructor(private readonly notificationService: NotificationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        error: (errorMessage: unknown) => {
          const url = new URL(request.url);
          // from
          const { status } = errorMessage as HttpErrorResponse;

          if (status === 401) {
            this.notificationService.showError(`401: Unauthorized`, 0);
            return;
          }
          if (status === 403) {
            this.notificationService.showError(`403: Forbidden`, 0);
            return;
          }
          // till
          this.notificationService.showError(
            `Request to "${url.pathname}" failed.`,
            0
          );
        },
      })
    );
  }
}
