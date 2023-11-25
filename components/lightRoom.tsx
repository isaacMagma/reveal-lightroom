'use client'
import React, {useEffect} from 'react';

export default function LightRoom(
    props:{
        children:React.ReactNode,
        secretColor: string,
        secret: string,
    })
    {
        const revealBackground = ()=>{
            document.documentElement.style.setProperty('--bg', props.secretColor);
        }
        const resetBackground = ()=>{
            document.documentElement.style.setProperty('--bg', '#FFFFFF;');
        }
        return(
            <div className="scene">
                <div className="backdrop"></div>
                <div className="noise"></div>
                <div className="dots"></div>
                <div className="canvas"></div>
                <h1>{props.secret}</h1>
                <div onMouseEnter={revealBackground} onMouseLeave={resetBackground}>
                    {props.children}
                </div>
            </div>
    )
}
