

  /**
   * Aca irà la clase hija
   */
  class DetallePersonajes{
    constructor(id, name, status, species, gender, created, origin, location,episode){
    this.id = id;
    this.name = name;
    this.status = status;
    this.species = species;
    this.gender = gender;
    this.created = created;
    this.origin = origin;
    this.location = location;
    this.episode = episode;
    }

    //get name, status, species, gender;
    get name(){
      return this.name;
    }

    get status(){
      return this.status;
    }

    get species(){
      return this.species;
    }

    get gender(){
      return this.gender;
    }

    /**Punto Nº12: OPcional agregar metodo get al resto de metodos */
    get created(){
      return this.created;
    }

    get origin(){
      return this.origin;
    }

    get location(){
      return this.location;
    }

    get episode(){
      return this.episode;
    }
    /**Fin punto 12 */

     //set name, status, species, gender;
     set name(id){
      this.name = name;
    }

    set status(id){
      this.status = status;
    }

    set species(species){
      this.species = species;
    }

    set gender(gender){
      this.gender = gender;
    }
  }
  
  /** Punto Nº13: Opcional
   * Agregar un método “infoModal” a la clase hija “DetallesPersonajes” que permita
retornar más información del personaje, como el id, nombre, género, especie,
estatus, creación, origen y cantidad de episodios en una lista. Este método será
llamado para retornar los atributos indicados dentro de una modal 
   */
  DetallePersonajes.prototype.infoModal = function() {
    console.log('DetellePersonaje en Info Modal ' + this.id + this.name + this.gender + this.species + this.status + this.created + this.origin);

    //A continuaciòn instanciare los valores a retornar para el modal
    this.id = id;
    this.name = nombre;
    this.gender = genero;
    this.species = especie;
    this.status = status;
    this.created = creacion;
    this.origin = orgien;
    
    //Genero un array con los valores instanciados para retornarlos
    var detallePersonajesArray = [id, nombre, genero, especie, status, creacion, orgien];
    
    //retorno el array con los valores instanciados
    return detallePersonajesArray;
    
  };
   

  DetallePersonajes.prototype.infoGeneral = function(){
   console.log('Metodo DetellePersonaje en InfoGeneral ' + this.id)
  };
  
  //Funcion closure solicitado por nombre
  function closure() {
    
    function muestraName() {
      alert(name);
    }
    return muestraName;
  }  // fin Funcion closure solicitado por nombre

   //Funcion closure solicitado por status
  function closureStatus() {
    
    function muestraStatus() {
      alert(status);
    }
    return muestraStatus;
  }  // fin Funcion closure solicitado por status

  /*Punto Nº11: Opcional agregar closure a species y gender */
   //Funcion closure species
   function closureSpecies() {
    function muestraSpecies() {
      alert(species);
    }
    return muestraSpecies;
  }  // fin Funcion closure species
 
   //Funcion closure gender
   function closureGender() {
    function muestraGender() {
      alert(gender);
    }
    return muestraGender;
  }  // fin Funcion closure gender




