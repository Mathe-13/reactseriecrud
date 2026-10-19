import React, { Component } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import MenuComponent from "./MenuComponent";
import ListSerie from "./ListSerie";
import HomeComponent from "./HomeComponet";
import CreatePersonaje from "./CreatePersonaje";
import UpdatePersonaje from "./UpdatePersonaje";

export default class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <MenuComponent />
                <Routes>
                    <Route path="/" element={<HomeComponent />} />
                    <Route path="/create/" element={<CreatePersonaje />} />
                    <Route path="/update/:idpersonaje/:nombre/:imagen:" element={<UpdatePersonaje />} />
                </Routes>
            </BrowserRouter>
        )
    }
}