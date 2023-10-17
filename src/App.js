import './App.css'; 

//Importar el componente (por exportación nombrada, por defecto sería sin las llaves)
import Testimonio from './componentes/Testimonio';

//Testimonio es necesario para que React reconozca el componente creado
function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Opiniones de profesionales</h1>          
        <Testimonio 
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de software'
          empresa='Spotify'
          testimonio='Mi experiencia en Spotify ha sido increíblemente enriquecedora. Trabajar en la intersección de la tecnología y la música ha sido un desafío emocionante y gratificante.'
        />

        <Testimonio 
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de software'
          empresa='Amazon'
          testimonio='La cultura de trabajo en Amazon es única y desafiante. Aquí se espera un alto nivel de excelencia, y eso impulsa a todos a dar lo mejor de sí mismos.'
        />
      </div>      
    </div>
  );
}

export default App;
