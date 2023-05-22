import React from "react";
import styles from "./LandingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.container}>
      <h1>LANDING PAGE</h1>
      <h2>deberás crear una página de inicio o bienvenida con:</h2>
      <ul>
        <li>Alguna imagende fondo representativa al proyecto</li>
        <li>Botón para ingresar a la home page.</li>
      </ul>
    </div>
  );
}

export default LandingPage;
