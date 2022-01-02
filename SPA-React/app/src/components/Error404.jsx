import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
    return (
        <>
            <Link to="/">Regresar al inicio</Link>
            <h1>Esta página aún no esta lista</h1>
        </>
    )
}

export default Error404;
