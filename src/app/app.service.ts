import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    private _isLoading: boolean;

    get isLoading(): boolean{
        return this._isLoading;
    }

    beginLoading(delay?:number,timeout?:number):void {
        if(delay){
            setTimeout(()=>{
                this.setLoading(timeout)
            },delay)
        }
        else{
            this.setLoading(timeout);
        }  
    }

    private setLoading(timeout?:number):void{
        this._isLoading = true;

        if(timeout){
            setTimeout(()=>this.endLoading(),timeout);
        }
    }

    endLoading():void {
        this._isLoading = false;
    }

    simulateLoad() {
        this.beginLoading(1000);

        setTimeout(() => {
            this.endLoading();
        }, 5000)
    }

    constructor() { }
}