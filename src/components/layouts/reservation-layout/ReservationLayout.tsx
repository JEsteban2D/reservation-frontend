import React from 'react';
import styles from './ReservationLayout.module.css';
import Banner from '@/components/banner/Banner';
import Tables from '@/components/tables/Tables';
import ReservationDatePicker from '@/components/reservation-date-picker/ReservationDatePicker';
// import ReservationTimePicker from '@/components/reservation-time-picker/ReservationTimePicker';

const ReservationLayout = () => {
  return (
    <div className={styles.reservations}>
        <div className={styles.gridLeft}>
            <Banner/>
            <Tables/>
        </div>
        <div className={styles.gridRight}>
            <ReservationDatePicker/>
            {/* <ReservationTimePicker/>  */}
        </div>
    </div>
  )
}

export default ReservationLayout