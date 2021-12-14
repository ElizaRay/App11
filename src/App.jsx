import React from 'react'
import {ChatContext} from './context/ChatProvider'
import Chat from './componentes/Chat'
import Navbar from './componentes/Navbar'
import './App.css';

const App = () => {

    const {usuario} = React.useContext(ChatContext)

    return usuario.activo !== null ? (
        <div>
            <Navbar />
            {
                usuario.activo ? (
                    <Chat/>
                ) : (
                    <div className='text-center mt-5 lead til1 container'>
                    ¡¡¡Bienvenido!!!
                    <center>
                        <img id='profile-photo' src='L2.png' width='400px'/>
                    </center>
                        Haz clic en acceder para iniciar chat
                    </div>
                )
            }
        </div>
    ) : (<div>Cargando...</div>)
}

export default App