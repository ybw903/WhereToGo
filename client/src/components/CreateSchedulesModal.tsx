import styles from '../../styles/CreateSchedulesModal.module.css';
import KakaoMap from './KakaoMap';

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
                                <div className={styles.modal__form__input__header}>여행장소</div>
                                <div className={styles.modal__form__input__header} onClick={closeModal}>X</div>
                            </div>
                            <KakaoMap/>
                            <div className={styles.modal__form__input}>
                                <input type="submit" className={styles.modal__form__submit__button} value="저장"></input>
                            </div>
                        </div>
                    </div>
                </div>
        </>

    );
}