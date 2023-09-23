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
          testimonio='Ingeniería de software es la aplicación práctica del conocimiento científico al diseño y construcción de programas de computadora y a la documentación asociada requerida para desarrollar, operar y mantenerlos. Se conoce también como desarrollo de software o producción de software (Bohem, 1976).'
        />

        <Testimonio 
          nombre='Shawn Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de software'
          empresa='Amazon'
          testimonio='Ingeniería de software es la aplicación práctica del conocimiento científico al diseño y construcción de programas de computadora y a la documentación asociada requerida para desarrollar, operar y mantenerlos. Se conoce también como desarrollo de software o producción de software (Bohem, 1976).'
        />
      </div>      
    </div>
  );
}

export default App;
