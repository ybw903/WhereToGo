import { ScheduleInfo } from "../type";
import styles from '../../styles/ScheduleRow.module.css';

interface Iprops {
    scheduleInfo: ScheduleInfo
}
export default function ScheduleRow({scheduleInfo}: Iprops) {
    return (
        <div className={styles.schedules__row}>
            <div className={styles.schedules__cell__s}>{scheduleInfo.id}</div>
            <div className={styles.schedules__cell__m}>{scheduleInfo.startTime} - {scheduleInfo.endTime}</div>
            <div className={styles.schedules__cell__m}>{scheduleInfo.place}</div>
            <div className={styles.schedules__cell__m}>{scheduleInfo.fee}</div>
            <div className={styles.schedules__cell__s}>{scheduleInfo.memo}</div>
        </div>
    )

}