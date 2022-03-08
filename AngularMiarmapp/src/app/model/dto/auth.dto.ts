export class AuthSignUpDto {
    nombre: string;
    apellidos: string;
    rol: boolean;
    nick: string;
    email: string;
    fechaNacimiento: string;
    password: string;
    password2: string;
    file: string;
    constructor() {
        this.nick = '';
        this.email = '';
        this.fechaNacimiento = '';
        this.password = '';
        this.password2 = '';
        this.rol = true;
        this.file = '';
        this.nombre = '';
        this.apellidos = '';
    }
}
export class AuthLoginDto {
    email: string;
    password: string;

    constructor() {
        this.email = '';
        this.password = '';
    }
}