import { useState } from 'react';
import CreateScheduleForm from '../../src/components/CreateScheduleForm';
import ScheduleRow from '../../src/components/ScheduleRow';
import styles from '../../styles/CreateSchedules.module.css';

interface scheduleForm {

}

export default function CreateSchedule() {

    const schedulesData = [{'id': 0, 'startTime':'04:00', 'endTime' : '06:00', 'fee' : 0, 'place':'여기', 'memo' : '메모'}]

    const [scheduleForms, setScheduleForms] = useState<scheduleForm[]>([]);


    const addScheduleForms = () => {
        const newScheduleForm = {};
        setScheduleForms([...scheduleForms, newScheduleForm]);
    }

    return(
        <div className={styles.create__Schedules}>
            <div className={styles.create__Schedues__header}>
                <div className={styles.create__Schedules__cell__s}>No.</div>
                <div className={styles.create__Schedules__cell__m}>여행시간</div>
                <div className={styles.create__Schedules__cell__m}>여행장소</div>
                <div className={styles.create__Schedules__cell__m}>예상여비</div>
                <div className={styles.create__Schedules__cell__s}>메모</div>
            </div>
            {schedulesData.map(scheduleData => <ScheduleRow scheduleInfo={scheduleData} key={scheduleData.id}/>)}
            {scheduleForms.map(scheduleForm => <CreateScheduleForm/>)}
            <div onClick={addScheduleForms}>
                일정추가
            </div>
        </div>
    )
}