import "../login.css";
import ActionButton from "./ActionButton";
import Socials from "./Socials";
import VideoBackground from "./VideoBackground";

const Login = () => {
  return (
    <div>
      <VideoBackground />
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="login-form bg-white rounded-3 p-4">
              <div className="text-center mb-5">
                <h1 className="pb-2">GPS</h1>
              </div>
              <Socials />
              <form id="loginForm">
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    required
                    className="form-control"
                  />
                </div>

                <div className="login-register">
                  <p>
                    Don't have an account?
                    <a href="/register"> Sign Up</a>
                  </p>
                </div>
                <ActionButton role="Sign In" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
