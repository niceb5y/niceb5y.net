import Image from 'next/image'
import Section from 'components/Section'
import styles from './ProfileSection.module.scss'

const ProfileSection = () => (
  <Section classNames={styles.root}>
    <Image
      src="/profile.jpg"
      alt="Picture of the author"
      width={100}
      height={100}
      className={styles.round}
    />
    <h1 className={styles.profile}>김승호</h1>
    <p>학생과 직장인 사이 그 어딘가.</p>
  </Section>
)

export default ProfileSection
