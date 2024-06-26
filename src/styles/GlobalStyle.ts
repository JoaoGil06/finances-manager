import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
  --venetianNights: #7C5DFA ;
  --forgottenPurple: #9277FF;

  --konBlack: #1E2139;
  --royalCurtsy: #252945;
  --ruinedSmores: #0C0E16;
  --riverStyx: #141625;
  
  --papiloArgeotus: #888EB0;
  --stoicWhite: #DFE3FA;
  --trueLavender: #7E88C3;
  --whitePearl: #F8F8FB;
  --white: #FFFFFF;

  
  --fireOpal: #EC5757;
  --americanPink: #FF9898;
    
  }

* {
  box-sizing: border-box;
}
  html {
  /* font-size: 10px; */
  font-size: 62.5%;
  padding: 0;
  margin: 0;
  height:100%;
}

/* 600px */
@media only screen and (max-width: 37.5em) {
  html {
    /* font-size: 10px; */
    font-size: 62.5%;
  }
}

/* 900px */
@media only screen and (max-width: 56.25em) {
  html {
    /* font-size: 8px; */
    font-size: 50%;
  }
}

/* 1200px */
@media only screen and (max-width: 75em) {
  html {
    /* font-size: 9px */
    font-size: 56.25%;
  }
}

/* 1800px */
@media only screen and (min-width: 112.5em) {
  html {
    /* font-size: 12px; */
    font-size: 75%;
  }
}

body {
  padding: 0;
  margin: 0;
  font-family: "League Spartan", sans-serif;
  background-color: var(--white);
  height:100%;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

a {
  text-decoration: none;
}

button:focus, button:focus-visible {
  outline: none;
}

`;
