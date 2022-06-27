import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useForm } from 'react-hook-form'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './Contact.css'


export const Contact = () => {
    const { register, handleSubmit, formState : { errors } } = useForm()
    const clickSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>  
            <img alt="portada_contact" src="./contact-us.png" className='banner_img' />
            <Box sx={{ flexGrow: 1, width:'90%', marginLeft:'5%', border:'1px solid #000', padding:'10px' }}>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <form onSubmit={handleSubmit(clickSubmit)} className='form_contact'>
                            <label>If you have questions about our products or are looking for further information, just contact us. We are looking forward to helping you.</label>
                            <TextField name='name' {...register('name', {
                            required:true,
                            minLength:3,
                            pattern:/^[a-zA-ZÀ-ÿ\s]{1,40}$/
                            })} id="outlined-basic" label="Name" variant="outlined" />
                            {errors.name?.type === 'required' && <small className='error_message'>This field is required</small>}
                            {errors.name?.type === 'minLength' && <small className='error_message'>Your name must be between 3 and 12 characters long</small>}
                            {errors.name?.type === 'pattern' && <small className='error_message'>It may contain only letters and spaces</small>}
                            <TextField name='phone' type='number' {...register('phone', {
                            required:true,
                            pattern:/^\d{7,14}$/,
                            minLength:7,
                            })}  id="outlined-basic" label="Phone" variant="outlined" />
                            {errors.phone?.type === 'required' && <small className='error_message'>This field is required</small>}
                            {errors.phone?.type === 'minLength' && <small className='error_message'>Your phone must be longer than 3 characters</small>}
                            {errors.phone?.type === 'pattern' && <small className='error_message'>It may contain only numbers</small>}
                            <TextField name='email' {...register('email', {
                            required: true,
                            pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
                            })} id="outlined-basic" label="Email" variant="outlined" />
                            {errors.email?.type === 'required' && <small className='error_message'>This field is required</small>}
                            {errors.email?.type === 'pattern' && <small className='error_message'>Enter a valid email adress</small>}
                            <TextField
                                id="outlined-basic"
                                name='Multiline'
                                label="Multiline"
                                multiline
                                rows={6}
                                variant="outlined"
                            />
                            <Button variant="contained" type='submit' className='button_cart'>Send</Button>        
                        </form>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24181.531426621892!2d-74.02485869181132!3d40.74681489999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ba849dd791%3A0xb6d5f3d7bdd27f11!2sBlink%20Fitness!5e0!3m2!1ses-419!2sar!4v1656353104310!5m2!1ses-419!2sar"
                            title="maps"
                            width="100%" 
                            height="100%"
                            style={{ border: 0, padding:'10%' }}
                            allowFullScreen={false} 
                            loading="lazy" 
                            >
                        </iframe>
                    </Grid>
                </Grid>
            </Box>
        </>
        
    )
}


