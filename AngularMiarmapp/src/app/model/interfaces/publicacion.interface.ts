export interface PostResponse {
    id:                number;
    titulo:            string;
    texto:             string;
    fileScale:              string;
    fechaPublicacion:  Date;
    estadoPublicacion: string;
    user:              User;
}

export interface User {
    id:              string;
    nombre:          string;
    apellidos:       string;
    nick:            string;
    fechaNacimiento: Date;
    email:           string;
    avatar:          string;
    userRoles:       string;
}
