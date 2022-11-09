import React from "react";
import styled from "styled-components"

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.borderBase};
  max-width: 425px;
  width: 100%;
  height: 2.5rem;
  border-radius: 20px;
  overflow: hidden;

  :focus-within{
    box-shadow: darkcyan 0px 0px 2px;
  }
  
  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    background-color: ${({ theme }) => theme.backgroundLevel2};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    border-left: 1px solid ${({ theme }) => theme.borderBase};
    width: 20%;
    height: 100%;
  }
`;

export default function Search({valorDoFiltro, setValorDoFiltro}) {
    
    return (
        <StyledSearch>
            <input type="text" onChange={ (e) => setValorDoFiltro(e.target.value) } value={valorDoFiltro}></input>
            <button>
                🔎
            </button>
        </StyledSearch>
    )
}
