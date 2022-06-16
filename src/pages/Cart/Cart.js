import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext } from 'react';
import CartContext from '../../context/cartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import './Cart.css'





export const Cart = () => {
    const { cartListItems, removeItem, clear, totalPrice } = useContext(CartContext)

    if (cartListItems.length <= 0) {
      return (
        <div className='div-message'>
          <p>No hay productos agregados al carrito</p>
          <Link to="/market" >Empezar a comprar</Link>
        </div>
      )
    } else {
      return (
        <>
          <TableContainer className='main-table-container' component={Paper}>
            <Table className='table-container' sx={{ minWidth: 700 }} aria-label="spanning table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={4}>
                    <h2>Details</h2>
                  </TableCell>
                  <TableCell align="right"><h2>Price</h2></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell colSpan={2}><h4>Product</h4></TableCell>
                  <TableCell align="right"><h4>Qty</h4></TableCell>
                  <TableCell align="right"><h4>Unit</h4></TableCell>
                  <TableCell align="right"><h4>Sum</h4></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartListItems.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell><img className='row_img' src={`${row.img}`} alt={`${row.img}`} /></TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell align="right">{row.qty}</TableCell>
                    <TableCell align="right">{`$${row.price}`}</TableCell>
                    <TableCell align="right">{`$${row.price*row.qty}`}</TableCell>
                    <TableCell align="right">{<button className='delete-button' onClick={() => removeItem(row.id)}><DeleteIcon /></button>}</TableCell>
                  </TableRow>
                ))}
    
                <TableRow sx={{ background: '#e3e4e5'}} >
                  <TableCell sx={{ fontWeight: '700'}} colSpan={4}>Total</TableCell>
                  <TableCell sx={{ fontWeight: '700'}} align="right">{`$${totalPrice}`}</TableCell>
                  <TableCell align="right">
                      {<button className='delete-all-button' onClick={clear}>Delete all</button>}           </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
          <Button variant="contained"  className='button_cart'>
            <Link className="link_buy" to='/cart'>Terminar compra</Link>
          </Button>
        </>

      )
    }
}