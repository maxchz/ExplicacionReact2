import './App.css';
import {useState} from 'react';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1]=useState('');
  const [linea2, setLinea2]=useState('');
  const [imagen, setImagen]=useState('');


  const onChangeLinea1=(e)=>{
    // debugger;
    // La funcion setLinea1 modifica el valor de Linea1 y lo renderiza nuevamente, osea se ejecuta nuevamente function
    // app() para que devuelva nuevamente el htmlactualizado con eso que modificamos
    setLinea1(e.target.value);

  }

  // Para la linea2 haremos lo mismo pero esta vez incluiremos la funcion dentro del onChange del input correspondiente

 


  return (
    <div className="App">
      <div className="flex flex-col h-screen justify-between items-center my-5 mx-5">

        <div className="px-2 w-full justify-between items-center">
            {/* Lista desplegable, para seleccionar la imagen para hacer el meme */}
          <label htmlFor="meme" className=" w-full  ">
            Seleccione una imagen para el meme: 
            <select 
              onChange={(e)=>{
                setImagen(e.target.value);

              }}
              name="meme" 
              className="border border-gray-400 rounded-md mt-2 mb-2 ml-2">
                <option value="meme1">En la tumba</option>
                <option value="meme2">Bug bunny comunista</option>
                <option value="meme3">Pancho Mancuso</option>
                <option value="meme4">Spyderman triplicado</option>
                <option value="meme5">Chapo Guzman</option>
                <option value="meme6">Gordos de GGAL</option>
              </select>
          </label> 
        </div>  

        <div className="flex flex-col px-2 b-2 ">
            {/* caja de input, para completar con la frase que queremos que aparezca en la parte superior de la imagen */}
          <label htmlFor="frasesup">
            Ingrese frase superior del meme:
            <input 
              onChange={onChangeLinea1}
              id="frasesup" 
              className="border border-gray-400 mt-2 mb-2 ml-2 rounded-md" 
              type="text" 
              placeholder="Ingrese frase superior del meme"/>
          </label>

            {/* caja de input, para completar con la frase que queremos que aparezca en la parte inferior de la imagen */}
            <label htmlFor="fraseinf">
              Ingrese fraase inferior del meme:
            <input
              onChange={(e)=>{setLinea2(e.target.value)}}
              id="fraseinf"
              className="border border-gray-400 mt-2 mb-2 ml-2 rounded-md" 
              type="text" 
              placeholder="Ingrese frase inferior del meme"/>
            </label>

            {/* Boton para  exportar la imagen a formato jpg */}
              {/* Para exportar usamos la libreria html2canvas  >yarn add html12canvas */}
            <button 
              className="text-white bg-violet-600 hover:bg-violet-400 rounded-md border border-gray-400 mt-2 mb-2"
              onClick={(e)=>{
                alert("exportar");
                html2canvas(document.querySelector("#meme")).then(canvas => {
                  var img=canvas.toDataURL("image/png");
                  var link=document.createElement('a');
                  link.download='meme.png';
                  link.href=img;
                  link.click();
              });
              }}
              >
                Exportar Imagen
            </button>

        </div>

        
      

          {/* Estructura del meme */}
          {/* Usamos los estados de React,donde su estructura se compone de una variable y una funcion para cambiar esa variable */}
        <div id="meme" className="grid grid-cols-1 content-between justify-items-center h-full w-full mb-5 ">
            <span className=" text-black font-extrabold text-2xl text-center mb-2">{linea1}</span>
            <img src={`imagenes/${imagen}.jpg`} alt="meme"/>
            <span className=" text-black font-extrabold text-2xl text-center ">{linea2}</span>
        </div>

        

      </div>
    </div>
  );
}

export default App;
