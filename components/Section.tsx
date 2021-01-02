import classnames from 'classnames'
import styles from './Section.module.scss'

const Section = ({ children, classNames = null }) => (
  <section className={classnames(styles.root, classNames)}>{children}</section>
)

export default Section
