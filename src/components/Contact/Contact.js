// import material UI form components
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Grid from "@material-ui/core/Grid";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact me</h2>

      {/* material UI form with name, email and description */}
      <form className='contact__form' noValidate autoComplete='off'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              id='name'
              label='Name'
              variant='outlined'
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id='email'
              label='Email'
              variant='outlined'
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id='description'
              label='Description'
              variant='outlined'
              fullWidth
              required
              multiline
              rows={4}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant='contained'
              color='primary'
              type='submit'
              fullWidth
              className='contact__button'
            >
              Send
            </Button>
          </Grid>
        </Grid>
      </form>


      {/* contact me button */}

      {/* <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          Email me
        </span>
      </a> */}
    </section>
  )
}

export default Contact
