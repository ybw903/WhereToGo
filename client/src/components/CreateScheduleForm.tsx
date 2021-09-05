import React, { ChangeEventHandler, FormEvent, useState } from 'react';
import styles from '../../styles/CreateScheduleForm.module.css';
import CreateSchedulesModal from './CreateSchedulesModal';

interface Iprops {
    addScheduleHandler: (form: any) =>void
}

export default function CreateScheduleForm({ addScheduleHandler}:Iprops) {
    const [modalOpen,  setModalOpen] = useState<boolean>(false);
    const [place, setPlace] = useState<any>(null);
    const mdoalButtonClickHander = () => {
        setModalOpen(!modalOpen);
    }

    const [expense, setExpense] = useState<number>(0);
    const [memo, setMemo] = useState<string>('');
    const [startTime, setStartTime] = useState<string>('00:00');
    const [endTime, setEndTime] = useState<string>('00:00');

    const expenseChangeHandler = (e:FormEvent<HTMLInputElement>) => {
        setExpense(parseInt(e.currentTarget.value));
    }
    const memoChangeHandler = (e:FormEvent<HTMLInputElement>) => {
        setMemo(e.currentTarget.value);
    }

    const startTimeChangeHandler = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setStartTime(e.target.value);
    }

    const endTimeChangeHandler = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setEndTime(e.target.value);
    }

    const saveButtonHandler = (e:React.MouseEvent<HTMLInputElement>) => {
        const form = {startTime:startTime, endTime:endTime, place:place, expense:expense, memo: memo};
        addScheduleHandler(form);
    }

    return (
        <div className={styles.scheduleForm}>
            <div className={styles.schedules__cell__s}></div>
            <div className={styles.schedules__cell__m}>
                <div>
                    <div >
                        시작
                        <select onChange={startTimeChangeHandler} value={startTime}>
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
                    <div>
                        종료
                        <select onChange={endTimeChangeHandler} value={endTime}>
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
            </div>
            <div className={styles.schedules__cell__m}>
                <div  onClick={mdoalButtonClickHander}>{place?place.place_name.substr(0,5):'여행장소'} </div>
            </div>
            <div className={styles.schedules__cell__m}>
                <input className={styles.input} type="number" value={expense} placeholder="0" 
                    onChange={expenseChangeHandler}/>
            </div>
            <div className={styles.schedules__cell__s}>
                <input className={styles.input} type="text" value={memo} placeholder="메모"
                    onChange={memoChangeHandler}/>
            </div>
            <div className={styles.schedules__cell__s}>
                <input  type="button" value="저장" onClick={saveButtonHandler}></input>
            </div>
            {modalOpen? <CreateSchedulesModal modalOpen={modalOpen} closeModal={mdoalButtonClickHander} setPlace={setPlace}/> :''}
        </div>
    )

}
