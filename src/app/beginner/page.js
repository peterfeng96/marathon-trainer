'use client'
import { useEffect, useState } from 'react';
import { beginner } from '../schedules';
import Table from '../Table';

export default function Beginner () {
    const [unit, setUnit] = useState('miles');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('unit')) setUnit(localStorage.getItem('unit'));
        else {
            localStorage.setItem('unit', 'miles');
            setUnit(localStorage.getItem('unit'));
        };
        setLoading(false);
      }, []);

    function unitChange() {
        unit === 'miles' ? setUnit('kms') : setUnit('miles');
    }
    
    return (
        <>
        <button onClick={() => unitChange()}>Change Unit</button>
        {!loading ? <Table regimen={beginner} unit={unit}/> : null}
        </>
    )
}