import './Login.css';

export default function Login() {
  return(
    <div className="container">
      <div className="login-container">
        <div className="card">
          <div className="card-header">
            Login
          </div>
          <div className='card-body'>
            Enter a valid email id and a password
          </div>
          <div className='row input-div'>
            <label className='col-4'>Email</label>
            <input className='col-6' type="text"></input>
          </div>
          <div className='row input-div'>
            <label className='col-4'>Password</label>
            <input className='col-6' type="text"></input>
          </div>
          <div className='input-div text-center'>
          <button type="button" class="btn btn-dark">Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}