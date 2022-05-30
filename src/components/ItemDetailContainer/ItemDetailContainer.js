import Container from '@mui/material/Container';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

const ItemDetailContainer = ({onClick}) => {
    
    return (
        
        <Container className='container' >
            <ItemDetail onClick={onClick} />
        </Container>
    )
}

export default ItemDetailContainer;