'use client'
import { useEffect, useState } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { intermediate } from '../schedules';
import styles from '../page.module.css';
import Table from '../Table';

export default function Intermediate () {
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
        if (localStorage.getItem('intermediateDoneChart')) {
            setDoneChart(JSON.parse(localStorage.getItem('intermediateDoneChart')));
        }
        else {
            localStorage.setItem('intermediateDoneChart', JSON.stringify(doneChart));
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
        localStorage.setItem('intermediateDoneChart', JSON.stringify(newDoneChart));
        setDoneChart(newDoneChart);
    }
    
    return (
        <main className={styles.programMain}>
            <div className={styles.title}>Intermediate Marathon Program</div>
            <div className={styles.description}>
                <p>This 18-week intermediate training program is for those that either have previous running training or have already run a marathon before. This program is somewhat of a continuation to the beginner training program. It will train you to level up your running and improve your personal best marathon time.</p>
                <br></br>
                <p>The main differences between this program and the beginner program is the increase of intensity and mileage per week. As an intermediate runner, the amount of rest days have been decreased to just 1. Shorter runs keep the body ready and prepped to continue running while not tiring it out too much. Some Saturdays have also been changed to running at an increased pace.</p>
                <br></br>
                <p><b>Rest:</b> The body needs to rest to allow it to recover. Without proper recovery, your body will not be able to perform to its fullest abilities. The rest days are strategically placed before a full 3 days of training as well as right before the week&#39;s long run.</p>
                <br></br>
                <p><b>Cross-Training:</b> This is a way for our body to train slightly different body parts and stay active while still allowing our body to recover. This includes walking, swimming, cycling, or any other aerobic exercist such as a sport.</p>
                <br></br>
                <p><b>Pace:</b> Run at an increased pace and push your body! Set a goal marathon time and make sure you are running at that pace.</p>
                <br></br>
                <p>Click on each day on the chart once to complete that day. Click on it again if you missed that day. It&#39;s OK!</p>
            </div>
            {!loading ? 
            <ButtonGroup className={styles.buttonGroup} variant='outlined'>
                <Button onClick={() => unitChange('miles')} style={{backgroundColor: unit==='miles' ? '#90caf9' : 'transparent'}}>Miles</Button>
                <Button onClick={() => unitChange('kms')} style={{backgroundColor: unit==='kms' ? '#90caf9' : 'transparent'}}>KMs</Button>
            </ButtonGroup> : null
            }
            {!loading ? <Table regimen={intermediate} unit={unit} doneChart={doneChart} changeDone={changeDone}/> : null}
        </main>
    )
}