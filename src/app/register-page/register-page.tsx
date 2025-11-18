import { IgrButton, IgrInput } from '@infragistics/igniteui-react';
import { useState } from 'react';
import styles from './register-page.module.css';
import createClassTransformer from '../style-utils';
import '/src/app/base-view-styles.css';

export default function RegisterPage() {
  const classes = createClassTransformer(styles);
  const [value, setValue] = useState<string | undefined>();
  const [value1, setValue1] = useState<string | undefined>();
  const [value2, setValue2] = useState<string | undefined>();

  return (
    <>
      <div className={classes("row-layout register-page-container")}>
        <div className={classes("row-layout registration-form-container")}>
          <div className={classes("column-layout registration-form")}>
            <h4 className={classes("registration-title")}>
              <span>Register</span>
            </h4>
            <div className={classes("column-layout registration-inputs")}>
              <IgrInput type="email" value={value ?? ""} label="Email address" required={true} outlined={true} onChange={(e) => setValue(e.detail)} className={classes("registration-email")}>
                <p slot="value-missing">This field is required</p>
              </IgrInput>
              <IgrInput type="password" value={value1 ?? ""} label="Password" required={true} outlined={true} onChange={(e) => setValue1(e.detail)} className={classes("registration-email")}>
                <p slot="value-missing">This field is required</p>
              </IgrInput>
              <IgrInput type="password" value={value2 ?? ""} label="Repeat password" required={true} outlined={true} onChange={(e) => setValue2(e.detail)} className={classes("registration-email")}>
                <p slot="value-missing">This field is required</p>
              </IgrInput>
              <IgrButton type="button" className={classes("registration-button")}>
                <span>Register</span>
              </IgrButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
