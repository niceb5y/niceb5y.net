import Section from 'components/Section'
import styles from './HelloSection.module.scss'

const HelloSection = () => (
  <Section classNames={styles.root}>
    <p className={styles.lead}>Hello.</p>
    <p className={styles.subtext}>안녕하세요.</p>
  </Section>
)

export default HelloSection
