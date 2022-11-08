import config from "../config.json";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import Timeline, { StyledTimeline } from "../src/components/Timeline";
import Header from "../src/components/Header";
import Favoritos from "../src/components/Favoritos";


function homePage(){
    return (
    <>
        <CSSReset/>
        <div>
            <Menu/>
            <Header/>
            <Timeline playlists={config.playlists}/>
            <Favoritos favoritos={config.Favoritos}/>
        </div>
    </>
    )
}

export default homePage



