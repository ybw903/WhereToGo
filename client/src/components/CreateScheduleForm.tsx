import { useState } from 'react';
import styles from '../../styles/CreateScheduleForm.module.css';
import CreateSchedulesModal from './CreateSchedulesModal';

export default function CreateScheduleForm() {
    const [modalOpen,  setModalOpen] = useState<boolean>(false);

    const mdoalButtonClickHander = () => {
        setModalOpen(!modalOpen);
    }

    return (
        <div className={styles.scheduleForm}>
            <div className={styles.schedules__cell__s}></div>
            <div className={styles.schedules__cell__m}>
                <div>
                    <select>
                        <option>00:00</option>
                        <option>01:00</option>
                        <option>02:00</option>
                        <option>03:00</option>
                        <option>04:00</option>
                        <option>05:00</option>
                        <option>06:00</option>
                        <option>07:00</option>
                        <option>08:00</option>
                        <option>09:00</option>
                        <option>10:00</option>
                        <option>11:00</option>
                    </select>
                    ~
                    <select>
                        <option>00:00</option>
                        <option>01:00</option>
                        <option>02:00</option>
                        <option>03:00</option>
                        <option>04:00</option>
                        <option>05:00</option>
                        <option>06:00</option>
                        <option>07:00</option>
                        <option>08:00</option>
                        <option>09:00</option>
                        <option>10:00</option>
                        <option>11:00</option>
                    </select>
                </div>
            </div>
            <div className={styles.schedules__cell__m}>
                <div  onClick={mdoalButtonClickHander}>여행장소</div>
            </div>
            <div className={styles.schedules__cell__m}>
                <input className={styles.input} type="number" placeholder="0"/>
            </div>
            <div className={styles.schedules__cell__s}>
                <input className={styles.input} type="text" placeholder="메모"/>
            </div>
            <div className={styles.schedules__cell__s}>
                <input  type="submit" value="저장"></input>
            </div>
            {modalOpen? <CreateSchedulesModal modalOpen={modalOpen} closeModal={mdoalButtonClickHander}/> :''}
        </div>
    )

}
