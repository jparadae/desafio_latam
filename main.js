//Punto Nº3: Aca llamo al DetallePersonajes en una función IFEE
(function llamadoPersonajes(){
    var llamadoPersonajes = new llamadoPersonajes('detallePersonajes.js');
    console.log(llamadoPersonajes); //salida del detalle del detallePersonaje 
      /**Punto Nª4: Generando variables privadas  */
      var urlApi_ = 'https://rickandmortyapi.com/api/character/';
      var displayResultadoId_ = 'https://rickandmortyapi.com/api/character/{id}';
      var resultado_ = '';
    
      /**
       * Punto Nª5: Funciones asincronas:
       * La primera funcion getUrlApi_ se conecta a la API1 y en caso de no poder lanza un error.
       *  La segunda funcion getIdApi_ se conecta a la API y va en busqueda del ID del personaje y en caso de no poder lanza un error.
       */
     
      const getUrlApi_ = async () => {
        try {   
          const response = await axios.get('https://rickandmortyapi.com/api/character/');
          return response;
        } catch (error) {
          throw new Error(`Lamentablemente no me pude conectar a la API`);
        }
      }; 


      const getIdApi_ = async (id) => {
        try {
            /**Punto Nª7: 
          * La segunda función privada, deberá recibir el id a consultar del personaje para la URL
          de la API “https://rickandmortyapi.com/api/character/{id}”
          Enviar id,name, status, species, gender, created, origin, location,
          episode”, para crear una nueva instancia de la clase hija “DetallesPersonajes” y así
          hacer el llamado al método “infoGeneral”.*/
          const response = await axios.get('https://rickandmortyapi.com/api/character/{id}');
          let datos_enviar = await response.json()
          return datos_enviar; //estoy retornando la data de la variable response
        } catch (error) {
          throw new Error(`No pude obtener el Id del personaje ${id}`);
        }
      }; 


      function exitoCallback(resultado_) {
            /**Punto Nº6 Me conecto por fetch a la api y retorno con una promesa */
            fetch('https://rickandmortyapi.com/api/character/'+resultado_)
            .then(response => response.json())
            .then(json => console.log(json))
        
        return getUrlApi_; //Esta es la promesa que devuelvo, porque yo me conecto por fetch y busco sobre 
      }

      //*Punto Nº6: opcion b 
      getIdApi_(resultado_).then(exitoCallback);

      /**
       * Punto Nª8: 2 funciones publicas que retornen el resultado del api para consultar informacion
       *
       */
       
      function getAPIRickAndMorty(success, error) {
        var req = new XMLHttpRequest();
            req.open('GET', 'https://rickandmortyapi.com/api/character/');
        
            req.onload = function() {
              if (req.status == 200) {
                success(JSON.parse(req.response));
              }
              else {
                error();
              }
            };
        
            req.send();
        }
        
        getAPIRickAndMorty(
            function(r) {
                console.log(r)
            },
            function(r) {
                console.log('Ocurrió un error y no me pude conectar baby')
            },
        )

        //Funciòn publica que busca por id
        function getAPIRickAndMortyId(success, error) {
          var req = new XMLHttpRequest();
              req.open('GET', 'https://rickandmortyapi.com/api/character/{id}');
          
              req.onload = function() {
                if (req.status == 200) {
                  success(JSON.parse(req.response));
                }
                else {
                  error();
                }
              };
          
              req.send();
          }
          
          getAPIRickAndMortyId(
              function(r) {
                  console.log(r)
              },
              function(r) {
                  console.log('Ocurrió un error y no pude encontrar el id')
              },
          )
      
})();
console.log(llamadoPersonajes); // ReferenceError: el llamadoPersonajes no esta definido
