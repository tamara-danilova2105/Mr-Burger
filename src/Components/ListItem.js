import styled from "styled-components"

export const ListItem = ({ itemList }) => (
    <List>
        {itemList.map(item => (
            <Item key={item.id}>
                {item.name}
            </Item>
        ))}
    </List>
)

const List = styled.ul`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`

const Item = styled.li`
    width: 400px;
    height: 155px;
`