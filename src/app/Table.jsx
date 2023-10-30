// import styles from './page.module.css';

// function Box ({ doneChart, changeDone, dailyData, week, day }) {
//     return (
//         <td className={`${styles.box} ${doneChart[week-1][day-1] === 1 ? styles.doneBox : ''} ${doneChart[week-1][day-1] === 2 ? styles.missedBox : ''}`} onClick={() => changeDone(week, day)}>
//         {dailyData}
//         </td>
//     )
// }

// function Row ({ weeklyData, unit, doneChart, changeDone }) {
//     return (
//         <tr className={styles.row}>
//             <th className={styles.sideHeader}>{weeklyData[0]}</th>
//             {weeklyData[1][unit].map((el, index) => <Box key={index} doneChart={doneChart} changeDone={changeDone} dailyData={el} week={weeklyData[0]} day={index+1}/>)}
//         </tr>
//     )
// }
// export default function Table ({ regimen, unit, doneChart, changeDone }) {
//     const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
//     return (
//         <table className={styles.table}>
//             <thead className={styles.thead}>
//                 <tr className={styles.row}>
//                     <th>Week</th>
//                     {days.map(day => <th key={day}>{day}</th>)}
//                 </tr>
//             </thead>
//             <tbody>
//                 {Object.entries(regimen).map((el, index) => <Row key={index} weeklyData={el} unit={unit} doneChart={doneChart} changeDone={changeDone}/>)}
//             </tbody>
//         </table>
//     )
// }

import styles from "./page.module.css";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  week,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
) {
  return [week, monday, tuesday, wednesday, thursday, friday, saturday, sunday];
}

export default function BasicTable({ regimen, unit, doneChart, changeDone }) {
  const header = [
    "Week",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const rows = Object.entries(regimen).map((el) => {
    let week = el[0];
    let days = el[1][unit];
    return createData(week, ...days);
  });
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {header.map((heading) => (
              <TableCell align="center" key={heading}>
                {heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={row[0]}>
              {row.map((day, j) => {
                if (j == 0) {
                  return (
                    <TableCell
                      component="th"
                      scope="row"
                      align="center"
                      key={day[0]}
                    >
                      {day[0]}
                    </TableCell>
                  );
                } else {
                  return (
                    <TableCell
                      align="center"
                      key={day[0] + j}
                      className={`${
                        doneChart[i][j] === 1 ? styles.doneBox : ""
                      } ${doneChart[i][j] === 2 ? styles.missedBox : ""}`}
                      onClick={() => changeDone(i + 1, j + 1)}
                    >
                      {day}
                    </TableCell>
                  );
                }
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
