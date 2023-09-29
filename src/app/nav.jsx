'use client'
import Link from 'next/link';
import Image from 'next/image';
import { AppBar, Container, Toolbar, Button, Typography } from '@mui/material';
import styles from './page.module.css'

export default function Nav () {
    // const pages = ['Home', 'Beginner', 'Intermediate', 'Advanced']

    return (
        <AppBar position='fixed' style={{backgroundColor:'#90caf9'}}>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>
                    <Typography variant='text' color='common.white'>
                        <Link href='/'>
                            <Button className={styles.navButton} color='inherit' style={{fontSize: '2rem', fontWeight: 900, margin: '0 2vw 0 0'}}>
                                <Image src='/icon.png' width={48} height={48} alt='icon'></Image>
                                Marathon Trainer
                            </Button>
                        </Link>
                        <Link href='/beginner'>
                            <Button className={styles.navButton} color='inherit' style={{fontSize: '1.3rem', fontWeight: 900}}>Beginner</Button>
                        </Link>
                        <Link href='/intermediate'>
                            <Button className={styles.navButton} color='inherit' style={{fontSize: '1.3rem', fontWeight: 900}}>Intermediate</Button>
                        </Link>
                        <Link href='/advanced'>
                            <Button className={styles.navButton} color='inherit' style={{fontSize: '1.3rem', fontWeight: 900}}>Advanced</Button>
                        </Link>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    )
}