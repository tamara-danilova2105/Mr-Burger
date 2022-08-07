import { useState } from "react"

const getToppings = toppings => toppings.map(item => ({
    name: item,
    checked: false,
}))

export const useTopping = (openItem) => {

    const readyTopping = openItem.toppings 
    ? getToppings(openItem.toppings) : []

    const [toppings, setToppings] = useState(readyTopping)

    const checkToppings = index => {
        setToppings(toppings.map((item, i) => {
            const newItem = {...item}
            if(i === index) {
                newItem.checked = !newItem.checked
            }
            return newItem
        }))
    }
    return {toppings, checkToppings}
}