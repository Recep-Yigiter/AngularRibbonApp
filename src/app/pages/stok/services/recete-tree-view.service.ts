import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { ApiClientService } from 'src/app/core/services/api-client.service';
import { Dynamic } from 'src/app/shared/models/Dynamic';






@Injectable({
  providedIn: 'root'
})
export class ReceteTreeViewService {

  constructor(
    private apiService: ApiClientService,

    ) { }

    async create(createReceteModel: any, successCallBack?: () => void, errorCallback?: (errorMessage: string) => void) {
  
      
      const observable=  this.apiService.post({
          controller: "TreeViewNode"
        }, createReceteModel)
    
        const promiseData=firstValueFrom(observable) ;
        promiseData.then(successCallBack).catch(errorCallback);
    
        return await promiseData;
      }

  async list(pageIndex: number = 0, pageSize: number = 100, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void)
   {
    const observable:Observable<any> = this.apiService.get(
      {
        controller: "TreeViewNode",
        queryString: `Page=${pageIndex}&PageSize=${pageSize}`
      });
      const promiseData=firstValueFrom(observable) ;
      
      promiseData.then(successCallBack).catch(errorCallBack);

      return await promiseData;
      

  }
  async getdynamic(dynamic: Dynamic, pageIndex: number = 0, pageSize: number = 5, successCallBack?: () => void, errorCallback?: (errorMessage: string) => void) {

    const observable: Observable<any> = this.apiService.postbyDynamic({
      controller: "TreeViewNode",
      queryString: `Page=${pageIndex}&PageSize=${pageSize}`
      
    }, dynamic)

    const promiseData = firstValueFrom(observable);
    promiseData.then(successCallBack).catch(errorCallback);

    return await promiseData;
  }

  async update (updateReceteModel: any, successCallBack?: () => void, errorCallback?: (errorMessage: string) => void){ 
    const observable = await this.apiService.put({
      controller: "TreeViewNode"
    }, updateReceteModel) 
    const promiseData = firstValueFrom(observable);
    promiseData.then(successCallBack).catch(errorCallback);
    return await promiseData;
  }


  async delete (id: string, successCallBack?: () => void, errorCallback?: (errorMessage: string) => void){ 
    const observable = await this.apiService.delete({
      controller: "TreeViewNode"
    }, id) 
    const promiseData = firstValueFrom(observable);
    promiseData.then(successCallBack).catch(errorCallback);
    return await promiseData;
  }






  async getCode(durum:boolean, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void){
    const observable = this.apiService.get<{ kod: any}>(
      {
        controller: "Recete",
        action:"GetCode",
        queryString: `Durum=${durum}`
      });

      const promiseData=firstValueFrom(observable) ;
      promiseData.then(successCallBack).catch(errorCallBack);

      return await promiseData;
    }


    async getListById(id: string, successCallBack?: () => void, errorCallBack?: (errorMessage: string) => void)
    : Promise<{items:any[],ReceteDegiskenler:any[]}> {

    const observable = this.apiService.get<{items:any[],ReceteDegiskenler:any[]}>(
      {
        controller: "Recete",

      },id);

    const promiseData = firstValueFrom(observable);
    promiseData.then(successCallBack).catch(errorCallBack);

    return await promiseData;
  }









}





