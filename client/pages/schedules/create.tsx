import { useState } from 'react';
import CreateSchedulesModal from '../../src/components/CreateSchedulesModal';
import styles from '../../styles/CreateSchedules.module.css';
export default function CreateSchedule() {

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
                <div>메모</div>
            </div>
            <div onClick={mdoalButtonClickHander}>
                일정추가
            </div>
            <CreateSchedulesModal modalOpen={modalOpen} closeModal={mdoalButtonClickHander}/>
        </div>
    )
}