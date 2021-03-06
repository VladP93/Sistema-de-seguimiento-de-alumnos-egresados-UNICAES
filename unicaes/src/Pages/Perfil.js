import React from 'react';
import BarraPerfil from '../Components/BarraPerfil';
import HPerfil from "../Components/HPerfil";
import Cards from "../Components/Cards";
import Api from "../Api";
class Perfil extends React.Component{
    constructor(props){
        super(props)
        this.state={
            loguser: ''
        }
    }

    componentDidMount(){
            fetch(`${Api}/logsesion`, {
                method: 'GET'
            })
            .then(res => res.json())
            .then(res => {
                this.setState({loguser: res.loguser})
            })
    }

    render(){
        console.log(this.state.loguser);
        return(
            <div>
                <style>{'body { background-color: #9E2723; }'}</style>
                <BarraPerfil/>
                <div className='container pt-4'>
                    <HPerfil entidad="/perfil" loguser={this.state.loguser} />
                </div>
                <div className="container pt-4">
                    <div className="container-fluid row">
                        <div className="col-12"><Cards tituloBoton="Carreras"
                         entidadcarreras="carrerasegresado" user={this.state.loguser}/></div>
                        <div className="col-12"><Cards tituloBoton="Diplomas/Certificados" 
                        entidaddiploma="diplomasegresado" user={this.state.loguser}/></div>
                        <div className="col-12"><Cards tituloBoton="Aptitudes"
                        entidadaptitudes="aptitudesegresado" user={this.state.loguser}/></div>
                        <div className="col-12"><Cards tituloBoton="Experiencia Laboral"
                        entidadexperiencia="experiencialaboral" user={this.state.loguser}/></div>
                    </div>
                </div>
            </div>
        )
    }
    

}
export default Perfil;