import styled, {css} from "styled-components";

export const Button = styled.button`
    
    border: none;
    border-radius: 4px;

    ${({ btnType }) => {
        switch (btnType) {
            case "pink":
                return css`
                    background-color: var(--primary);

                    &:hover {
                        background-color: var(--primary-focus);
                    }
                `
            case "gray":
                return css`
                    background-color: var(--gray1);

                    &:hover {
                        background-color: var(--gray2);
                    }
               `
            case "wine":
                return css`
                    background-color: var(--primary-negative);

                    &:hover {
                        background-color: var(--primary-focus);
                    }
               `
            case "black":
                return css`
                    background-color: var(--gray3);

                    &:hover {
                        background-color: var(--gray2);
                    }
               `

        }
    }}

    ${({ btnSize }) => {
        switch (btnSize) {
            case "big":
                return css`
                    width: 100%;
                    height: 48px;
                    padding: 0 22px;

                    font-weight: 500;
                    font-size: 16px;
                    color: #FFFFFF;
                `
            case "medium":
                return css`
                    width: 68px;
                    height: 40px;
                    padding: 0 16px;

                    font-weight: 600;
                    font-size: 12px;
                    color: var(--gray0);
                `
            case "small":
                return css`
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                    width: 55px;
                    height: 32px;
                    padding: 0 16px;

                    font-weight: 600;
                    font-size: 12px;
                    color: var(--gray0);
                `
        }
    }}
`