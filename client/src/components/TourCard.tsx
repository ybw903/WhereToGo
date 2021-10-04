import { TourSchedule } from "../type";
import styles from '../../styles/TourCard.module.css'

export default function TourCard(tourData: TourSchedule) {
    return (
        <div className={styles.tour__card}>
            <div className={styles.tour__cardTitle}>{tourData.name}</div>
        </div>
    );
}