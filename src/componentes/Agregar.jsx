import React from 'react'
import {ChatContext} from '../context/ChatProvider'

const Agregar = () => {

    const {agregarMensaje, usuario} = React.useContext(ChatContext)

    const [mensaje, setMensaje] = React.useState('')

    const formulario = e => {
        e.preventDefault()
        if(!mensaje.trim()){
            console.log('texto vacío')
            return
        }
        agregarMensaje(usuario.uid, mensaje)
        setMensaje('')
    }

    return (
        <form 
            className="input-group fixed-bottom p-3 bg-dark"
            onSubmit={formulario}
        >
            <input 
                type="text" 
                placeholder="Escribe tu mensaje..."
                className="form-control"
                onChange={e => setMensaje(e.target.value)}
                value={mensaje}
            />
            <div className="input-group-append">
                <button className="btn btn-danger" type="submit"><i className="fa fa-send"></i></button>
            </div>
        </form>
    )
}

export default Agregar