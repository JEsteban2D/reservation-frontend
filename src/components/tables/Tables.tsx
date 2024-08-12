import React from 'react'
import styles from './Tables.module.css';
import TablesDraw from '@/components/tables-draw/TablesDraw';

const Tables = () => {
  return (
    <div className={styles.tables}>
    <h2>Tables</h2>
    <div className={styles.tablesPosition}>
      
      <TablesDraw/>
      <TablesDraw/>
    </div>
    </div>
  )
}

export default Tables