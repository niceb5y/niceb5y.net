import styles from './SectionContainer.module.scss'

const SectionContainer = ({ children }) => (
  <div className={styles.root}>{children}</div>
)

export default SectionContainer
