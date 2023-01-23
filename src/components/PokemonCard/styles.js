import { Colors, Container, FontSizes } from "../../styles/Styles";
import styled from "styled-components";



export const Card = styled(Container)`
flex-direction: column;
justify-content: flex-end;
border-radius: 10px;
border: 5px solid #CCCDA6;
outline: 5px solid #4F6753;
background: ${Colors.cream};
width: 245px;
height: 315px;

@media (max-width: 842px){
    width: 500px;
}

@media (max-width: 550px){
    width: 245px;
}
    img{
        z-index: 2;
        margin: 0 0 45px 0;
        transform: scale(2);
        filter: drop-shadow(2px 2px 0px ${Colors.bronze});
    }

`

export const Texts = styled(Container)`
    z-index: 1;
    flex-direction: column;
    border-radius: 3px;
    color: ${Colors.white};
    box-shadow: 
    0 0 0 4px ${Colors.bronze},
    0 0 0 8px ${Colors.darkGrey};
    border: 3px solid ${Colors.white};
    background: ${Colors.blue};
    width: 230px;
    height: 100px;
    justify-content: space-around;
    padding: 10px 0;
    margin: 20px 0 2px 0;

    @media (max-width: 842px){
        border-radius: 5px;
        width: 487px;
        margin: 20px 0 2px 0;
    }

    @media (max-width: 550px){
        border-radius: 5px;
        width: 230px;
        margin: 20px 0 2px 0;
    }

    h2{
        filter: drop-shadow(2px 2px 0 ${Colors.black});
        text-transform: uppercase;
        letter-spacing: 2px;
    }
    
`

// export const PokeID = styled(Container)`
//     background: blue;
//     width: 30px;
//     height: 30px;
//     position: fixed;
//     border-radius: 3px;
//     margin: -270px 0 0 -200px;

// `

export const PokeType = styled(Container)`
    .tipo-water { color: blue };
    .tipo-grass { color: green };


    font-size: ${FontSizes.rat};
    border-radius: 3px;
    border: 1px solid ${Colors.white};
    padding: 10px;
    filter: drop-shadow(2px 2px 0 ${Colors.black});
    text-transform: uppercase;
`


