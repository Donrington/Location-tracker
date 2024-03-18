import "../login.css";
import ActionButton from "./ActionButton";
import Socials from "./Socials";
import VideoBackground from "./VideoBackground";

const Register = () => {
  return (
    <div>
      <VideoBackground />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="registration-form bg-white rounded-3 p-4">
              <div className="text-center mb-3">
                <h1 className="pb-2">GPS</h1>
              </div>
              <Socials />

              <form id="registrationForm">
                <div className="form-group">
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    required
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    required
                    className="form-control"
                  />
                </div>
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
                <div className="form-check remember-forget">
                  <input
                    type="checkbox"
                    id="agree"
                    required
                    className="form-check-input"
                  />
                  <label for="agree" className="form-check-label">
                    I agree to the Terms and Conditions
                  </label>
                </div>
                <div className="login-register">
                  <p>
                    Already have an account? <a href="login.html"> Log in</a>
                  </p>
                </div>
                <ActionButton role="Register" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
