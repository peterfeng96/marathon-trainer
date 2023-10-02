'use client'
import { useEffect, useState } from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { advanced } from '../schedules';
import styles from '../page.module.css';
import Table from '../Table';

export default function Advanced () {
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
        if (localStorage.getItem('advancedDoneChart')) {
            setDoneChart(JSON.parse(localStorage.getItem('advancedDoneChart')));
        }
        else {
            localStorage.setItem('advancedDoneChart', JSON.stringify(doneChart));
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
        localStorage.setItem('advancedDoneChart', JSON.stringify(newDoneChart));
        setDoneChart(newDoneChart);
    }
    
    return (
        <main className={styles.programMain}>
            <div className={styles.title}>Advanced Marathon Program</div>
            <div className={styles.description}>
                <p>This 18-week advanced training program is for those that have previous running training and have completed a number of marathon experience. The goal of this program is to push yourself to the limit and set a personal best at your next marathon.</p>
                <br></br>
                <p>The mileage each week has further increased over the intermediate training program. There are also some new exercises that will help with running faster as well as different marathon track conditions.</p>
                <br></br>
                <p><b>Rest:</b> The body needs to rest to allow it to recover. Without proper recovery, your body will not be able to perform to its fullest abilities. The rest days are strategically placed before a full 3 days of training as well as right before the week&#39;s long run.</p>
                <br></br>
                <p><b>Cross-Training:</b> This is a way for our body to train slightly different body parts and stay active while still allowing our body to recover. This includes walking, swimming, cycling, or any other aerobic exercist such as a sport.</p>
                <br></br>
                <p><b>Pace:</b> Run at an increased pace and push your body! Set a goal marathon time and make sure you are running at that pace.</p>
                <br></br>
                <p><b>Hill:</b> Marathons are rarely run entirely on a flat track/road. Those that have experienced a slightly more inclined run know how difficult it can be. That&#39;s why it is very important to train yourself to run at an incline.Find yourself a hill/slope that is about a quarter-mile long or 400m. Run up at a strong pace and then slowly jog down afterwards.</p>
                <br></br>
                <p><b>Tempo:</b> A tempo run is a moderate-high intensity training run. The speed at which you run should be slightly faster than when you are running for marathon pace. Start off the training a little slower and increase the speed at which you run every few minutes until you get to that tempo speed. Try to maintain this speed for 10-20 minutes and then finish with a slower pace.</p>
                <br></br>
                <p><b>800m:</b> This is the distance for interval training. This is likely the fastest and most intense training. Try to find a standard track that has a distance of 400 meters for the inner loop and run that twice. Pace yourself so that you can run then entire 800 meters without stopping, but at the fastest pace possible. Take a short rest by either slowly jogging or walking around the track once for 400 meters and repeat.</p>
                <br></br>
                <p>Click on each day on the chart once to complete that day. Click on it again if you missed that day. It&#39;s OK!</p>
            </div>
            {!loading ? 
            <ButtonGroup className={styles.buttonGroup} variant='outlined'>
                <Button onClick={() => unitChange('miles')} style={{backgroundColor: unit==='miles' ? '#90caf9' : 'transparent'}}>Miles</Button>
                <Button onClick={() => unitChange('kms')} style={{backgroundColor: unit==='kms' ? '#90caf9' : 'transparent'}}>KMs</Button>
            </ButtonGroup> : null
            }
            {!loading ? <Table regimen={advanced} unit={unit} doneChart={doneChart} changeDone={changeDone}/> : null}
        </main>
    )
}