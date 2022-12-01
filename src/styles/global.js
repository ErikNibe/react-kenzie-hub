import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family:"Inter", sans-serif;
    }

    :root {
        --primary: #FF577F; 
        --primary-focus: #FF427F;
        --primary-negative: #59323F;

        --gray4: #121214;
        --gray3: #212529;
        --gray2: #343B41;
        --gray1: #868E96;
        --gray0: #F8F9FA;

        --sucess: #3FE864;
        --negative: #E83F5B;
    }

    body{
        background-color: var(--gray4);
    }

    button {
        cursor: pointer;
    }
`