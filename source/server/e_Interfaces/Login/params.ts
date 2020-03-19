export interface LoginParams {
    email?:string;
    password?:string;
    id?:string;
    loginType: 'id' | 'user';
}