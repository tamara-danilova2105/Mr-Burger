export const getTotalPriceItem = order => {
    const countTopping = order.topping && order.topping.filter(item => item.checked).length
    const priceToppng = (order.price * 0.1) * countTopping
    return (order.price + priceToppng) * order.count 
}

export const formatCurrency = value => value.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})