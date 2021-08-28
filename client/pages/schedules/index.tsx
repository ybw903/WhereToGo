import TourCalender from "../../src/components/TourCalender"
import styles from '../../styles/Schedules.module.css';
export default function Schedules() {
    return (
        <div>
            <div className={styles.schedules__header}>
                <div>
                    <h1>여행 달력</h1>
                </div>
                <div>
                    <select>
                        <option>월 간격으로 보기</option>
                        <option>2주 간격으로 보기</option>
                        <option>1주 간격으로 보기</option>
                    </select>
                </div>
            </div>
            <TourCalender></TourCalender>
        </div>
    )
}