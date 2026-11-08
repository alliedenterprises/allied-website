import Image from 'next/image'

import { company } from '@/content/company'
import styles from './Logo.module.css'

/**
 * Light + dark logo in a fixed-ratio box. The parent sets the height;
 * CSS shows one image per theme so switching never shifts the layout.
 * Default lazy loading means only the visible logo is downloaded.
 */
export function Logo() {
  return (
    <span className={styles.box}>
      <Image
        src="/images/allied-logo.svg"
        alt={company.shortName}
        width={693}
        height={297}
        className={`${styles.img} ${styles.light}`}
      />
      <Image
        src="/images/allied-logo-dark.svg"
        alt={company.shortName}
        width={693}
        height={297}
        className={`${styles.img} ${styles.dark}`}
      />
    </span>
  )
}
