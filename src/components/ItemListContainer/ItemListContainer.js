
import { Item } from '../Item/Item'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import './ItemListContainer.css';
import ItemList from '../ItemList/ItemList'
import { useState } from 'react';

const ItemListContainer = ({title}) => {
    
    return (
        <>
        <h2 className='page_title'>{title}</h2>
        <Container className='container' >
            <ItemList />
        </Container>
    </>)
}

export default ItemListContainer;