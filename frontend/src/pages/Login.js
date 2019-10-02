import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import './Login.css';

export default function Login({ history}) {

    const [username, setUsername] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        console.log(username);

        history.push('/main');
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={Logo} alt="Tindev" />
                <input
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                    placeholder="What is your Github?" />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}