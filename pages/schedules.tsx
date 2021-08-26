import TourCalender from "../src/components/TourCalender";

export default function Schedules() {
    return (
        <div>
            <div>
                <h1>여행 달력</h1>
                <select>
                    <option>월 간격으로 보기</option>
                    <option>2주 간격으로 보기</option>
                    <option>1주 간격으로 보기</option>
                </select>
            </div>
            <TourCalender></TourCalender>
        </div>
    )
}