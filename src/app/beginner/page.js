'use client'
import { useEffect, useState } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { beginner } from '../schedules';
import styles from '../page.module.css';
import Table from '../Table';

export default function Beginner () {
    const [unit, setUnit] = useState('miles');
    const [loading, setLoading] = useState(true);
    const [doneChart, setDoneChart] = useState(new Array(18).fill(new Array(7).fill(0)));

    useEffect(() => {
        if (localStorage.getItem('unit')) {
            setUnit(localStorage.getItem('unit'));
        }
        else {
            localStorage.setItem('unit', unit);
        };
        if (localStorage.getItem('beginnerDoneChart')) {
            setDoneChart(JSON.parse(localStorage.getItem('beginnerDoneChart')));
        }
        else {
            localStorage.setItem('beginnerDoneChart', JSON.stringify(doneChart));
        };
        setLoading(false);
      }, []);

    function unitChange(unit) {
        localStorage.setItem('unit', unit);
        setUnit(unit);
    }
    function changeDone (w, d) {
        const newDoneChart = JSON.parse(JSON.stringify(doneChart));
        newDoneChart[w-1][d-1] = (newDoneChart[w-1][d-1]+1) % 3;
        localStorage.setItem('beginnerDoneChart', JSON.stringify(newDoneChart));
        setDoneChart(newDoneChart);
    }
    
    return (
        <main className={styles.programMain}>
            <div className={styles.title}>Beginner Marathon Program</div>
            <div className={styles.description}>
                <p>This 18-week beginner training program is perfect for those that have minimal running training and no marathon experience. Running a marathon is not easy. It takes a lot of time and dedication to prepare yourself to run your first marathon. This program will gently ease you into a steady routine until you are ready to tackle the next challenge.</p>
                <br></br>
                <p>The main goal of each day is just to complete the amount of miles that are listed below. The pace at which the mileage must be completed in is up to each individual runner. Many will have to walk large portions of their training and that is OK. The goal is just to finish.</p>
                <br></br>
                <p><b>Rest:</b> The body needs to rest to allow it to recover. Without proper recovery, your body will not be able to perform to its fullest abilities. The rest days are strategically placed before a full 3 days of training as well as right before the week&#39;s long run.</p>
                <br></br>
                <p><b>Cross-Training:</b> This is a way for our body to train slightly different body parts and stay active while still allowing our body to recover. This includes walking, swimming, cycling, or any other aerobic exercist such as a sport.</p>
                <br></br>
                <p>Click on each day on the chart once to complete that day. Click on it again if you missed that day. It&#39;s OK!</p>
            </div>
            {!loading ? 
            <ButtonGroup className={styles.buttonGroup} variant='outlined'>
                <Button onClick={() => unitChange('miles')} style={{backgroundColor: unit==='miles' ? '#90caf9' : 'transparent'}}>Miles</Button>
                <Button onClick={() => unitChange('kms')} style={{backgroundColor: unit==='kms' ? '#90caf9' : 'transparent'}}>KMs</Button>
            </ButtonGroup> : null
            }
            {!loading ? <Table regimen={beginner} unit={unit} doneChart={doneChart} changeDone={changeDone}/> : null}
        </main>
    )
}