import React from 'react'
import {ChatContext} from '../context/ChatProvider'
import './chat.css';

const Navbar = () => {

    const {usuario, iniciarSesion, cerrarSesion} = React.useContext(ChatContext)

    return (
        <nav className="navbar navbar-dark bg-dark">
            <span className="navbar-brand til"><img src="L1.png" alt="logo1" width="70" height="70"/>WeChat</span>
            <div>
                {
                    usuario.activo ? (
                        <button 
                            className="btn btn-outline-danger my-2 my-sm-0" 
                            onClick={cerrarSesion}
                        >
                           <i className="fa fa-remove"></i> Salir
                        </button>
                    ) : (
                        <button 
                            className="btn btn-outline-success my-2 my-sm-0" 
                            onClick={iniciarSesion}
                        >
                           <i className="fa fa-user"></i>  Acceder 
                        </button>
                    )
                }
            </div>
        </nav>
    )
}

export default Navbar