import styles from '../../styles/CreateSchedulesModal.module.css';

type IProps =  {
    modalOpen: boolean
    closeModal: ()=>void
}

export default function CreateSchedulesModal ({modalOpen, closeModal}: IProps) {
    return (
        <>
                <div className={modalOpen?styles.modal__overlay:`${styles.modal__overlay} ${styles.no__display}`}></div>
                <div className={modalOpen?styles.modal__wrapper:`${styles.modal__wrapper} ${styles.no__display}`}>
                    <div className={styles.modal__inner}>
                        <div className={styles.modal__form}>
                            <div className={styles.modal__form__header}>
                                <div className={styles.modal__form__input__header}>일정추가</div>
                                <div className={styles.modal__form__input__header} onClick={closeModal}>X</div>
                            </div>
                            <div className={styles.modal__form__input}>
                                <div className={styles.modal__form__input__header}>일정 기간</div>
                                    <div className={styles.modal__form__input}>
                                    <div className={styles.modal__form__timeSelect__wrapper}>
                                        <div>시작 시간</div>
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
                                        <div>종료 시간</div>
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
                            </div>
                            <div className={styles.modal__form__input}>
                                <div className={styles.modal__form__input__header}>여행 장소</div>
                                <input type="text" className={styles.input} placeholder="여행장소"/>
                            </div>
                            <div className={styles.modal__form__input}>
                                <div className={styles.modal__form__input__header}>예상 여비</div>
                                <input type="number" className={styles.input} placeholder="0"/>
                            </div>
                            <div className={styles.modal__form__input}>
                                <div className={styles.modal__form__input__header}>메모</div>
                                <input type="text" className={styles.input} placeholder="메모"/>
                            </div>
                            <div className={styles.modal__form__input}>
                                <input type="submit" className={styles.modal__form__submit__button} value="저장"></input>
                            </div>
                        </div>
                    </div>
                </div>
        </>

    );
}