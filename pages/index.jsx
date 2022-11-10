import React from "react";
import config from "../config.json";
import Menu from "../src/components/menu/Index";
import Timeline, { StyledTimeline } from "../src/components/Timeline";
import Header from "../src/components/Header";
import Favoritos from "../src/components/Favoritos";



function homePage(){
    const [valorDoFiltro, setValorDoFiltro] = React.useState("");
    
    return (
    <>
        <div>
            <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
            <Header/>
            <Timeline searchValue={valorDoFiltro} playlists={config.playlists}/>
            <Favoritos favoritos={config.Favoritos}/>
        </div>
    </>
    )
}

export default homePage



