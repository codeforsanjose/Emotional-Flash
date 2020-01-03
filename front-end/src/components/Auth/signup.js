import React, { Component } from 'react';
import { firebaseApp } from '../../firebase';
import { NavLink } from 'react-router-dom';
import { auth, saveUser } from './auth';

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpError: '',
      isLoading: false
    };
  }

  signUp = event => {
    event.preventDefault();
    if (this.refs.password.value !== this.refs.verifyPassword.value) {
      const signUpError = 'Passwords not Matching!';
      this.setState({ signUpError });
      console.log(signUpError);
      return;
    }
    this.setState({ isLoading: true });
    auth(this.refs.email.value, this.refs.password.value)
      .catch(error => {
        console.log(error);
        this.setState({ signUpError: error.message });
      })
      .then(() => {
        this.setState({ isLoading: false });
      });
  };

  renderSignUpSection = () => {
    const { signUpError, isLoading } = this.state;

    return (
      <section class="hero is-fullheight" id="login-hero">
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="column is-4 is-offset-4">
              <h3 class="title has-text-grey">Sign Up</h3>
              <div class="box" id="login-box">
                <form onSubmit={this.signUp}>
                  <div class="field">
                    <div class="control">
                      <input
                        class="input is-medium"
                        type="email"
                        placeholder="Your Email"
                        ref="email"
                        required
                      />
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                      <input
                        class="input is-medium"
                        type="password"
                        placeholder="Your Password"
                        ref="password"
                        required
                      />
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                      <input
                        class="input is-medium"
                        type="password"
                        placeholder="Retype Password"
                        ref="verifyPassword"
                        required
                      />
                    </div>
                  </div>

                  <div class="field">
                    <div class="control">
                      <label class="checkbox">
                        <input type="checkbox" class="checkbox mr-3" required />
                        <span>
                          I agree to the <a href="#">terms and conditions</a>
                        </span>
                      </label>
                    </div>
                  </div>

                  {signUpError && <p id="error-message">{signUpError}</p>}

                  <button
                    class={`button is-block is-success is-medium is-fullwidth ${
                      isLoading ? 'is-loading' : ''
                    }`}
                  >
                    Signup
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  render() {
    return <div>{this.renderSignUpSection()}</div>;
  }
}
