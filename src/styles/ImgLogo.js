import styled, {css} from "styled-components";

export const ImgLogo = styled.img`
    width: 144px;
    height: 20px;

    ${({page}) => {
        switch (page) {
            case "loginPage":
                return css`
                    margin-bottom: 40px;
                `
        }
    }}
`