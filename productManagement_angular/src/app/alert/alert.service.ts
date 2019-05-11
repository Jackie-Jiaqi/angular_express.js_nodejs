import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subject ,Observable} from 'rxjs';



@Injectable({providedIn:'root'})
export class AlertService {
    private subject = new Subject<any>();
    private keepAfterRouteChange = false;

    constructor(private router: Router) {
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterRouteChange) {
                    // only keep for a single route change
                    this.keepAfterRouteChange = false;
                } else {
                    // clear alert messages
                    this.subject.next();
                }
            }
        });
    }
    success(message: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({type:'success',text:message});
    }

    error(message: string, keepAfterRouteChange = false) {
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({type:'error',text:message});
    }
    getMessage():Observable<any>{
        return this.subject.asObservable();
    }

}