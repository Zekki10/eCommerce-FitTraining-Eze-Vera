import Container from '@mui/material/Container';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({title, items}) => {
    
    return (
        <>
            <Container>
                <h2 className='page_title'>{title}</h2>
                <Container className='container' >
                    <ItemList itemProps={items} />
                </Container>
            </Container>
        </>
        )
}

export default ItemListContainer;