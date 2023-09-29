import styles from './page.module.css';

function Box ({ doneChart, changeDone, dailyData, week, day }) {
    return (
        <td className={`${styles.box} ${doneChart[week-1][day-1] === 1 ? styles.doneBox : ''} ${doneChart[week-1][day-1] === 2 ? styles.missedBox : ''}`} onClick={() => changeDone(week, day)}>
        {dailyData}
        </td>
    )
}

function Row ({ weeklyData, unit, doneChart, changeDone }) {
    return (
        <tr className={styles.row}>
            <th className={styles.sideHeader}>{weeklyData[0]}</th>
            {weeklyData[1][unit].map((el, index) => <Box key={index} doneChart={doneChart} changeDone={changeDone} dailyData={el} week={weeklyData[0]} day={index+1}/>)}
        </tr>
    )
}
export default function Table ({ regimen, unit, doneChart, changeDone }) {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return (
        <table className={styles.table}>
            <thead className={styles.thead}>
                <tr className={styles.row}>
                    <th>Week</th>
                    {days.map(day => <th key={day}>{day}</th>)}
                </tr>
            </thead>
            <tbody>
                {Object.entries(regimen).map((el, index) => <Row key={index} weeklyData={el} unit={unit} doneChart={doneChart} changeDone={changeDone}/>)}
            </tbody>
        </table>
    )
}