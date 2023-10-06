import React, { Component, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from '../loginPage';
import MainPage from '../mainPage';

import LoadingFullPage from '../loadingPage/index';

import './style.css';

class Routers extends Component {
    render() {
        return (
            <>
                <Loading />
                <Router>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<LoginPage />}>
                        </Route>
                        <Route
                            exact
                            path="/chat"
                            element={<MainPage />}>
                        </Route>
                    </Routes>
                </Router>
            </>
        );
    }
}

const Loading = (props) => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 2000);

        return () => clearTimeout(timer);
    }, []);

    return <>
        <LoadingFullPage
            visible={loading}
        />
    </>
};
export default Routers;