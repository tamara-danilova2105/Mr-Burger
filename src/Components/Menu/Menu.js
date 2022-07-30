import styled from "styled-components"
import { Banner } from "./Banner"
import dbMenu from '../DBMenu'
import { ListItem } from './ListItem'

export const Menu = ({ setOpenItem }) => (
    <MenuStyled>
        <Banner/>
        <SectionMenu>
            <h2>Бургеры:</h2>
            <ListItem
                setOpenItem={setOpenItem}
                itemList={dbMenu.burger}/>
        </SectionMenu>

        <SectionMenu>
            <h2>Закуски / Напитки:</h2>
            <ListItem 
                setOpenItem={setOpenItem}
                itemList={dbMenu.other}/>
        </SectionMenu>
    </MenuStyled>
)

const MenuStyled = styled.main`
    background-color: #ccc;
    margin-top: 70px;
`

const SectionMenu = styled.section`
    padding: 30px;
    margin-left: 380px;
`