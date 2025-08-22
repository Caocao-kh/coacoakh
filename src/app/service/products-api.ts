import { Injectable } from '@angular/core';
declare const axios: any;

@Injectable({
  providedIn: 'root'
})
export class ProductsApi {
  constructor() {
    
  }
  async getApiProduct():Promise<any>{
    try{
      const response = await axios.get('https://sv-gen-api.bczin2zin2takeo.us/api/product');
      return response.data;
    }catch(error){
      console.error('Error fetching API product:', error);
    }finally{
      console.log('Fetch attempt finished');
    }

  }
  
}
