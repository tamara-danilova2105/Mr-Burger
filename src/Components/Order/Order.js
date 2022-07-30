import styled from "styled-components"
import { ButtonChekout } from "../ButtonChekout"
import OrderListItem from "./OrderListItem"
import { getTotalPriceItem } from '../Modal/ModalItem'

const Order = ({ orders }) => {
    const getTotalOrder = orders.reduce((result, order) => 
        getTotalPriceItem(order) + result, 0)

    return(
        <OrderStyled>
            <OrderTitle>КОРЗИНА</OrderTitle>

            <OrderConten>
                {orders.length ?
                    <OrderList>
                        {orders.map(order => <OrderListItem order={order}/>)}
                    </OrderList>
                : <Empty>Ваша корзина пуста...</Empty>}
            </OrderConten>

            <Total>
                <span>ИТОГО:</span>
                <span> 5 шт.</span>
                <TotalPrice>{getTotalOrder.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</TotalPrice>
            </Total>
            <ButtonChekout>ЗАКАЗАТЬ</ButtonChekout>
        </OrderStyled>
    )
}

export default Order


const OrderStyled = styled.section`
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 70px;
    left: 0;
    background-color: #fff;
    min-width: 380px;
    height: calc(100% - 70px);
    padding: 20px;
`

const OrderTitle = styled.h2`
    text-align: center;
    margin-bottom: 10px;
    margin-top: 10px;
`

const OrderConten = styled.div`
    flex-grow: 1;
`

const OrderList = styled.ul``

const Total = styled.div`
    display: flex;
    margin-bottom: 30px;
    & span:first-child {
        flex-grow: 1;
    }
`

const TotalPrice = styled.span`
    text-align: center;
    min-width: 65px;
    margin-left: 20px;
`

const Empty = styled.p`
    text-align: center;
`

