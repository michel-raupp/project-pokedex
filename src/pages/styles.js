import { CardMedia, Container } from "@mui/material";
import styled from "styled-components";
import { Colors, FontSizes } from "../styles/Styles";

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 5px;
    margin: 50px 0;
    min-height: 100px;
    height: auto;
    background: ${Colors.cream};
    border: 5px solid #CCCDA6;
    outline: 5px solid #4F6753;

    @media (max-width: 940px){
        flex-direction: column;
        margin: 0 0 30px 0;
    }
    @media (max-width: 550px){
        width: 100%;
    }

    h1{
        text-align: center;
        line-height: 40px;
        font-size: ${FontSizes.wolf};
        color: #4F6753;
        padding: 0 50px;

        @media (max-width: 1150px){
            line-height: 30px;
            margin-top: 0px;
        }

        @media (max-width: 550px){
            font-size: ${FontSizes.cat};
            line-height: 17px;
            padding: 0 10px;
        }
    }

    p{
        font-size: 12px;
        margin-top: 20px;
        padding: 0 50px;
        color: #4F6753;
        line-height: 20px;
        text-align: left;

        @media (max-width: 1150px){
            padding: 0 20px 0px 30px;
        }

        @media (max-width: 842px){
            text-align: center;
            line-height: 17px;
            padding: 0 50px 0px 50px;
        }

        @media (max-width: 550px){
            font-size: ${FontSizes.rat};
            padding: 0 20px 20px 20px;
        }
    }

    a{
        text-decoration: none;
        p{
            border: 4px solid ${Colors.white};
            outline: 2px solid #264F69;
            border-radius: 10px;
            margin: 30px 0 0 0;
            padding: 10px;
            background-color: #264F69;
            color: #fff;
            @media (max-width: 940px){
                margin: 20px 0 30px 0;
            }
            @media (max-width: 550px){
            font-size: 8px;
            padding: 5px 10px;
            margin: 0 0 20px 0;
        }
        }
    }

    img{
        border-radius: 3px;
        z-index: 3;
        width: 474px;
        padding: 20px;
        box-shadow: 
            0 0 0 4px ${Colors.bronze},
            0 0 0 8px ${Colors.darkGrey};
        border: 3px solid ${Colors.white};
        background: ${Colors.blue};

        @media (max-width: 1220px){
            width: 400px;
            padding: 50px 0;
        }
        @media (max-width: 1020px){
            width: 350px;
            padding: 100px 0;
        }
        @media (max-width: 940px){
            box-shadow: none;
            border: none;
            background: none;
            padding: 10px 0 0 0;
            filter: drop-shadow(2px 2px 0px ${Colors.bronze});
        }
        @media (max-width: 550px){
            width: 250px;
            padding: 10px 0 0 0;
        }  
    }
`

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

export const Background = styled(Container)`
    padding: 90px 0 40px 0;
    width: 100%;
    min-height: 1080px;
    height: 100%;
    min-width: 100%;
    margin: 0;
    gap: 10px;
    background: #789981;

     .Spacing{
        gap: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin: 0;
    }

    @media (max-width: 940px){
        padding: 120px 0 40px 0;   
    }

    @media (max-width: 550px){
        padding: 100px 0 40px 0;   
    }
    
`

export const NotFound = styled(Header)`
width: 800px;
height: auto;
min-height: 300px;
margin: 0;
    @media (max-width: 940px){
        flex-direction: column;
        padding: 30px;
        width: 100%; 
    }

    @media (max-width: 550px){
        width: 100%;
    }

    h1{
        color: red;
        padding: 0;
    }

    p{
        @media (max-width: 1150px){
            padding: 0 20px 0 20px;
        }

        @media (max-width: 842px){
            padding: 0;
        }
    }

`

