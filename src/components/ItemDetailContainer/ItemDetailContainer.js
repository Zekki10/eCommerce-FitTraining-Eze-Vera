import Container from '@mui/material/Container';
import { ItemDetail } from '../ItemDetail/ItemDetail';

const ItemDetailContainer = (props) => {
    
    return (
        
        <Container style={{height:'80vh',padding: '0 0 0 0' }} className='Detail_container' >
            <ItemDetail index={props.index} />
        </Container>
    )
}

export default ItemDetailContainer;