import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Global from '../Global';

export default class MenuComponent extends Component {
    state = {
        series: [],
        desplegable: false
    };

    cargarSerie = () => {
        const url = Global.urlApi + 'api/Series';
        axios.get(url).then(response => {
            this.setState({
                series: response.data
            });
        });
    };

    componentDidMount() {
        this.cargarSerie();
    }

    render() {
        return (
            <nav className="bg-slate-900 text-white p-5 shadow-lg">
                <div className="max-w-7xl mx-auto flex items-center gap-8">
                    <NavLink to="/" className="hover:text-blue-400">
                        Home
                    </NavLink>

                    <NavLink to="/nuevo" className="hover:text-blue-400">
                        Nuevo personaje
                    </NavLink>

                    <NavLink to="/modificar" className="hover:text-blue-400">
                        Modificar personaje
                    </NavLink>

                    <div className="relative">
                        <button
                            type="button"
                            className="hover:text-blue-400"
                            aria-expanded={this.state.desplegable}
                            onClick={() => this.setState({
                                desplegable: !this.state.desplegable
                            })}
                        >
                            Series
                        </button>

                        {this.state.desplegable && (
                            <ul className="absolute top-full left-0 mt-3 w-60 bg-white text-slate-900 rounded-lg shadow-xl z-50 max-h-80 overflow-y-auto">
                                {this.state.series.map(serie => (
                                    <li key={serie.idSerie}>
                                        <NavLink
                                            to={'/serie/' + serie.idSerie}
                                            className="block px-4 py-3 hover:bg-blue-100"
                                            onClick={() => this.setState({
                                                desplegable: false
                                            })}
                                        >
                                            {serie.nombre}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </nav>
        );
    }
}
