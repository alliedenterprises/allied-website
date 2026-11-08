import { company } from '@/content/company'
import { socialNetwork } from './SocialIcons'
import styles from './TopBar.module.css'

/** Navy contact strip joined to the top of the header card (phone, email, social links); folds away on scroll. */
export function TopBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <ul className={styles.contact} aria-label="Contact">
          <li>
            <a href={company.helpline.href}>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6a1 1 0 0 0-1 .2l-2.2 2.2a15 15 0 0 1-6.6-6.6l2.2-2.2a1 1 0 0 0 .3-1A11.4 11.4 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1 17 17 0 0 0 17 17 1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1z" />
              </svg>
              <span className={styles.srOnly}>Call </span>
              {company.helpline.display}
            </a>
          </li>
          <li>
            <a href={`mailto:${company.email}`}>
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.2-8 5-8-5V6l8 5 8-5z" />
              </svg>
              <span className={styles.srOnly}>Email </span>
              {company.email}
            </a>
          </li>
        </ul>

        <ul className={styles.social} aria-label="Social media">
          {company.social.map((url) => {
            const network = socialNetwork(url)
            return (
              <li key={url}>
                <a href={url} target="_blank" rel="noopener noreferrer" aria-label={`${company.shortName} on ${network.name}`}>
                  {network.icon}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
