import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from '../Pages/Login';
import Registro from '../Pages/Registro';
import Instituciones from '../Pages/Instituciones'; 
import Cargos from '../Pages/Cargos';
import Aptitudes from '../Pages/Aptitudes';
import AreasLaborales from '../Pages/AreasLaborales';
import Carreras from '../Pages/Carreras';
import Decanos from '../Pages/Decanos';
import Facultades from '../Pages/Facultades';
import TipodeCarrera from '../Pages/TipodeCarreras';
import Perfil from '../Pages/Perfil';
import EditarPerfil from '../Pages/EditarPerfil';



function App(){
return(
<BrowserRouter>
<switch>
    <Route exact path="/Login"  component={Login}></Route>
    <Route exact path="/Registro"  component={Registro}></Route>
    <Route exact path="/Instituciones"  component={Instituciones}></Route>
    <Route exact path="/Cargos"  component={Cargos}></Route>
    <Route exact path="/Aptitudes"  component={Aptitudes}></Route>
    <Route exact path="/AreasLaborales"  component={AreasLaborales}></Route>
    <Route exact path="/Carreras"  component={Carreras}></Route>
    <Route exact path="/Decanos"  component={Decanos}></Route>
    <Route exact path="/Facultades"  component={Facultades}></Route>
    <Route exact path="/TipodeCareras"  component={TipodeCarrera}></Route>
    <Route exact path="/Perfil"  component={Perfil}></Route>
    <Route exact path="/AEditarPerfil "  component={EditarPerfil}></Route>
</switch>
</BrowserRouter>
);

}

export default App;