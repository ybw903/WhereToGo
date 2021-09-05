import { ScheduleInfo } from "../type";
import styles from '../../styles/ScheduleRow.module.css';

interface Iprops {
    idx: number
    scheduleInfo: ScheduleInfo
}
export default function ScheduleRow({idx,scheduleInfo}: Iprops) {
    return (
        <div className={styles.schedules__row}>
            <div className={styles.schedules__cell__s}>{idx}</div>
            <div className={styles.schedules__cell__m}>{scheduleInfo.startTime} - {scheduleInfo.endTime}</div>
            <div className={styles.schedules__cell__m}>{scheduleInfo.place.place_name}</div>
            <div className={styles.schedules__cell__m}>{scheduleInfo.expense}</div>
            <div className={styles.schedules__cell__s}>{scheduleInfo.memo}</div>
            <div className={styles.schedules__cell__s}>삭제</div>
        </div>
    )

}