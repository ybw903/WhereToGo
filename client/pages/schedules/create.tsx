import { useState } from 'react';
import CreateScheduleForm from '../../src/components/CreateScheduleForm';
import ScheduleRow from '../../src/components/ScheduleRow';
import styles from '../../styles/CreateSchedules.module.css';

interface scheduleForm {

}

export default function CreateSchedule() {
    const [schedulesData, setScheduleData] = useState([{'id': 0, 'startTime':'04:00', 'endTime' : '06:00', 'expense' : 0, 'place':{'place_name':'여기'}, 'memo' : '메모'}])
    const [formOpen, setFormOpen] = useState<boolean>(false);


    const formOpenHandler = () => {
        setFormOpen(true);
    }

    const addScheduleHandler = (form:any) => {
        setScheduleData([...schedulesData, form]);
        setFormOpen(false);
    }

    return(
        <div className={styles.create__Schedules}>
            <div className={styles.create__Schedues__header}>
                <div className={styles.create__Schedules__cell__s}>No.</div>
                <div className={styles.create__Schedules__cell__m}>여행시간</div>
                <div className={styles.create__Schedules__cell__m}>여행장소</div>
                <div className={styles.create__Schedules__cell__m}>예상여비</div>
                <div className={styles.create__Schedules__cell__s}>메모</div>
                <div className={styles.create__Schedules__cell__s}>변경</div>
            </div>
            {schedulesData.map((scheduleData,idx) => <ScheduleRow idx={idx} scheduleInfo={scheduleData} key={scheduleData.id}/>)}
            {formOpen? <CreateScheduleForm addScheduleHandler={addScheduleHandler}/> : '' }
            <div onClick={formOpenHandler}>
                일정추가
            </div>
        </div>
    )
}