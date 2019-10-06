import React from 'react';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';
import './Main.css';

export default function Main({ match }) {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars0.githubusercontent.com/u/17483394?v=4" alt="" />
                    <footer>
                        <strong>Richard Scheid</strong>
                        <p>Software Engineer</p>
                    </footer>
                
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike" />
                        </button>

                        <button type="button">
                            <img src={like} alt="Like" />
                        </button>            
                    </div>
                </li>
            </ul>
        </div>
    );
}