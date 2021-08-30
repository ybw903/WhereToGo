import { useState } from 'react';
import CreateSchedulesModal from '../../src/components/CreateSchedulesModal';
import ScheduleRow from '../../src/components/ScheduleRow';
import styles from '../../styles/CreateSchedules.module.css';
export default function CreateSchedule() {

    const schedulesData = [{'id': 0, 'startTime':'04:00', 'endTime' : '06:00', 'fee' : 0, 'place':'여기', 'memo' : '메모'}]

    const [modalOpen,  setModalOpen] = useState<boolean>(false);

    const mdoalButtonClickHander = () => {
        setModalOpen(!modalOpen);
    }

    return(
        <div className={styles.create__Schedules}>
            <div className={styles.create__Schedues__header}>
                <div>No.</div>
                <div>여행시간</div>
                <div>여행장소</div>
                <div>예상여비</div>
                <div>메모</div>
            </div>
            {schedulesData.map(scheduleData => <ScheduleRow scheduleInfo={scheduleData}/>)}
            <div onClick={mdoalButtonClickHander}>
                일정추가
            </div>
            <CreateSchedulesModal modalOpen={modalOpen} closeModal={mdoalButtonClickHander}/>
        </div>
    )
}