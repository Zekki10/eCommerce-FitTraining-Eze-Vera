import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useContext, useState } from 'react';
import CartContext from '../../context/cartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';
import { addDoc, collection } from 'firebase/firestore'
import db from '../../utils/firebaseConfig';
import { useNavigate } from "react-router-dom";
import format from 'date-fns/format'

import './Cart.css'





export const Cart = () => {

    const { cartListItems, removeItem, clear, totalPrice } = useContext(CartContext)
    const [open, setOpen] = useState(false);
    const [formValue, setFormValue] = useState({
      name:'',
      phone:'',
      email:''
    })
    const [order, setOrder] = useState({
      buyer: {},
      items: [],
      total: 0
    })
    const [success, setSuccess] = useState()
    const [date, setDate] = useState(new Date())
    const navigate = useNavigate()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmit = (e) => {
      e.preventDefault()
      setDate(new Date())
      setOrder({
        ...order, 
        items: cartListItems.map( item => {
          return {
              id: item.id,
              title: item.title,
              price: item.price,
              qty: item.qty,
              date: date
          }
        } ), 
        buyer: formValue,
        total:totalPrice })
      saveData({
        ...order, 
        items: cartListItems.map( item => {
          return {
              id: item.id,
              title: item.title,
              price: item.price,
              qty: item.qty,
              date: date
          }
        } ), 
      buyer: formValue,
      total:totalPrice })
    }
    const handleChange = (e) => {
      setFormValue({...formValue, [e.target.name]: e.target.value})
    }
    const saveData = async (newOrder) => {
      const orderFirebase = collection(db, 'orders')
      const orderDoc = await addDoc(orderFirebase, newOrder)
      console.log("orden generada: ", orderDoc.id)
      setSuccess(orderDoc.id)
      setDate(orderDoc.date)
  }
  const finishOrder = () => {
    clear()
    navigate('/')
  }
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
        <TableContainer className='main-table-container' sx={{boxShadow:'none'}} component={Paper}>
          <Table className='table-container' sx={{ minWidth: 280, maxWidth:'80%', padding:0,margin:'0 0 2% 0' }} aria-label="spanning table">
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
        <Button variant="contained" onClick={handleOpen} className='button_cart'>
          <Link className="link_buy" to='/cart' >Terminar compra</Link>
        </Button>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            {success ? (
              <div className='message_container'>          
                <h1>Su compra se completo con exito</h1>
                <span><strong>Nro de orden: </strong>{success}, <strong>fecha: </strong>{format(new Date(), "yyyy-MM-dd'T'HH:mm:ss")}</span>
                <Button onClick={finishOrder}>Volver al inicio</Button>
              </div>
            ) : (
              <form className='form_modal' onSubmit={handleSubmit}>
                <label>Ingrese sus datos personales:</label>
                <TextField name='name' onChange={handleChange} id="outlined-basic" label="Name" variant="outlined" />
                <TextField name='phone' onChange={handleChange} id="outlined-basic" label="Phone" variant="outlined" />
                <TextField name='email' onChange={handleChange} id="outlined-basic" label="Email" variant="outlined" />
                <Button variant="contained" type='submit' className='button_cart'>comprar</Button>        
              </form>
            )

            }
          </Modal>
        </div>
      </>
    )
  }
}