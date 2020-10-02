
export class Actor {
    public id:string;
    public nombre:string;
    public apellido:string;
    public fechaNac:string;
    public foto:string
    public sexo:string;
    
    constructor(id,nombre,apellido,fechaNac,foto,sexo)
    {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNac = fechaNac;
        this.foto = foto;
        this.sexo = sexo;
    }

}
