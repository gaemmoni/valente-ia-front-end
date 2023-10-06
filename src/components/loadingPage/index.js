import React from 'react';
import ReactDOM from 'react-dom';
import clsx from 'clsx';

import { ReactComponent as LoadingGR } from '../../../resources/images/loading.svg';
import withDelayUnmounting from './withDelayUnmounting';

import './style.css';

const LoadingFullPagePresentation = (props) => {

    const {
        visible,
    } = props;

    return ReactDOM.createPortal(
        <div className={clsx('loading-full-page', { visible })}>
            <div id="wrapper">
                <div id="waves" />
                <LoadingGR />
            </div>
        </div>,
        document.body);
}

export default withDelayUnmounting(LoadingFullPagePresentation);