import Image from 'next/image'
import { Fragment } from 'react'

import styles from './BrandText.module.css'

/**
 * Official ZKTeco logo shown inline wherever "ZKTeco" appears in text.
 * The word itself stays in the HTML as visually-hidden text, so search engines,
 * screen readers and copy/paste still get "ZKTeco". The logo image has alt text too, but is aria-hidden so the
 * name is not read twice.
 * Light/dark versions swap with the site theme (only the visible one loads).
 * `onDark`: always use the white version (text on a dark photo or panel in both themes).
 */
export function ZKTeco({ onDark = false }: { onDark?: boolean }) {
  if (onDark) {
    return (
      <span className={styles.zkteco}>
        <span className={styles.srOnly}>ZKTeco</span>
        <Image
          src="/images/brand/zkteco-dark.svg"
          alt="ZKTeco logo"
          aria-hidden="true"
          width={2729}
          height={631}
          className={styles.logo}
        />
      </span>
    )
  }
  return (
    <span className={styles.zkteco}>
      <span className={styles.srOnly}>ZKTeco</span>
      <Image
        src="/images/brand/zkteco.svg"
        alt="ZKTeco logo"
        aria-hidden="true"
        width={2729}
        height={631}
        className={`${styles.logo} ${styles.light}`}
      />
      <Image
        src="/images/brand/zkteco-dark.svg"
        alt="ZKTeco logo"
        aria-hidden="true"
        width={2729}
        height={631}
        className={`${styles.logo} ${styles.dark}`}
      />
    </span>
  )
}

const BRAND = /ZKTeco/g

/**
 * Renders a plain string, replacing every "ZKTeco" with the ZKTeco logo.
 * Use for any visible copy that may mention the brand.
 */
export function BrandText({ text, onDark = false }: { text: string; onDark?: boolean }) {
  const parts = text.split(BRAND)
  if (parts.length === 1) return <>{text}</>
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part}
          {i < parts.length - 1 && <ZKTeco onDark={onDark} />}
        </Fragment>
      ))}
    </>
  )
}
