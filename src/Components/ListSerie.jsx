import React, { Component } from 'react'
import ServiceSerie from '../ServiceSerie'
import { NavLink } from 'react-router-dom'

export default class ListSerie extends Component {
    state = {
        series: [],
        seriesSeleccionadas: []
    }

    service = new ServiceSerie();
    selectSeries = React.createRef();

    cargarSerie = async () => {
        let datos = await this.service.getSeries();
        this.setState({
            series: datos
        })
    }

    componentDidMount = async () => {
        await this.cargarSerie();
    }

    getSeries = (event) => {
        event.preventDefault();
        let aux = [];
        let options = this.selectSeries.current.options;
        for (let option of options) {
            aux.push(option.value);
        }
    };


    render() {
        return (
            <div lassName="mx-auto max-w-6xl px-4 py-10">
                <h1 className="mb-6 text-3xl font-bold text-slate-900">
                    Lista de Serie
                </h1>
                <form onSubmit={this.getSeries}>
                    <select ref={this.selectSeries}
                        className='border rounded-md p-2'></select>
                </form>
            </div>)
    }
}
