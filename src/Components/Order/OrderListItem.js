import styled from 'styled-components'
import trash from '../../images/trash.svg'
import { formatCurrency, getTotalPriceItem } from '../Function/secondaryFunction'

const OrderListItem = ({ order }) => {
    return(
        <OrderItemSyled>
            <ItemName>{order.name}</ItemName>
            <span> {order.count} шт.</span>
            <ItemPrice>{formatCurrency(getTotalPriceItem(order))}</ItemPrice>
            <TrashButton/>
        </OrderItemSyled>
    )
}

export default OrderListItem

const OrderItemSyled = styled.li`
    display: flex;
    margin: 15px 0;
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

