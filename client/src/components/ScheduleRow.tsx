import { ScheduleInfo } from "../type";
import styles from '../../styles/ScheduleRow.module.css';

interface Iprops {
    scheduleInfo: ScheduleInfo
}
export default function ScheduleRow({scheduleInfo}: Iprops) {
    return (
        <div className={styles.schedules__row}>
            <div>{scheduleInfo.id}</div>
            <div>{scheduleInfo.startTime} - {scheduleInfo.endTime}</div>
            <div>{scheduleInfo.place}</div>
            <div>{scheduleInfo.fee}</div>
            <div>{scheduleInfo.memo}</div>
        </div>
    )

}