import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
export default function Login() {
  return (
    <>
      <h1 className='mt-20'>Login</h1>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
        <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
        <Button variant='contained'>Submit  </Button>
      </FormControl>


      {/* TextField and Button */}
      {/* <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="filled-basic" label="Password" variant="filled" />
        <Button variant='contained'>Login</Button> */}


      {/* Input username and password with button Login */}
      {/* <label>Username</label>
        <input type='text'></input>
        <label>Password</label>
        <input type='password'>
        </input>
        <Button variant="contained">Login</Button> */}

    </>
  )
}
