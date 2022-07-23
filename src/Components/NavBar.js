import styled from "styled-components"
import logo from '../images/logo.svg'
import signIn from '../images/sign.svg'

export const NavBar = () => {
    return(
        <NavBarStyled>
            <Logo>
                <ImgLogo src={logo} alt='логотип'/>
                <H1>Mr. Donald's</H1>
            </Logo>
            <LogIn>
                <img src={signIn} alt='войти'/>
                <p>войти</p>
            </LogIn>
        </NavBarStyled>
    )
}

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 70px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #513252;
    color: white;
`
const Logo = styled.div`
    display: flex;
    align-items: center;
`
const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`
const ImgLogo = styled.img`
    width: 50px;
`
const LogIn = styled.button`
    padding: 3px 20px;
    font-size: 20px;
    border: none;
    margin-right: 20px;
    background-color: transparent;
    color: white;
`