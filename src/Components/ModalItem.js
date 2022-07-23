import styled from "styled-components"

export const ModalItem = ({ openItem, setOpenItem }) => {

    const closeModel = (e) => {
        if(e.target.id === "overlay") {
            setOpenItem(null)
        }
    }

    if(!openItem) return null
    return(
        <Overlay id="overlay" onClick={closeModel}>
        <Modal>
            <Banner img={openItem.img}/>
            {openItem.name}
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
    margin-bottom: 20px;
`