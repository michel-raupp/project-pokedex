import styled from "styled-components"

export const Colors = {
    grey: '#DFD6DE',
    black: '#000000',
    darkGrey: '#27302F',
    white: '#fff',
    bronze: '#C9A749',
    blue:'#264F69',
    cream: '#F6F6D6',
}

export const FontSizes = {

    //the taller the animal, the larger the font-size is! I though it's better in this way than "small, medium , large" or "xs, xl..."

    hippo: '70px',
    horse: '50px',
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

    @media (max-width: 550px){
        width: 80px;
        margin-right: 20px;
    }
`