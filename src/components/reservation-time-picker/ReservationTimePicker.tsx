import React from 'react';
import styles from './ReservationTimePicker.module.css';

const ReservationTimePicker = () => {
  return (
    <div className={styles.timePicker}>
        <form action="">
            <label htmlFor="">Date-Time Picker</label>
            <input type="datetime-local"/>
        </form>
    </div>
  )
}

export default ReservationTimePicker