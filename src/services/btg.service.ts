import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { API_CONFIG } from 'src/config/api.config';
import { PAGAMENTO } from 'src/models/pagamento';
import { Observable } from 'rxjs';

@Injectable()
export class btgService {

     httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'x-api-key:': 'n9QtRrncCo497tpvpDTD8aPrUasGG1YO7vA7T11Y',
          observe: 'response',
          responseType: 'text'
        })
      };

    constructor(public http:HttpClient){

    }

    transferir(pagamento:PAGAMENTO){

        return this.http.post(
            `${API_CONFIG.baseUrl}/money-movement`,
            pagamento,
            this.httpOptions
        )

    }



}
