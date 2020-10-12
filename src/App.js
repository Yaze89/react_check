import React from 'react'

function App() {





  return (
    <div className="login-container d-flex align-items-center justify-content-center">
        <form className="login-form text-center">
            <h1 className="mn-5 font-weight-light text-uppercase">Login</h1>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="username"/>
            </div>
            <div className="form-group">
               <input type="password" className="form-control" placeholder="Password"/>
            </div>
            <div className="forgot-link d-flex align-items-center justify-content-between"> 
                 <div className= "form-check">
                   <input type="checkbox" className="form-check-input" id="remember"/>
                   <label for ="remember">Remember Password</label>
                 </div>
                 <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="btn mt-5 btn-primary btn-block">Login</button>
            <p className="mt-3 font-weight-normal"> Don't have an account <a href ="#">Register Now</a></p>
        </form>
    </div>
  );
}

export default App;
