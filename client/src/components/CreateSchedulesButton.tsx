import Link from 'next/link';
export default function CreateSchedulesButton() {
    return(
        <div>
            <Link href="/schedules/create">
                <div>일정추가</div>
            </Link>
      </div>
    )
}