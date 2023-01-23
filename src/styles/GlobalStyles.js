
import { createGlobalStyle } from 'styled-components';
import { Colors, FontSizes } from './Styles';


const GlobalStyle = createGlobalStyle`

  *{
    font-family: 'Press Start 2P';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h2{
    font-size: ${FontSizes.cat};
  }
  h3{
    font-size: ${FontSizes.cat};
  }
  hr{
  display: block;
  height: 1px;
  border-top: 1px solid '${Colors.grey}';
  margin: 5px 0;
  }

  p{
    font-size: ${FontSizes.rat};
  }
  ::-webkit-scrollbar{
    width: 20px;
  }
  ::-webkit-scrollbar-track{
    background: ${Colors.blue};
  }
  ::-webkit-scrollbar-thumb{
    background: ${Colors.cream};
    border: solid 2px ${Colors.blue};
    border-radius: 5px;
    transition: 0.5s ease-in-out;
  }
  ::-webkit-scrollbar-thumb:hover{
    transition: 0.5s ease-in-out;
    background: ${Colors.bronze};
  }
`

export default GlobalStyle;
