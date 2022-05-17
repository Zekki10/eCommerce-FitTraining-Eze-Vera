
import { CardItem } from '../Card/Card'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';



const CardList = ({title}) => {
    return (
        <>
        <h2 className='page_title'>{title}</h2>
        <Container className='container' >
            <Grid container justifyContent="center" spacing={2} className='grid_container'>
                <Grid item md={3}>
                    <CardItem title='Kit - Pesas plasticas' price={2500} img='pesas_clases.jpg' />
                </Grid>
                <Grid item md={3}>
                    <CardItem title='Kit - Pesas metalicas' price={5000} img='kit_mancuernas.jpg' />
                </Grid>
                <Grid item md={3}>
                    <CardItem title='Colchoneta MIT' price={1700} img='colchoneta_mancuerna.jpg'/>
                </Grid>
                <Grid item md={3}>
                    <CardItem title='Kit - Kettlebells' price={10000} img='Kettlebells-Recubiertas.jpg' />
                </Grid>
            </Grid>
    </Container>
    </>)
}

export default CardList;