import React, { ChangeEventHandler, FormEvent, useState } from 'react';
import styles from '../../styles/CreateScheduleForm.module.css';
import { datetimeTranseToString } from '../utils/time_helper';
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
    const [startTime, setStartTime] = useState(datetimeTranseToString(new Date()));
    const [endTime, setEndTime] = useState(datetimeTranseToString(new Date()));

    const expenseChangeHandler = (e:FormEvent<HTMLInputElement>) => {
        setExpense(parseInt(e.currentTarget.value));
    }
    const memoChangeHandler = (e:FormEvent<HTMLInputElement>) => {
        setMemo(e.currentTarget.value);
    }

    const startTimeChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setStartTime(e.target.value);
    }

    const endTimeChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
        setEndTime(e.target.value);
    }

    const saveButtonHandler = (e:React.MouseEvent<HTMLInputElement>) => {
        if(place === null) return;
        if(startTime>endTime) return;
        const form = {startTime: startTime, endTime:endTime, place:place, expense:expense, memo: memo};
        addScheduleHandler(form);
    }

    return (
        <div className={styles.scheduleForm}>
            <header>
                <h3>새 일정</h3>
            </header>
            <div className={styles.inputWrapper}>
                <label>시작</label>
                <input type="datetime-local" value={startTime} onChange={startTimeChangeHandler}/>
            </div>
            <div className={styles.inputWrapper}>
                <label>종료</label>
                <input type="datetime-local" value={endTime} onChange={endTimeChangeHandler}/>
            </div>
            <div className={styles.inputWrapper}>
                <div className={styles.input}  onClick={mdoalButtonClickHander}>{place?place.place_name.substring(0,5):'여행장소'} </div>
            </div>
            <div className={styles.inputWrapper}>
                <input className={styles.input} type="number" value={expense} placeholder="0" 
                    onChange={expenseChangeHandler}/>
            </div>
            <div className={styles.inputWrapper}>
                <input className={styles.input} type="text" value={memo} placeholder="메모"
                    onChange={memoChangeHandler}/>
            </div>
            <div className={styles.inputWrapper}>
                <input  className={styles.saveButton} type="button" value="저장" onClick={saveButtonHandler}></input>
            </div>
            {modalOpen? <CreateSchedulesModal modalOpen={modalOpen} closeModal={mdoalButtonClickHander} setPlace={setPlace}/> :''}
        </div>
    )

}
