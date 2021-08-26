import { TourData } from "../type";
import styles from '../../styles/TourCard.module.css'

export default function TourCard(tourData: TourData) {
    return (
        <div className={styles.tour__card}>
            <div className={styles.tour__cardTitle}>{tourData.title}</div>
            <div className={styles.tour__cardContent}>{tourData.content}</div>
        </div>
    );
}