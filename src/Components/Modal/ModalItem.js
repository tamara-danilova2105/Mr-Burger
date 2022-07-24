import styled from "styled-components"
import { ButtonChekout } from "../ButtonChekout"

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const closeModel = e => {
        if(e.target.id === "overlay") {
            setOpenItem(null)
        }
    }

    const order = {
        ...openItem
    }

    const addToOrder = () => {
        setOrders([...orders, order])
        setOpenItem(null)
    }

    return(
        <Overlay id="overlay" onClick={closeModel}>
        <Modal>
            <Banner img={openItem.img}/>
            <Content>
                <HeaderContent>
                    <div>{openItem.name}</div>
                    <div>{openItem.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</div>
                </HeaderContent>
                <ButtonChekout onClick={addToOrder}>ДОБАВИТЬ</ButtonChekout>
            </Content>
        </Modal>
    </Overlay>
    )
}

const Overlay = styled.div`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    z-index: 20;
`

const Modal = styled.div`
    background-color: #fff;
    width: 600px;
    height: 500px;
`

const Banner = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${({img}) => img});
    background-size: cover;
    background-position: center;
`

const Content = styled.section`
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 200px);
`

const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 700;
    font-family: 'Comfortaa', cursive;
`