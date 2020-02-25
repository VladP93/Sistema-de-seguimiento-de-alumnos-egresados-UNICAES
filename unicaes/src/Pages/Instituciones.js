import React from 'react';
import Tabla from '../Components/Tabla';
import Finstituciones from '../Components/Finstituciones';
import Navbar from '../Components/Navbar';
import '../Components/Styles/Instituciones.css';
class Instituciones extends React.Component{

    render(){
        const encabezado = [
            {
                Header: "#",
                accessor: "userId"
            },
            {
                Header: "Nombre",
                accessor: "id"
            },

            {
                Header: "Direccion",
                accessor: "title"
            },
            {
                Header: "Departamento",
                accessor: "body"
            }
            ,

            {
                Header: "Municipio",
                accessor: "municipio"
            },
            {
                Header: "Acciones",
                Cell: props => {
                    return <button type="button" className="btn btn-warning">Detalle</button>;
                  },
                  width: 100,
                  maxWidth: 100,
                  minWidth: 100,
                  filterable: false,
                  sortable: false
            }


        ]
        return(
            <div  className="instituciones" >
                <style>{'body { background-color: #9E2723; }'}</style>
             <Navbar/>
             <br/>
             <Finstituciones/>
             <div className="Itabla">
             <Tabla entidad="/posts" columnas = {encabezado} />
             </div>
             
             
            
            </div>
            
        )
    }

}

export default Instituciones;
