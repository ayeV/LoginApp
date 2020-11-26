export class Pelicula {

    public id:number;
    public nombre:string;
    public tipo:string;
    public fechaDeEstreno:string;
    public cantPublico:number;
    public fotoPelicula:string;
    public actor:any;
    

    constructor(id,nombre,tipo,fechaDeEstreno,cantPublico,fotoPelicula,actor)
    {
        this.id = id;
        this.tipo = tipo;
        this.nombre= nombre;
        this.fechaDeEstreno = fechaDeEstreno;
        this.cantPublico = cantPublico;
        this.fotoPelicula= fotoPelicula;
        this.actor = actor;
    }
}
