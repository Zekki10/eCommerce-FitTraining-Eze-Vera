import Container from '@mui/material/Container';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({title, items}) => {
    
    return (
        <>
            <Container maxWidth={"xl"} disableGutters={false} sx={{padding:0, margin:0}}>
                <img src="./banner_market.png" alt='banner_market' className='banner_img' />
                <Container className='container' >
                    <ItemList itemProps={items} />
                </Container>
            </Container>
        </>
        )
}

export default ItemListContainer;