import * as React from 'react';
import Box from '@mui/material/Box';
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
import format from 'date-fns/format';
import { useForm } from 'react-hook-form'
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
    const { register, handleSubmit, formState : { errors } } = useForm()

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleSubmitForm = () => {
      // e.preventDefault()
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
      setSuccess(orderDoc.id)
      setDate(format(new Date(), "dd-MM-yyyy' 'HH:mm:ss"))
  }
  const finishOrder = () => {
    clear()
    navigate('/')
  }
  if (cartListItems.length <= 0) {
    return (
      <div className='div-message'>
        <p>Your cart is empty</p>
        <Link to="/market" >Shop now</Link>
      </div>
    )
  } else {
    return (
      <>
      <Box sx={{ flexGrow: 1, width:'100%', padding:'10px' }}>
        <TableContainer sx={{boxShadow:'none', width:'100%'}} component={Paper}>
          <Table className='table-container' sx={{ minWidth: 280, padding:0,margin:'0 0 2% 0' }} aria-label="spanning table">
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
          <Link className="link_buy" to='/cart'>Check out</Link>
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
                <h1>Thank you for your purchase!</h1>
                <span><strong>Your order number is: </strong>{success}, <strong>date: </strong>{date}</span>
                <span>We'll email you an order confirmation with details and tracking info.</span>
                <Button onClick={finishOrder}>Continue Shopping</Button>
              </div>
            ) : (
              <form className='form_modal' onSubmit={handleSubmit(handleSubmitForm)}>
                <label>Contact details:</label>
                <TextField name='name' {...register('name', {
                   required:true,
                   minLength:3,
                   pattern:/^[a-zA-ZÀ-ÿ\s]{1,40}$/
                   })} onBlur={handleChange} id="outlined-basic" label="Name" variant="outlined" />
                {errors.name?.type === 'required' && <small className='error_message'>This field is required</small>}
                {errors.name?.type === 'minLength' && <small className='error_message'>Your name must be between 3 and 12 characters long</small>}
                {errors.name?.type === 'pattern' && <small className='error_message'>It may contain only letters and spaces</small>}
                <TextField name='phone' type='number' {...register('phone', {
                  required:true,
                  pattern:/^\d{7,14}$/,
                  minLength:7,
                  })} onBlur={handleChange} id="outlined-basic" label="Phone" variant="outlined" />
                {errors.phone?.type === 'required' && <small className='error_message'>This field is required</small>}
                {errors.phone?.type === 'minLength' && <small className='error_message'>Your phone must be longer than 3 characters</small>}
                {errors.phone?.type === 'pattern' && <small className='error_message'>It may contain only numbers</small>}
                <TextField name='email' {...register('email', {
                  required: true,
                  pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                  })} onBlur={handleChange} id="outlined-basic" label="Email" variant="outlined" />
                {errors.email?.type === 'required' && <small className='error_message'>This field is required</small>}
                {errors.email?.type === 'pattern' && <small className='error_message'>Enter a valid email adress</small>}
                <Button variant="contained" type='submit' className='button_cart'>Buy</Button>        
              </form>
            )}
          </Modal>
        </div>
      </Box>
      </>
    )
  }
}