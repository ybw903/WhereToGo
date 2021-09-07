import { useState } from 'react';
import CreateScheduleForm from '../../src/components/CreateScheduleForm';
import ScheduleRow from '../../src/components/ScheduleRow';
import styles from '../../styles/CreateSchedules.module.css';
import Link from 'next/link';
interface scheduleForm {

}

export default function CreateSchedule() {
    const [schedulesData, setScheduleData] = useState<any[]>([])
    const [formOpen, setFormOpen] = useState<boolean>(false);

    const formOpenHandler = () => {
        setFormOpen(true);
    }

    const addScheduleHandler = (form:any) => {
        console.log(form);
        setScheduleData([...schedulesData, form]);
        setFormOpen(false);
    }

    const deleteScheduleHandler = (idx:number) => {
        const nextSchedulesData = [...schedulesData];
        nextSchedulesData.splice(idx,1);
        setScheduleData([...nextSchedulesData]);
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
            {schedulesData.map((scheduleData,idx) => <ScheduleRow  key={idx} idx={idx} scheduleInfo={scheduleData} deleteScheduleHandler={deleteScheduleHandler}/>)}
            {formOpen? <CreateScheduleForm addScheduleHandler={addScheduleHandler}/> : '' }
 
            <div className={styles.addButton} onClick={formOpenHandler}>
                +
            </div>
        </div>
    )
}