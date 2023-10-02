import Image from 'next/image'
import Link from 'next/link';
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.intro}>
        <Image className={styles.images} src='/photo1.jpeg' alt='Marathon Photo' width={640} height={360}></Image>
        <div>
          <h2>Welcome to Marathon Trainer</h2>
          <p>Are you ready to embark on a journey that will push your limits, test your endurance, and make you feel the exhilaration of crossing the finish line? Welcome to Marathon Trainer, your ultimate destination for getting you ready for your next marathon.</p>
          <h3>What Are Marathons?</h3>
          <p>Marathons are a celebration of human endurance and determination. These iconic races cover a distance of 26.2 miles (42.195 kilometers) and have a rich history dating back to ancient Greece. Today, marathons are held all over the world, attracting runners of all levels, from beginners to elite athletes. Whether you&#39;re aiming to complete your first marathon or chasing a personal record, we&#39;re here to guide you every step of the way.</p>
        </div>
      </div>
      <div className={styles.programs}>
        <div>
          <h3>Our Training Programs</h3>
          <p>At Marathon Trainer, we offer three meticulously crafted training programs designed to prepare you for the marathon of your dreams. Whether this is your first time preparing for a marathon or you&#39;re looking to set a new personal record time, we have the training program for you.</p>
          <p><Link href='/beginner'><b>Beginner&#39;s Journey:</b></Link> If you&#39;re new to marathons, our beginner&#39;s program will help you build a strong foundation, gradually increasing your mileage, and providing essential tips for race day.</p>
          <p><Link href='/intermediate'><b>Intermediate Program:</b></Link> You&#39;ve just completed your first marathon, but it was a struggle. Continue your training journey get to the next level.</p>
          <p><Link href='/advanced'><b>Advanced Training:</b></Link> For experienced runners looking to crush their previous records, our advanced training program offers advanced techniques, interval training, and expert guidance to help you reach your peak performance.</p>
        </div>
        <Image className={styles.images} src='./photo2.jpeg' alt='Finish Line Photo' width={640} height={360}></Image>
      </div>
    </main>
  )
}
