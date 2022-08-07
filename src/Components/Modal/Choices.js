import styled from "styled-components"

const Choices = ({ changeChoices, choice, openItem }) => {
    return(
        <>
            <h3>Выберите:</h3>
            <ChoicesWrap>
                {openItem.choices.map((item, i) => (
                    <ChoicesLabel key={i}>
                        <ChoicesRadio 
                            type='radio'
                            name='choices'
                            value={item}
                            checked={choice === item}
                            onChange={changeChoices}
                        />
                        {item}
                    </ChoicesLabel>
                ))}
            </ChoicesWrap>
        </>
    )
}

export default Choices

const ChoicesWrap = styled.div`
        column-count: 2;
        column-gap: 15px;
        max-width: 500px;
        margin: 0 auto;
`

const ChoicesLabel = styled.label`
    display: block;
    cursor: pointer;
`

const ChoicesRadio = styled.input`
    cursor: pointer;
    margin-right: 5px
`