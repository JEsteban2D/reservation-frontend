"use client";
import React, { FormEvent } from "react";
import styles from "./ReservationDatePicker.module.css";

const ReservationDatePicker = () => {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    //   const response = await fetch('/api/submit', {
    //     method: 'POST',
    //     body: formData,
    //   })

    //   // Handle response if necessary
    //   const data = await response.json()
    //   // ...

    const formDataEntries = Object.fromEntries(formData.entries());
    console.log("Datos del formulario:", formDataEntries);
  }

  return (
    <div className={styles.datePicker}>
      <form onSubmit={onSubmit}>
        <div className={styles.formInputs}>
          <label htmlFor="">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className={styles.formInputs}>
          <label htmlFor="">Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className={styles.formInputs}>
          <label htmlFor="">Date-Time Picker</label>
          <input type="datetime-local" id="datetime" name="datetime" />
        </div>
        <button type="submit">Sumit</button>
      </form>
    </div>
  );
};

export default ReservationDatePicker;
