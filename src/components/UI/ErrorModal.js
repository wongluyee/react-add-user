import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={styles.content}>
        <p>{props.message}</p>
      </div>
      <footer className={styles.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  const backdropRoot = document.getElementById("backdrop-root");
  const modalOverlay = document.getElementById("overlay-root");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        backdropRoot
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        modalOverlay
      )}
    </Fragment>
  );
};

export default ErrorModal;
