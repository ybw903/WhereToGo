import Link from 'next/link';
import styles from '../../styles/CreateSchedulesButton.module.css'
export default function CreateSchedulesButton() {
    return(
        <div>
            <Link href="/schedules/create">
                <div className={styles.create__scheduleButton}>+</div>
            </Link>
      </div>
    )
}