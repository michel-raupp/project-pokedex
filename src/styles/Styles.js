import styled from "styled-components"
import Navbar from "../components/Navbar"

export const Colors = {
    primary: 'rgb(248, 99, 0)',
    secondary: '#1E1E20',
    bright: '#FFA061',
    
    grey: '#DFD6DE',
    black: '#000000',
    darkGrey: '#27302F',
    white: '#fff',
    bronze: '#C9A749',
    blue:'#264F69',
    cream: '#F6F6D6',

}

export const Effects ={
    sombra: 'none',  //'drop-shadow(0px 0px 10px rgba(0, 0, 0))',//
    sombrinha: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.4))',
    brilho: 'none' //drop-shadow(0px 0px 5px rgba(248, 99, 0))//
}

export const Gradient ={
    preto:'linear-gradient(40deg, rgba(15,15,15,1) 27%, rgba(34,34,34,1) 100%)',
    cinza:'linear-gradient(0deg, rgba(15,15,15,1) 27%, rgba(34,34,34,1) 100%)',
    laranja: 'linear-gradient(0deg, #264F69 0%, rgba(248,99,0,1) 53%, rgba(255,117,25,1) 100%)',
    branco: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,117,25,1) 100%);',
    azul: 'linear-gradient(0deg, rgba(38,79,105,1) 0%, rgba(23,139,213,1) 100%)'
}

export const FontSizes = {

    //the taller the animal, the larger the font-size is! I though it's better in this way than "small, medium , large" or "xs, xl..."

    giraffe: '98px',
    hippo: '82px',
    horse: '70px',
    bigWolf: '50px',
    wolf: '20px',
    cat: '14px',
    rat: '10px',
}

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const Trademark = styled.img`
width: 120px;
margin-right: 50px;
`
