import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

function UsuariosOutlet() {
   
    let user = useSelector(state => state.user.user);

    return (
        <>
        {
            user && <button>Cerrar sesión</button>
        }
            <Outlet />    
        </>
    )
}

export default UsuariosOutlet
