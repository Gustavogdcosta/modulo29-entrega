import styled from "styled-components";


export const FormularioContent = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    background-color: var(--cor-secundaria);
    padding: 32px;
    border-radius: 12px;
    margin-top: 40px;
`

export const BotaoPesquisa = styled.button `
    background-color: ${(props) => props.theme.corSecundaria};
    border: 1px solid ${(props) => props.theme.corPrincipal};
    height: 40px;
    padding: 0 16px;
    font-size: 18px;
    color: var(--cor-secundaria);
    margin-left: 8px;
    cursor: pointer;
`

export const CampoInput = styled.input`
padding: 0 16px;
outline-color: ${(props) => props.theme.corPrincipal};
`