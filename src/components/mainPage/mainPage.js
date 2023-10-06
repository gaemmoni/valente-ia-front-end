import React from 'react';

import { ReactComponent as ValenteIcon } from '../../../resources/images/icon positivo.svg'

import './style.css';

class LoginPage extends React.Component {
    render() {
        return (
            <div
                className="main-full-page"
            >
                <div>
                    <div
                        className="main-page">
                        <ValenteIcon className="main-page-icon" />

                        <div
                            className="main-page-dialog-01">
                            Olá Joana! Meu nome é Valente e vou te acompanhar nessa jornada.
                        </div>
                        <div className="main-page-dialog-02">
                            Olá!
                        </div>
                        <input type="text" className="main-page-input-speak" placeholder="O que você pode fazer?" />
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;