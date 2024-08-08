import styles from "./page.module.css";
import ReservationLayout from '../components/layouts/reservation-layout/ReservationLayout';

export default function Home() {
  return (
    <main className={styles.main}>
      <ReservationLayout/>
    </main>
  );
}
