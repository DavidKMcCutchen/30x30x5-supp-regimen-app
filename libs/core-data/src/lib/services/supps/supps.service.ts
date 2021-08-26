import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Supp } from "@supp-regimen/api-interfaces";
import { SuppEnvironment, SUPP_ENVIRONMENT } from "@supp-regimen/environment";



@Injectable({
  providedIn: 'root'
})
export class SuppsService {
  model = 'supps';

  constructor(
    private httpClient: HttpClient,
    @Inject(SUPP_ENVIRONMENT) private environment: SuppEnvironment
  ) {}

  all() {
    return this.httpClient.get<Supp[]>(this.getUrl())
  };

  find(suppId: string) {
    return this.httpClient.get<Supp>(this.getUrlById(suppId))
  };

  create(supps: Supp) {
    return this.httpClient.post<Supp>(this.getUrl(), supps)
  };

  update(supps: Supp) {
    return this.httpClient.patch<Supp>(this.getUrlById(supps.id), supps)
  };

  delete(suppId: string) {
    return this.httpClient.delete<Supp>(this.getUrlById(suppId))
  }

  getUrl() {
    return `${this.environment.apiUrl}${this.model}`
  };

  getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
