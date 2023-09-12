import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { ApiClientService } from 'src/app/core/services/api-client.service';
import { StokCreateModel } from '../models/stok-create-model';
import { StokListModel } from '../models/stok-list-model';
import { Dynamic } from 'src/app/shared/models/Dynamic';
import { StokUpdateModel } from '../models/stok-update-model';





@Injectable({
  providedIn: 'root'
})
export class StokService {

  constructor(
    private apiService: ApiClientService,

    ) { }

 async create(createStokModel: StokCreateModel, successCallBack?: () => void, errorCallback?: (errorMessage: string) => void) {
  
  const observable=  this.apiService.post({
      controller: "Stok"
    }, createStokModel)

    const promiseData=firstValueFrom(observable) ;
    promiseData.then(successCallBack).catch(errorCallback);

    return await promiseData;
  }

  async list(pageIndex: number = 0, pageSize: number = 5, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void)
  :Promise<{items:StokListModel[],index:number,size:number,count:number,pages:number,hasPrevious:boolean,hasNext:boolean}> {
    const observable:Observable<any> = this.apiService.get(
      {
        controller: "Stok",
        queryString: `Page=${pageIndex}&PageSize=${pageSize}`
      });
      const promiseData=firstValueFrom(observable) ;
      
      promiseData.then(successCallBack).catch(errorCallBack);

      return await promiseData;
      

  }
  async getdynamic(dynamic: Dynamic, pageIndex: number = 0, pageSize: number = 5, successCallBack?: () => void, errorCallback?: (errorMessage: string) => void) {

    const observable: Observable<any> = this.apiService.postbyDynamic({
      controller: "Stok",
      queryString: `Page=${pageIndex}&PageSize=${pageSize}`
      
    }, dynamic)

    const promiseData = firstValueFrom(observable);
    promiseData.then(successCallBack).catch(errorCallback);

    return await promiseData;
  }

  async update (updateStokModel: StokUpdateModel, successCallBack?: () => void, errorCallback?: (errorMessage: string) => void){ 
    const observable = await this.apiService.put({
      controller: "Stok"
    }, updateStokModel) 
    const promiseData = firstValueFrom(observable);
    promiseData.then(successCallBack).catch(errorCallback);
    return await promiseData;
  }


  async delete (id: string, successCallBack?: () => void, errorCallback?: (errorMessage: string) => void){ 
    const observable = await this.apiService.delete({
      controller: "Stok"
    }, id) 
    const promiseData = firstValueFrom(observable);
    promiseData.then(successCallBack).catch(errorCallback);
    return await promiseData;
  }






  async getCode(durum:boolean, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void){
    const observable = this.apiService.get<{ kod: any}>(
      {
        controller: "Stok",
        action:"GetCode",
        queryString: `Durum=${durum}`
      });

      const promiseData=firstValueFrom(observable) ;
      promiseData.then(successCallBack).catch(errorCallBack);

      return await promiseData;
    }


    









}





