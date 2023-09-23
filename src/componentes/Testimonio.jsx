import React from "react";
import '../hojas-de-estilo/Testimonio.css'

//Exportación nombrada
//export function Testimonio() {
//Un componente funcional de React retorna un elemento JSX
function Testimonio(props) {
    return (
        //Contenedor principal
        //Para insertar una imagen es necesario utilizar require
        //para insertar codigo JS en la imagen se coloca `` y el código enmedio de ${}
        <div className="contenedor-testimonio">            
            <img className="imagen-testimonio" src={require(`../imagenes/testimonio-${props.imagen}.jpg`)} alt="Foto de " />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className="cargo-testimonio">
                    {props.cargo} en <strong>{props.empresa}</strong>
                </p>
                <p className="texto-testimonio">"{props.testimonio}"</p>
            </div>
        </div>
    );
}  

//Exportación por defecto
export default Testimonio;
