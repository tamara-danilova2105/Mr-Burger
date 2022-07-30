import styled from "styled-components"
import { ButtonChekout } from "../ButtonChekout"
import { useCount } from "../Hooks/useCount"
import { CountItem } from "./CountItem"
import { formatCurrency, getTotalPriceItem } from '../Function/secondaryFunction'
import { Toppings } from "./Toppings"
import { useTopping } from "../Hooks/useTopping"

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

    const counter = useCount()
    const toppings = useTopping(openItem)

    const closeModel = e => {
        if(e.target.id === "overlay") {
            setOpenItem(null)
        }
    }

    const order = {
        ...openItem,
        count:  counter.count,
        topping: toppings.toppings
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
                    <div>{ formatCurrency(openItem.price)}</div>
                </HeaderContent>

                <CountItem {...counter}/>

                {openItem.toppings && <Toppings {...toppings}/>}

                <TotalPriceItem>
                    <span>Цена:</span>
                    <span>{formatCurrency(getTotalPriceItem(order))}</span>
                </TotalPriceItem>

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

const TotalPriceItem = styled.div`
    display: flex;
    justify-content: space-between;
`