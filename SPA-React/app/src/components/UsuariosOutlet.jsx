import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function UsuariosOutlet() {
    let navigate = useNavigate();
    let redirect = ()=> {
        navigate('/');
    }

    return (
        <>
            <button onClick={redirect}>Ir al Home</button>
            <Outlet />    
        </>
    )
}

export default UsuariosOutlet
