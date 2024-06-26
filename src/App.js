import "./App.css";
import Register from "./Components/Loginregister/Register";
import { IoClose } from "react-icons/io5";

function App() {
  return (
    <div className="body">
      <header>
        <h1 class="logo">logo</h1>
        <navbar class="navigation">
          <a href="Home"> Home</a>
          <a href="About">About</a>
          <a href="Service">Service</a>
          <a href="contact">Contact</a>
          <button class="btnLogin-popup">Login</button>
        </navbar>
      </header>
      <div className="wrapper">
        <IoClose />
        <div className="form-box login">
          <h2>Login</h2>
          <form action="#"></form>
          <div className="input-box">
            <span className="icon"></span>
            <input type="email" required />
            <label> Email</label>
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

        <Register />
      </div>
    </div>
  );
}

export default App;
