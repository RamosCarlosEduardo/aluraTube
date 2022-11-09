import styled from "styled-components";

const StyledFavoritos = styled.div`
    h2 {
        padding: 0 2rem;
        font-size: 1.2rem;
    }
    .favoritos-items {

        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        padding: 16px 32px;
    }
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .favoritos-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        color: ${ ({theme}) => theme.textColorBase};
    }
    span {
        font-size: 1rem;
    }

`

export default function Favoritos(props) {
    const favoritos = props.favoritos

    return (
        <StyledFavoritos>
            <h2>AluraTube Favoritos</h2>
            <div className="favoritos-items">
                {favoritos.map((fav) => {

                    return (
                        <a className="favoritos-container" key={fav.name} href={`https://github.com/${fav.name}`} target="_blank">
                            <img src={fav.thumb} />
                            <span>{`@${fav.name}`}</span>
                        </a>
                    )
                })}
            </div>
        </StyledFavoritos>
    )
}