import Section from 'components/Section'
import Links from 'data/Links'
import Contacts from 'data/Contacts'
import styles from './LinkSection.module.scss'

const LinkSection = () => (
  <Section classNames={styles.root}>
    <h2>Links</h2>
    <ul>
      {Links.map((contact) => (
        <li key={contact.url}>
          <a href={contact.url}>
            <img src={`/${contact.icon}.svg`} /> {contact.title}
          </a>
        </li>
      ))}
    </ul>
    <h2>Contacts</h2>
    <ul>
      {Contacts.map((contact) => (
        <li key={contact.id}>
          <a href={contact.link}>
            <img src={`/${contact.id}.svg`} /> {contact.title}
          </a>
        </li>
      ))}
    </ul>
  </Section>
)

export default LinkSection
