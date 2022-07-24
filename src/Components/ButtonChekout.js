import styled from "styled-components"

export const ButtonChekout = styled.button`
    display: block;
    margin: 0 auto;
    width: 250px;
    height: 55px;
    font-size: inherit;
    font-family: inherit;
    background-color: #513252;
    color: #fff;
    border-color: transparent;
    cursor: pointer;
    transition-property: color, background-color, border-color;
    transition-duration: 0.3s;
    &:hover {
        background-color: #fff;
        color: #513252;
        border-color: #513252;
    }
`