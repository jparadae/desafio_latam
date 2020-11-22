

  /**
   * Clase Personajes, segun el modelo presentado su unico atributo 
   * es id
   */
class Personajes{
 constructor(id){
 this.id = id;
 }

 //El console.log es solo por buena practica
 recibe_id() {
  return "El id del personaje de Rick and Morty es " + this.id;
 }
} 

 /**A continuación exporto la clase previamente instanciada
  * con el id del Personaje
  */

export default class Personajes{
  get idPersonaje(){
    return this.id;
  }

  set idPersonaje(id){
    this.idPersonaje = id;
  }
}

