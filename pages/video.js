import React, { useState } from "react";
import styled from "styled-components";
import { ColorModeContext } from "../src/components/menu/components/ColorMode";



export default function Video() {
    const contexto = React.useContext(ColorModeContext);

    return (
        <StyledVideoWrapper>

            <VideoFrame />
            <a href="/">Voltar</a>
            <button onClick={() => contexto.toggleMode()}>
                Trocar modo
            </button>

        </StyledVideoWrapper>

    )
}

const StyledVideoWrapper = styled.div`
display: grid;
width: 100%;
place-items: center;
a {
    color: ${({ theme }) => theme.textColorBase}
}
iframe {
    /* width="560" height="315" */
    width: 60vw;
    height: 33.75vw;    
}
`

function VideoFrame() {
    const [idVideo, setIdVideo] = useState("");

    React.useEffect(() => {
        const queryId = window.location.href.split("=")[1]
            setIdVideo(queryId);
        
    }, []);

    return (
       
            <iframe src={`https://www.youtube.com/embed/${idVideo}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
       
    )

}