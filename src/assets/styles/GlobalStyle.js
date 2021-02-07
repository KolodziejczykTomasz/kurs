import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,600;1,500;1,700&display=swap');
  body {
  margin: 0;
  padding: 0;  
  font-family: 'Montserrat', sans-serif;
  background-color: ${({ theme }) => theme.colors.grey};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({theme})=>theme.colors.white};
  }
`;

export default GlobalStyle;
