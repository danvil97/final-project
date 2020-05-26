import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginSuccess, loginFailure } from '../../store/actions/login';
import './Auth.scss';
const mapStateToProps = (state) => {
  return { auth: state.auth };
};
const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (auth) => dispatch(loginSuccess(auth)),
    loginFailure: (auth) => dispatch(loginFailure(auth)),
  };
};

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      isLoading: false,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit(e) {
    const { email, password, firstName, lastName } = this.state;
    e.preventDefault();
    console.log(this.state);
    if (true) {
      this.props.loginSuccess({ email, password, firstName, lastName });
    } else {
      this.props.loginFailure();
    }
  }

  render() {
    //const { email, password, firstName, lastName, isLoading } = this.state;
    return (
      <div className='main container mt-2'>
        <div className='row justify-content-center align-items-center'>
          <div className='col-sm-6 auth'>
            <h3>Регистрация</h3>
            <form onSubmit={this.onSubmit}>
              <div className='form-group'>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Ваша почта *'
                  name='email'
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className='form-group'>
                <input
                  type='password'
                  className='form-control'
                  placeholder='Ваш Пароль *'
                  name='password'
                  onChange={this.onChange}
                  required
                />
              </div>
              <div className='form-row'>
                <div className='col'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Имя'
                    name='firstName'
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className='col'>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Фамилия'
                    name='lastName'
                    onChange={this.onChange}
                    required
                  />
                </div>
              </div>
              <button
                type='submit'
                className='btn btn-info mt-3 btn-block-576'
                disabled={false}
              >
                Зарегистрироваться
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);