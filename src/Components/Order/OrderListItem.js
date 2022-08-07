import styled from 'styled-components'
import trash from '../../images/trash.svg'
import { formatCurrency, getTotalPriceItem } from '../Function/secondaryFunction'

const OrderListItem = ({ order }) => {

    const topping = order.topping.filter(item => item.checked)
        .map(item => item.name)
        .join(', ')
    console.log(topping);

    return(
        <OrderItemSyled>
            <ItemName>{order.name} {order.choice}</ItemName>
            <span> {order.count} шт.</span>
            <ItemPrice>{formatCurrency(getTotalPriceItem(order))}</ItemPrice>
            <TrashButton/>
            {topping && <Toppings>Допы: {topping}</Toppings>}
        </OrderItemSyled>
    )
}

export default OrderListItem

const OrderItemSyled = styled.li`
    display: flex;
    margin: 15px 0;
    flex-wrap: wrap;
`

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trash});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;
`

const ItemName = styled.span`
    flex-grow: 1;
`

const ItemPrice = styled.span`
    margin-left: 20px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`
const Toppings = styled.div`
    color: #9a9a9a;
    font-size: 14px;
    width: 100%;
`

