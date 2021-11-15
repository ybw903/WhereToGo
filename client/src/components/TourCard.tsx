import { TourSchedule } from "../type";
import styles from '../../styles/TourCard.module.css'
import Link from 'next/link';
export default function TourCard(tourData: TourSchedule) {
    return (
        <Link href={`/schedules/${tourData.id}`}>
            <div className={styles.tour__card}>
                <div className={styles.tour__cardTitle}>{tourData.name}</div>
            </div>
        </Link>

    );
}