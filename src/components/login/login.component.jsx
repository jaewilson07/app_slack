import React from 'react';

import { useStateValue } from '../../state/state-provider';
import { provider, auth } from '../../firestore/firbase-utils';

import './login.styles.scss';
import { Button } from '@material-ui/core';
import { actionTypes } from '../../state/reducer';

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = async (event) => {
    event.preventDefault();

    try {
      const result = await auth.signInWithPopup(provider);

      dispatch({
        type: actionTypes.SET_USER,
        payload: {
          userName: result.user.displayName,
          email: result.user.email,
          uid: result.user.uid,
          userImage: result.user.photoURL,
        },
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.mos.cms.futurecdn.net/SDDw7CnuoUGax6x9mTo7dd.jpg"
          alt=""
          className="login__logo"
        />
        <div>
          <h1>Sign in to My Clone</h1>
          <p>abandonedInLondon.slack.com</p>
        </div>
        <Button className="login__button_google" onClick={signIn}>
          Sign In With Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
