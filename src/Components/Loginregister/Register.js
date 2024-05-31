import React from 'react'

const Register = () => {
  return (
    <>
      <div className="form-box login">
          <h2>Registration</h2>
          <form action="#"></form>
          <div className="input-box">
            <span className="icon"></span>
            <input type="username" required />
            <label> username</label>
          </div>
          <div className="input-box">
            <span className="icon"></span>
            <input type="email" required />
            <label> email</label>
          </div>

          <div className="input-box">
            <span className="icon"></span>
            <input type="Password" required />
            <label> Password</label>
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me
            </label>

            <a href="/">Forget Password?</a>
          </div>
          <button type="submit" className="btn">
            <> Login</>
          </button>
          <div className="login-register">
            <p>
              Don't have an account?
              <a href="/" className="regsiter-link">
                Register
              </a>
            </p>
          </div>
        </div>
    </>
  )
}

export default Register
