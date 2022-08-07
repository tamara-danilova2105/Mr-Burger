import { useState } from "react"

export const useChoices = () => {
    const [choice, setChoices] = useState()

    const changeChoices = e => {
        setChoices(e.target.value)
    }

    return {choice, changeChoices}
}