import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';

const Formulario = ({busqueda, guardarBusqueda, guardarConsultar}) => {

    

    const [error, guardarError] = useState(false);

    const {ciudad, pais} = busqueda;

    //Función que coloca los elementos en el state
    const handleChange = e => {
        //actualizamos el state
        guardarBusqueda({
            ...busqueda,
            [e.target.name]: e.target.value
        });
    }

    //Manejamos el submit del usuario
    const handleSubmit = e => {
        e.preventDefault();
        //validamos
        if(ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        guardarConsultar(true);
    }
    return ( 
        <form onSubmit={handleSubmit}>

            {error ? <Error mensaje="Ambos campos son obligatorios"/> : null}

            <div className="input-field col s12">
                <input 
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}   
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">Ciudad: </label>
            </div>
            <div className="input-field col s12">
                <select
                    name="pais"
                    value={pais}
                    onChange={handleChange}
                >
                    <option value="">-- Selecione un país --</option>
                    <option value="US">Estados Unidos</option>
                    <option value="MX">México</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">España</option>
                    <option value="PE">Perú</option>
                </select>
                <label htmlFor="ciudad">País: </label>
            </div>
            <div className="input-field col s12">
                <input 
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    );
}

Formulario.propTypes = {
    busqueda: PropTypes.object.isRequired,
    guardarBusqueda: PropTypes.func.isRequired,
    guardarConsultar: PropTypes.func.isRequired
}
 
export default Formulario;