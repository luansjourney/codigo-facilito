import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { signIn } from '../store/user';

let SignIn = (props) => {

    let dispatch = useDispatch();

    const { register, handleSubmit} = useForm();

    let onSubmit = (data) => {
        dispatch(
            signIn(
            {credentials: data}
            )
        )
    }
    
    return (
           <form onSubmit={handleSubmit( onSubmit )}>
               <input type="email" name="email" ref={register} placeholder='Correo electronico'/>
               <input type="password" name="password" ref={register} placeholder='Contrasena'/>
               <input type="submit" value="Enviar" />
           </form>
    )
}

export default SignIn;

