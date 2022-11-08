import styled from "styled-components";
import config from "../../config.json";
import bannerImg from '../assets/Banner.png'

const StyledHeader = styled.div`
    .banner {
        width: 100%;
        height: 250px;
    }
    .profile {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1rem;
        margin-right: auto;
    }
    .profile__img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .profile__infos {
        display: flex;
        flex-direction: column;
    }
    .profile__name {
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
    }
    .profile__job {
        font-family: 'Helvetica';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        color: #666666;
    }
`

export default function Header (){
    return (
        <StyledHeader>
            <img className="banner" src={bannerImg.src}/>
            <div className="profile">
                <img className="profile__img" src={`http://www.github.com/${config.github}.png`}/>
                <div className="profile__infos">
                    <span className="profile__name">{config.name}</span>
                    <span className="profile__job">{config.job}</span>
                </div>
            </div>
        </StyledHeader>
    )
}