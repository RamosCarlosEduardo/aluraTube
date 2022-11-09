import React from "react";
import { ColorModeContext } from "../src/components/menu/components/ColorMode";



export default function Video() {
    const contexto = React.useContext(ColorModeContext);
    
    
    return (
        <div>
            
            <iframe width="560" height="315" src={`https://www.youtube.com/embed/${"QsqatJxAUtk"}`} title="YouTube video player" frameborder="0"
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            Video!
            {contexto.mode}
            <button onClick={() => contexto.toggleMode()}>
                Trocar modo
            </button>
            
        </div>

    )
}