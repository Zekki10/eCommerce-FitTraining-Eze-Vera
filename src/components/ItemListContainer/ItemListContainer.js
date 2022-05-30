import Container from '@mui/material/Container';
import './ItemListContainer.css';
import React, { useState } from 'react'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = ({title}) => {
    
    return (
        <>
            <Container>
                <h2 className='page_title'>{title}</h2>
                <Container className='container' >
                    <ItemList />
                </Container>
            </Container>
        </>
        )
}

export default ItemListContainer;