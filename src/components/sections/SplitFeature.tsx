import Image from 'next/image'
import Link from 'next/link'

import type { ContentBlock, PageImage } from '@/content/types'
import { BrandText } from '@/components/ui/BrandText'
import styles from './SplitFeature.module.css'

type SplitFeatureProps = {
  id: string
  heading: string
  /** Paragraphs, bullet lists and sub-headings, in order */
  text: readonly ContentBlock[]
  /** Without an image the heading sits on the left and the text on the right */
  image?: PageImage
  /** `photo`: framed, cropped to 3:2; `product`: cut-out product image shown whole, unframed;
   *  `document`: portrait certificate or document, shown whole at a limited height in a white frame */
  imageStyle?: 'photo' | 'product' | 'document'
  /** Which side the photo sits on (desktop); it always comes first on small screens */
  imageSide?: 'left' | 'right'
  links?: readonly { label: string; href: string }[]
  /** Tinted band behind the section, to separate it from its neighbours */
  tinted?: boolean
}

/** H2 + text beside a photo, or heading beside text when there is no photo. */
export function SplitFeature({
  id,
  heading,
  text,
  image,
  imageStyle = 'photo',
  imageSide = 'left',
  links = [],
  tinted = false,
}: SplitFeatureProps) {
  const classes = [
    styles.section,
    imageSide === 'right' && styles.reverse,
    tinted && styles.tinted,
    imageStyle === 'product' && styles.product,
    imageStyle === 'document' && styles.document,
    !image && styles.textOnly,
  ]
    .filter(Boolean)
    .join(' ')

  const headingEl = (
    <h2 id={id} className={styles.heading}>
      <BrandText text={heading} />
    </h2>
  )
  const body = (
    <>
      {text.map((block, i) => {
        if (typeof block === 'string') {
          return (
            <p key={i} className={styles.text}>
              <BrandText text={block} />
            </p>
          )
        }
        if ('subheading' in block) {
          return (
            <h3 key={i} className={styles.subheading}>
              {block.subheading}
            </h3>
          )
        }
        return (
          <ul key={i} className={styles.list}>
            {block.list.map((item) => (
              <li key={item}>
                <BrandText text={item} />
              </li>
            ))}
          </ul>
        )
      })}
      {links.length > 0 && (
        <ul className={styles.links}>
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={styles.link}>
                {link.label}
                <span aria-hidden="true"> →</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  )

  if (!image) {
    return (
      <section className={classes} aria-labelledby={id}>
        <div className={styles.aside}>{headingEl}</div>
        <div className={styles.copy}>{body}</div>
      </section>
    )
  }

  return (
    <section className={classes} aria-labelledby={id}>
      <div className={styles.media}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(max-width: 1000px) 92vw, 44vw"
          className={styles.image}
        />
      </div>

      <div className={styles.copy}>
        {headingEl}
        {body}
      </div>
    </section>
  )
}
