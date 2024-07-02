export class Register {
    id?:number;
    username!:string;
    email!:string;
    password!:string;
    confirmPassword!:string;
    role!:string;
}

export class Login {
     username!:string;
     password!:string;
}

export class AuthResponse {
    id!:string;
    username!: string;
    token!:string;
    role!:string;
    response!:string
}

