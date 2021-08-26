import styles from '../../styles/TourCalendar.module.css';
export default function TourCalender() {
    const days:string[] = ['일','월','화','수','목','금','토'];

    const getCalendarData = () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() - 1;

        const calendarData = [];
        const thisMonthStartDay = new Date(year, month, 1).getDay();
        const thisMonthEndDate = new Date(year, month+1, 0).getDate();
        const lastMonthEndDate = new Date(year, month, 0).getDate();
        const lastMonthStartDate = lastMonthEndDate - thisMonthStartDay +1;

        //저번달 날짜 추가
        for (let i = 0; i < thisMonthStartDay; i++) {
            const date = i + lastMonthStartDate;
            calendarData.push(date);
        }

        //이번달 날짜 추가
        for (let i = 0; i<thisMonthEndDate; i++) {
            const date = i + 1;
            calendarData.push(date); 
        }
        const neededCellCnt = 42 - calendarData.length;
        //다음달 날짜 추가
        for(let i = 0; i< neededCellCnt; i++) {
            const date = i + 1;
            calendarData.push(date);
        }

        return calendarData;
    }
    return(
        <div className={styles.tour_calendar}>
                {days.map((day,idx) => <div key={idx}>{day}</div>)}
                {getCalendarData().map((calendarData,idx) => <div key={idx}>{calendarData}</div>)}
        </div>
    )
}