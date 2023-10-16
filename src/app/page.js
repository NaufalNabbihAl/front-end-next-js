import Image from 'next/image'

import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
export default function Login() {
  return (
    <>
      <h1 className='mt-20'>HomePage</h1>
      <form>
        {/* <labe>Username</labe>
        <input type='text'></input>
        <label>Password</label>
        <input type='password'>
        </input>
        <input type='submit' value={"Login"}></input> */}
        <TextField id="outlined-basic" label="Username" variant="outlined" />
        <TextField id="filled-basic" label="Password" variant="outlined" />
        <Button variant="contained">Submit</Button>
      </form>
    </>
  )
}
