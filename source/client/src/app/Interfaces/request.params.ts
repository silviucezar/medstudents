import { HttpParams } from '@angular/common/http';

export interface GetConfig {
    url:string;
    querystrings: HttpParams | undefined
}