import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { ApiClientService } from '../api-client.service';

@Injectable({
    providedIn: 'root'
})
export class IscilikService {

    constructor( private apiService: ApiClientService, ) { }

    async create(create: any, successCallBack?: () => void, errorCallback?: (errorMessage: string) => void) {

        const observable = this.apiService.post({
            controller: "Isciliks",
            action: "Add"
        }, create)

        const promiseData = firstValueFrom(observable);
        promiseData.then(successCallBack).catch(errorCallback);

        return await promiseData;
    }
    async update(update: any, successCallBack?: () => void, errorCallback?: (errorMessage: string) => void) {
        const observable = await this.apiService.post({
            controller: "Isciliks",
            action: "Update"
        }, update)
        const promiseData = firstValueFrom(observable);
        promiseData.then(successCallBack).catch(errorCallback);
        return await promiseData;
    }


    async delete(id: string, successCallBack?: () => void, errorCallback?: (errorMessage: string) => void) {
        const observable = await this.apiService.post({
            controller: "Isciliks",
            action: "Delete"
        }, id)
        const promiseData = firstValueFrom(observable);
        promiseData.then(successCallBack).catch(errorCallback);
        return await promiseData;
    }


    async GetList(successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
        const observable: Observable<any> = this.apiService.get(
            {
                controller: "Isciliks",
                action: "GetList"
            });
        const promiseData = firstValueFrom(observable);

        promiseData.then(successCallBack).catch(errorCallBack);

        return await promiseData;
    }

    async GetListTreeView(successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
        const observable: Observable<any> = this.apiService.get(
            {
                controller: "Isciliks",
                action: "GetListTreeView"
            });
        const promiseData = firstValueFrom(observable);

        promiseData.then(successCallBack).catch(errorCallBack);

        return await promiseData;
    }
    async getById(id: string, successCallBack?: () => void, errorCallback?: (errorMessage: string) => void) {
        const observable = this.apiService.get({
            controller: "Isciliks",
            action: "GetById/" + `${id}`
        })

        const promiseData = firstValueFrom(observable);
        promiseData.then(successCallBack).catch(errorCallback);

        return await promiseData;
    }








    async getCode(durum: boolean, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void) {
        const observable = this.apiService.get<{ kod: any }>(
            {
                controller: "Isciliks",
                action: "GetCode",
                queryString: `Durum=${durum}`
            });

        const promiseData = firstValueFrom(observable);
        promiseData.then(successCallBack).catch(errorCallBack);

        return await promiseData;
    }












}





