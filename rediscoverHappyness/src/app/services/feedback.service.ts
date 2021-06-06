import { Inject, Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class FeedBackService {
    baseUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    private async request(method: string, url: string, data?: any) {
        // const token = await this.authService.currentUserValue.token;

        // console.log('request ' + JSON.stringify(data));
        let headers = new HttpHeaders;
        headers.append('Content-Type', 'application/json');
        // headers.append('utc-offset', utcOffset.toString());
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        const result = this.http.request(method, url, {
            body: data,
            responseType: 'json',
            observe: 'body',
            headers: headers
        });
        return new Promise<any>((resolve, reject) => {
            result.subscribe(resolve as any, reject as any);
        });
    }

    postFeedback(feedbackForm: any) {
        return this.request('post', this.baseUrl + 'feedback/create', feedbackForm);
    }

}