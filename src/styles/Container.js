import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 77px auto;
    width: 370px;
    
    @media (max-width: 380px) {
        width: 90%;
    }
`