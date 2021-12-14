import React from 'react'
import {ChatContext} from '../context/ChatProvider'
import Agregar from './Agregar'
import './chat.css';

const Chat = () => {

    const {usuario, mensajes} = React.useContext(ChatContext)
    const refZonaChat = React.useRef(null)

    React.useEffect(() => {
        if(refZonaChat.current !== null){
        //   console.log('useefecct', refZonaChat.current)
        //   console.log('scrollTop', refZonaChat.current.scrollTop)
        //   console.log('scrollHeight', refZonaChat.current.scrollHeight)
          refZonaChat.current.scrollTop = refZonaChat.current.scrollHeight;
        }
      }, [mensajes])

    return (
        <div 
            className='mt-3 px-2' 
            ref={refZonaChat} 
            style={{ height: '75vh', overflowY: 'scroll'}}
        >

            {
                mensajes.map((item, index) => (
                    item.uid === usuario.uid ? (
                        <div className="d-flex justify-content-end mb-2" key={index}> 
                        <p> 
                            <div className="peque text-white"><img id='profile-photo' src='logo192.png' className='rounded-circle' width='30px'/>
                            Usuario: {item.uid} <br></br></div>
                            <div className='chat ml-6 p-3'>Dice: {item.texto}</div>
                        </p>
                        </div>
                    ) : (
                        <div className="d-flex justify-content-start mb-2" key={index}>
                        <p> 
                            <div className="peque1 text-white"><img id='profile-photo' src='logo192.png' className='rounded-circle' width='30px'/>
                             Usuario: {item.uid} <br></br></div>
                           <div className='chat1 ml-6 p-3'>Dice: {item.texto}</div>
                        </p>
                        </div>
                    )
                ))
            }
            <Agregar />
        
        </div>
    )
}

export default Chat