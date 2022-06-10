
import { Item } from '../Item/Item'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './ItemList.css';


const ItemList = ({itemProps}) => {

    return (
        <>
        <Container className='container' >
            <Grid container justifyContent="center" spacing={2} className='grid_container'> 
                {
                    itemProps.map( ({title, price, img, id}, index) => {
                        return (
                            <Grid item md={3} key={index}>
                                <Item index={index} id={id} title={title} price={price} img={img} />
                            </Grid>
                        )
                    })
                }
            </Grid>
    </Container>
    </>)
    }


export default ItemList;