function Box ( {dailyData} ) {
    return (
        <th>
        {dailyData}
        </th>
    )
}

function Row ({ weeklyData, unit }) {
    return (
        <tr>
            <th>{weeklyData[0]}</th>
            {weeklyData[1][unit].map((el, index) => <Box key={index} dailyData={el}/>)}
        </tr>
    )
}
export default function Table ({ regimen, unit }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Week</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                </tr>
            </thead>
            <tbody>
                {Object.entries(regimen).map((el, index) => <Row key={index} weeklyData={el} unit={unit}/>)}
            </tbody>
        </table>
    )
}