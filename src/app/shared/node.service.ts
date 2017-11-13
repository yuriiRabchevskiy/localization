import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { TreeNode } from "primeng/primeng";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from "rxjs/Observable";



@Injectable()
export class NodeService {
    data: any;
    constructor(private http: Http) {}

    getFiles(): Observable<TreeNode[]> {
        return this.http.get('http://localhost:4200/assets/files.json').map(res => {
            return res.json().data
        }).catch(this.handleErrorObservable);
    }
    private handleErrorObservable (error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.message || error);
    } 
}