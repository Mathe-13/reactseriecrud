import React, { Component } from 'react'
import ServiceSerie from '../ServiceSerie'
import { Navigate } from 'react-router-dom'

export default class CreatePersonaje extends Component {
    service = new ServiceSerie();
    cajaIdSerie = React.createRef();
    cajaNombre = React.createRef();
    cajaImagen = React.createRef();
    cajaPuntuacion = React.createRef();
    cajaAnyo = React.createRef();

  state {
    mensaje: null,
        status: false
}

insertPersonaje = (event) => {
    let personaje = {
        idserie: parseInt(this.cajaIdSerie.current.value),
        nombre: this.
    }
}
render() {
    return (
        <div>CreatePersonaje</div>
    )
}
}
