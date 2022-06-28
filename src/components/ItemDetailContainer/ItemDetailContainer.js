import Box from '@mui/material/Box';
import { ItemDetail } from '../ItemDetail/ItemDetail';

const ItemDetailContainer = (props) => {
    
    return (
        
        <Box sx={{ flexGrow: 1, width:'90%', marginLeft:'5%', padding:'10px' }}>
            <ItemDetail index={props.index} />
        </Box>
    )
}

export default ItemDetailContainer;