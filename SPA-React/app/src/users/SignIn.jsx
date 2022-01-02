import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logOut, signIn, signUp } from '../store/user';

function SignIn(props) {

    let dispatch = useDispatch();

    let user = useSelector(state => state.user.user);
    console.log(user);

    let doSignIn = () => {
        dispatch(
            signUp({
                credentials:{
                    email: 'luan@desouza.eth',
                    jwtToken: '232jadjasd2131'
                }
            })
        )
    }

    let doLogOut = () => {
        dispatch(
            logOut()
        )
    }

    return (
        <>
            {
                user ?
                <button onClick={doLogOut}>Cerrar Sesion</button>
                :
            <button onClick={doSignIn}>Ingresar</button>
            }
        </>
    )
}

export default SignIn;

