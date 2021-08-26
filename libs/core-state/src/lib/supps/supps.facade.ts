import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable} from "rxjs";
import { Supp } from "@supp-regimen/api-interfaces";
import { NotificationsService, SuppsService } from "@supp-regimen/core-data";
import { take, tap } from "rxjs/operators";

@Injectable({ providedIn: 'root' })
export class SuppFacade {
    _allSuppsSource$ = new BehaviorSubject<Supp[]>([]);
    allSupps$: Observable<Supp[]> = this._allSuppsSource$.asObservable();

    private _selectedSuppSource$ = new BehaviorSubject<Supp>({} as Supp);
    selectedSupp$: Observable<Supp> =
    this._selectedSuppSource$.asObservable();

    constructor(
        private suppsService: SuppsService,
        private notificationsService: NotificationsService
    ) {}

    loadSupps() {
        this.suppsService
            .all()
            .pipe(
                tap((supps) => this._allSuppsSource$.next(supps)),
                take(1)
            )
            .subscribe()
    };

    selectSupp(suppId: string) {
        this.suppsService
            .find(suppId)
            .pipe(
                tap((supp) => this._selectedSuppSource$.next(supp)),
                take(1)
            )
            .subscribe()
    };

    saveSupp(supp: Supp) {
        supp.id ? this.updateSupp(supp) : this.createSupp(supp)
    };

    createSupp(supp: Supp) {
        this.suppsService
            .create(supp)
                .pipe(
                    tap(() => {
                        this.loadSupps();
                        this.notificationsService.notify('Supp Successfully Created')
                    }),
                    take(1)
                )
                .subscribe()
    };

    updateSupp(supp: Supp) {
        this.suppsService
            .update(supp)
                .pipe(
                    tap(() => {
                        this.loadSupps();
                        this.notificationsService.notify('Supp Successfully Updated')
                    }),
                    take(1)
                )
                .subscribe()
    };

    deleteSupp(suppId: string) {
        this.suppsService
            .delete(suppId)
                .pipe(
                    tap(() => {
                        this.loadSupps();
                        this.notificationsService.notify('Supp Successfully Deleted')
                    }),
                    take(1)
                )
                .subscribe()
    }
}