import Image from 'next/image'
import Section from 'components/Section'
import styles from './GameSection.module.scss'

const GameSection = () => (
  <>
    <Section classNames={styles.root}>
      <h2>PSN</h2>
      <div className={styles.images}>
        <a href="https://psnprofiles.com/ShKim_niceb5y">
          <Image
            src="https://card.psnprofiles.com/2/ShKim_niceb5y.png"
            width={500}
            height={165}
          />
        </a>
      </div>
    </Section>
    <Section classNames={styles.root}>
      <h2>MLTD</h2>
      <div className={styles.images}>
        <Image src="/mltd.jpg" width={948} height={588} />
      </div>
    </Section>
  </>
)

export default GameSection
