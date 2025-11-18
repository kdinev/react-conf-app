import { IgrButton, IgrCheckbox, IgrInput } from '@infragistics/igniteui-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './login-page.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function LoginPage() {
  const classes = createClassTransformer(styles);
  const navigate = useNavigate();
  const [value, setValue] = useState<string | undefined>();
  const [value1, setValue1] = useState<string | undefined>();

  return (
    <>
      <div className={classes("row-layout login-page-container")}>
        <div className={classes("row-layout login-form-container")}>
          <div className={classes("column-layout login-form")}>
            <h4 className={classes("content")}>
              <span>Login</span>
            </h4>
            <div className={classes("column-layout login-inputs")}>
              <IgrInput type="email" value={value ?? ""} label="Email address" required={true} outlined={true} onChange={(e) => setValue(e.detail)} className={classes("login-email")}>
                <p slot="value-missing">This field is required</p>
              </IgrInput>
              <IgrInput type="password" value={value1 ?? ""} label="Password" required={true} outlined={true} onChange={(e) => setValue1(e.detail)} className={classes("login-email")}>
                <p slot="value-missing">This field is required</p>
              </IgrInput>
              <div className={classes("row-layout login-options")}>
                <IgrCheckbox labelPosition="after" className={classes("login-remember-me")}>
                  <span>Remember me</span>
                </IgrCheckbox>
                <a className={classes("typography__body-2 login-forgot-password")}>
                  <span>Forgot your password?</span>
                </a>
              </div>
              <IgrButton type="button" className={classes("login-button")}>
                <span>Sign in</span>
              </IgrButton>
            </div>
            <div className={classes("row-layout login-no-account")}>
              <p className={classes("typography__body-2 content")}>
                <span>Don't have an account?</span>
              </p>
              <a onClick={() => navigate(`/register-page`)} className={classes("typography__body-2 login-create-account")}>
                <span>Create new account</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
