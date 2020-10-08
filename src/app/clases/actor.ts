import { isThisTypeNode } from 'typescript';

export class Actor {
    public id:string;
    public nombre:string;
    public apellido:string;
    public fechaNac:string;
    public foto:string
    public sexo:string;
    public pais:any;

    constructor(id,nombre,apellido,fechaNac,foto,sexo, pais)
    {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNac = fechaNac;
        this.foto = foto;
        this.sexo = sexo;
        this.pais = pais;
    }

}
