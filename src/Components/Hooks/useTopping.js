import { useState } from "react"

const getToppings = toppings => toppings.map(item => ({
    name: item,
    checked: false,
}))

export const useTopping = (openItem) => {
    const [toppings, setToppings] = useState(getToppings(openItem.toppings))

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