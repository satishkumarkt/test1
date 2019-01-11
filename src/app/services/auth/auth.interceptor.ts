import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') === 'True') {
            return next.handle(req.clone());
        }

        const token = localStorage.getItem('token');
        if (token != null) {
            const clonedreq = req.clone({
                setHeaders: {Authorization: `Bearer ${token}`}
            });
            return next.handle(clonedreq)
                .do(
                () => { },
                err => {
                    if (err.status === 401) {
                        this.router.navigateByUrl('/login');
                    }
                });
        } else {
            this.router.navigateByUrl('/login');
        }
    }
}
