import { Card, CardMedia, Container } from "@mui/material";
import styled from "styled-components";
import { Colors } from "../styles/Styles";

// export const Conteudo = styled(Container)`
//     max-width:900px;
//     @media (max-width: 900px){
//         max-width:90%; 
//     }

// `

export const Cartinha = styled(CardMedia)`
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    right: 0;
    @media (max-width: 900px){
        width: auto;
        height: auto; 
    }
`

export const Background = styled.div`
    padding: 40px 20px 0 20px;
    width: 100%;
    min-height: 1080px;
    height: 100%;
    margin: 0;
    gap: 10px;
    background: #789981;
`