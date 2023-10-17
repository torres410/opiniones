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

        <Testimonio 
          nombre='Isabella Smith'
          pais='Francia'
          imagen='isabella'
          cargo='Desarrolladora de videojuegos'
          empresa='Ubisoft'
          testimonio='Como desarrolladora de videojuegos en Ubisoft, he tenido la oportunidad de ser parte de un equipo apasionado y creativo que trabaja en la creación de experiencias de entretenimiento únicas.'
        />

        <Testimonio 
          nombre='Mateo Fernández'
          pais='España'
          imagen='mateo'
          cargo='Programador Senior'
          empresa='Glovo'
          testimonio='La escala de Glovo es impresionante. Saber que nuestras soluciones tecnológicas impactan la vida cotidiana de mil de personas en múltiples ciudades en todo el mundo es un estímulo constante.'
        />
      </div>      
    </div>
  );
}

export default App;
