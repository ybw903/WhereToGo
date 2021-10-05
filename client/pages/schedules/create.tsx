import { useState } from 'react';
import CreateScheduleForm from '../../src/components/CreateScheduleForm';
import ScheduleRow from '../../src/components/ScheduleRow';
import { TourSchedule } from '../../src/type';
import styles from '../../styles/CreateSchedules.module.css';

export default function CreateSchedule() {
    const [name, setName] = useState<string>('여행');
    const [schedulesData, setScheduleData] = useState<any[]>([])
    const [formOpen, setFormOpen] = useState<boolean>(false);
    const [tour, setTour] = useState<TourSchedule>();
    const formOpenHandler = () => {
        setFormOpen(true);
    }

    const addScheduleHandler = (form:any) => {
        setScheduleData([...schedulesData, form]);
        setFormOpen(false);
    }

    const deleteScheduleHandler = (idx:number) => {
        const nextSchedulesData = [...schedulesData];
        nextSchedulesData.splice(idx,1);
        setScheduleData([...nextSchedulesData]);
    }

    const submitTour = async () => {
        setTour({...tour, name, tourScheduleDetails: schedulesData});
        const requestTour = async () => {
            const response = await fetch('/api/schedules',{
                method: 'POST',
                body: JSON.stringify({tour}),
                headers: {
                    'Content-Type' : 'application/json'
                }
            })
        }
        await requestTour();
    }

    return(
        <div className={styles.create__Schedules}>
            <div className={styles.create__Schedues__title_header}>
                <div>이름</div>
                <div className={styles.create__Schedues__Button} onClick={submitTour}>일정 저장</div>
            </div>
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