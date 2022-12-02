import styled, { css } from "styled-components";

export const Anchor = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 4px;

    cursor: pointer;

    ${({ btnType }) => {
        switch (btnType) {
            case "gray":
                return css`
                    background-color: var(--gray1);

                    &:hover {
                        background-color: var(--gray2);
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
        }
    }}
`