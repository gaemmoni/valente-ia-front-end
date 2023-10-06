import React from 'react';

import { ReactComponent as ValenteIcon } from '../../../resources/images/icon positivo.svg'

import './style.css';

const LoginContainer = () => {
    return (
        <div
            className="login-page-container"
        >
            <ValenteIcon className="login-page-icon" />
            <div
                className="login-page-user-login-form"
            >
                <div className="login-page-form-row">

                    <label className="login-page-user-form-label">Usuario:</label>
                    <input type="text" className="login-page-user-form-input-text" placeholder="E-mail ou usuário" />
                </div>

                <div className="login-page-form-row">
                    <label style={{ marginTop: 30 }} className="login-page-user-form-label">Senha:</label>
                    <input id="password" type="password" className="login-page-user-form-input-text" placeholder="Senha" />
                </div>
            </div>
        </div>
    );
};

class LoginPage extends React.Component {

    render() {

        return (
            <div
                className="login-page"
            >
                <div
                    className="login-page-container-form"
                >
                    <LoginContainer />

                    <div className="login-page-footer">
                        <button
                            className="login-page-button"
                        >
                            Acessar
                        </button>
                        <label style={{ marginTop: 10 }} className="login-page-footer-label">
                            Esqueceu sua senha?
                        </label>
                        <label className="login-page-footer-label">
                            Cadastre-se
                        </label>
                    </div>
                </div>
            </div >
        );
    }
}

export default LoginPage;