import React from 'react';
import style from './style.module.css';
import {PacmanLoader} from "react-spinners";

function LoadingPage(props) {
    return (
        <div className={style.page}>
            <PacmanLoader loading={props.loading} size={60}/>
        </div>
    );
}

export default LoadingPage;