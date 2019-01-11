import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable()
export class BreadCrumbService {
  
  breadcrumbs$: BehaviorSubject<Array<Object>> = new BehaviorSubject<Array<Object>>([]);

  constructor() { }

  setBreadCrumbs(router: Router, activatedRoute: ActivatedRoute): void {

    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
        let currentRoute = activatedRoute.root, url = '', tempState = [], breadCrumbs = [];
        do {
          const childrenRoutes = currentRoute.children;
          currentRoute = null;
          childrenRoutes.forEach(routes => {
            if (routes.outlet === 'primary') {
              const routeSnapshot = routes.snapshot;
              url += '/' + routeSnapshot.url.map(segment => segment.path).join('/');
              if (routes.snapshot.data.title !== undefined) {
                let status = true;
                if (routes.snapshot.data.status !== undefined) {
                  status = routes.snapshot.data.status;
                }

                let icon = false;
                if (routes.snapshot.data.icon !== undefined) {
                  icon = routes.snapshot.data.icon;
                }

                let caption = false;
                if (routes.snapshot.data.caption !== undefined) {
                  caption = routes.snapshot.data.caption;
                }

                if (!tempState.includes(routes.snapshot.data.title)) {
                  tempState.push(routes.snapshot.data.title);
                  breadCrumbs.push({
                    label: routes.snapshot.data.title,
                    icon: icon,
                    caption: caption,
                    status: status,
                    url: url
                  });
                }
              }
              currentRoute = routes;
            }
          });
        } while (currentRoute);

        this.breadcrumbs$.next(breadCrumbs);
    }); 
  }

  getBreadCrumbs(): Observable<Array<Object>> {
    return this.breadcrumbs$.asObservable();
  }
  
}
