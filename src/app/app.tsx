import { IgrButton, IgrIconButton, IgrNavbar } from '@infragistics/igniteui-react';
import { Outlet, useNavigate } from 'react-router-dom';
import styles from './app.module.css';
import createClassTransformer from './style-utils';
import '/src/app/base-view-styles.css';

export default function App() {
  const classes = createClassTransformer(styles);
  const navigate = useNavigate();

  return (
    <>
      <div className={classes("column-layout master-view-container")}>
        <IgrNavbar className={classes("navbar")}>
          <div style={{ display: 'contents' }} slot="start">
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")}>
                <span>menu</span>
              </span>
            </IgrIconButton>
          </div>
          <div className={classes("row-layout group")}>
            <h6 className={classes("h6")}>
              <span>We DEVLiver</span>
            </h6>
          </div>
          <div style={{ display: 'contents' }} slot="end">
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")}>
                <span>search</span>
              </span>
            </IgrIconButton>
          </div>
          <div style={{ display: 'contents' }} slot="end">
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")}>
                <span>favorite</span>
              </span>
            </IgrIconButton>
          </div>
          <div style={{ display: 'contents' }} slot="end">
            <IgrIconButton variant="flat">
              <span className={classes("material-icons")}>
                <span>more_vert</span>
              </span>
            </IgrIconButton>
          </div>
          <div style={{ display: 'contents' }} slot="end">
            <IgrButton type="button" onClick={() => navigate(`/child-view2`)} className={classes("login-button")}>
              <span>Login</span>
            </IgrButton>
          </div>
        </IgrNavbar>
        <div className={classes("view-container")}>
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
}
