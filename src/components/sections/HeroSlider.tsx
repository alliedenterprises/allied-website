'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'

import type { BannerSlide, SlideFeature } from '@/content/home'
import styles from './HeroSlider.module.css'
import { BrandText } from '@/components/ui/BrandText'

type HeroSliderProps = {
  slides: BannerSlide[]
  /** Accessible name for the carousel region */
  label: string
  intervalMs?: number
}

/**
 * Hero carousel built from real HTML (crawlable headings, text and links)
 * plus transparent product images, over a shared decorative background.
 *
 * - Infinite loop without duplicate DOM: every slide is positioned relative
 *   to the current one (-1 = previous, 0 = current, 1 = next …). A slide
 *   only animates when it moves one step; slides that wrap around jump
 *   off-screen, so the carousel always moves forward after the last slide.
 * - Auto-rotation pauses only for the pause button and keyboard focus
 *   (WCAG 2.2.2), not on hover/clicks (the hero is full-width).
 * - "Reduce motion": slides change instantly (CSS disables transitions).
 * - Performance: only the first slide's image is in the server HTML (it is the page's LCP image).
 *   The other images are added once the page has finished loading, so they do not compete with it
 *   for bandwidth on phones; a same-size placeholder holds their space (no layout shift).
 *   Autoplay starts only after that, so a slide never appears without its image.
 */
export function HeroSlider({ slides, label, intervalMs = 3000 }: HeroSliderProps) {
  const count = slides.length
  // `from` is kept until the next navigation, so re-renders never restart an animation
  const [nav, setNav] = useState({ index: 0, from: 0 })
  const [paused, setPaused] = useState(false)
  const [keyboardFocus, setKeyboardFocus] = useState(false)
  const [loadAll, setLoadAll] = useState(false)
  const touchStartX = useRef<number | null>(null)
  const { index, from } = nav

  useEffect(() => {
    const onLoad = () => setLoadAll(true)
    // client-side navigation back to the homepage: the window has already loaded
    if (document.readyState === 'complete') {
      const id = window.setTimeout(onLoad, 0)
      return () => window.clearTimeout(id)
    }
    window.addEventListener('load', onLoad, { once: true })
    return () => window.removeEventListener('load', onLoad)
  }, [])

  // manual navigation before the page has loaded still shows the chosen slide's image
  const goTo = useCallback(
    (i: number) => {
      setLoadAll(true)
      setNav((n) => ({ index: ((i % count) + count) % count, from: n.index }))
    },
    [count],
  )
  const next = useCallback(() => {
    setLoadAll(true)
    setNav((n) => ({ index: (n.index + 1) % count, from: n.index }))
  }, [count])
  const prev = useCallback(() => {
    setLoadAll(true)
    setNav((n) => ({ index: (n.index - 1 + count) % count, from: n.index }))
  }, [count])

  const autoplay = count > 1 && loadAll && !paused && !keyboardFocus

  // Timer restarts on every slide change; ticks are skipped while the tab is hidden
  useEffect(() => {
    if (!autoplay) return
    const id = window.setInterval(() => {
      if (document.visibilityState === 'visible') next()
    }, intervalMs)
    return () => window.clearInterval(id)
  }, [autoplay, intervalMs, next, index])

  if (count === 0) return null

  // position of slide i when slide `current` is shown: -1 … count-2
  const relOf = (i: number, current: number) => {
    let r = (((i - current) % count) + count) % count
    if (r > count - 2) r -= count
    return r
  }

  return (
    <section
      className={styles.hero}
      aria-roledescription="carousel"
      aria-label={label}
      onFocus={(e) => {
        if (e.target.matches(':focus-visible')) setKeyboardFocus(true)
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setKeyboardFocus(false)
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') next()
        if (e.key === 'ArrowLeft') prev()
      }}
    >
      <HeroBackground />

      {/* ZKTeco brand badge — fixed top-right, visible on every slide */}
      <div className={styles.brandBar}>
        <div className={styles.brandInner}>
          <span className={styles.brandBadge}>
            <Image
              src="/images/brand/zkteco.svg"
              alt="ZKTeco"
              width={2729}
              height={631}
              loading="eager"
              className={`${styles.brandLogo} ${styles.brandLight}`}
            />
            <Image
              src="/images/brand/zkteco-dark.svg"
              alt="ZKTeco"
              width={2729}
              height={631}
              className={`${styles.brandLogo} ${styles.brandDark}`}
            />
          </span>
        </div>
      </div>

      <div
        className={styles.stage}
        aria-live={autoplay ? 'off' : 'polite'}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0]?.clientX ?? null
        }}
        onTouchEnd={(e) => {
          const start = touchStartX.current
          const end = e.changedTouches[0]?.clientX
          touchStartX.current = null
          if (start == null || end == null) return
          const dx = end - start
          if (Math.abs(dx) > 40) (dx < 0 ? next : prev)()
        }}
      >
        {slides.map((slide, i) => {
          const rel = relOf(i, index)
          const prevRel = relOf(i, from)
          const active = rel === 0
          const animate = Math.abs(rel - prevRel) === 1
          return (
            <div
              key={slide.label}
              className={styles.slide}
              style={{
                transform: `translateX(${rel * 100}%)`,
                ...(animate ? null : { transition: 'none' }),
              }}
              data-active={active ? 'true' : undefined}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${slide.label}`}
              aria-hidden={!active}
              inert={!active}
            >
              <Slide slide={slide} priority={i === 0} showImage={i === 0 || loadAll} />
            </div>
          )
        })}

        {count > 1 && (
          <>
            <button type="button" className={`${styles.arrow} ${styles.prev}`} onClick={prev} aria-label="Previous slide">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button type="button" className={`${styles.arrow} ${styles.next}`} onClick={next} aria-label="Next slide">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div className={styles.controls}>
          <button
            type="button"
            className={styles.pause}
            onClick={() => setPaused((p) => !p)}
            aria-label={paused ? 'Start automatic slide show' : 'Pause automatic slide show'}
          >
            {paused ? (
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M7 5h4v14H7zM13 5h4v14h-4z" />
              </svg>
            )}
          </button>
          <div className={styles.dots} role="group" aria-label="Choose slide">
            {slides.map((slide, i) => (
              <button
                key={slide.label}
                type="button"
                className={styles.dot}
                aria-label={`Slide ${i + 1}: ${slide.label}`}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}

/* ---------------------------------------------------------------- */

function Slide({ slide, priority, showImage }: { slide: BannerSlide; priority: boolean; showImage: boolean }) {
  return (
    <div className={styles.inner}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowBar} aria-hidden="true" />
          <BrandText text={slide.eyebrow} />
          {slide.badge && <span className={styles.badge}>{slide.badge}</span>}
        </p>
        {/* <p>, not a heading: the page's H1 comes after the banner, so the outline must not start with
            five slide headings (SEO audit 2026-11-09). Looks the same; styled by class. */}
        <p className={styles.title}>
          <BrandText text={slide.title} />
          {slide.highlight && (
            <>
              {' '}
              <span className={styles.highlight}>{slide.highlight}</span>
            </>
          )}
        </p>
        <p className={styles.subtitle}>
          <BrandText text={slide.subtitle} />
        </p>

        <Features items={slide.features} variant={slide.featureStyle} />

        <div className={styles.actions}>
          <Link href={slide.cta.href} className={styles.primary}>
            {slide.cta.label}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" aria-hidden="true">
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </Link>
          {slide.secondary && (
            <Link href={slide.secondary.href} className={styles.secondary}>
              {slide.secondary.label}
            </Link>
          )}
        </div>
      </div>

      <div className={styles.visual}>
        <span className={styles.glow} aria-hidden="true" />
        {showImage ? (
          <Image
            src={slide.image.src}
            alt={slide.image.alt}
            width={slide.image.width}
            height={slide.image.height}
            sizes="(max-width: 900px) 92vw, 50vw"
            quality={80}
            preload={priority}
            loading="eager"
            fetchPriority={priority ? 'high' : 'low'}
            className={styles.image}
          />
        ) : (
          // same box as the image (width 100%, height from the aspect ratio, same max-height)
          <span
            className={`${styles.image} ${styles.placeholder}`}
            style={{ aspectRatio: `${slide.image.width} / ${slide.image.height}` }}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  )
}

function Features({ items, variant }: { items: SlideFeature[]; variant: BannerSlide['featureStyle'] }) {
  if (variant === 'chips') {
    return (
      <ul className={styles.chips}>
        {items.map((f) => (
          <li key={f.title}>
            <BrandText text={f.title} />
          </li>
        ))}
      </ul>
    )
  }
  if (variant === 'icons') {
    return (
      <ul className={styles.iconGrid}>
        {items.map((f) => (
          <li key={f.title}>
            <span className={styles.iconBox} aria-hidden="true">
              <FeatureIcon name={f.icon} />
            </span>
            <BrandText text={f.title} />
          </li>
        ))}
      </ul>
    )
  }
  return (
    <ul className={styles.list}>
      {items.map((f) => (
        <li key={f.title}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6 9 17l-5-5" />
          </svg>
          <BrandText text={f.title} />
        </li>
      ))}
    </ul>
  )
}

function FeatureIcon({ name }: { name?: SlideFeature['icon'] }) {
  const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  switch (name) {
    case 'face':
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <path d="M3 8V5a2 2 0 0 1 2-2h3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M8 21H5a2 2 0 0 1-2-2v-3" />
          <circle cx="12" cy="10" r="3" />
          <path d="M7 17.5a6 6 0 0 1 10 0" />
        </svg>
      )
    case 'shield':
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      )
    case 'angle':
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <path d="M4 20 20 6M4 20l16-3M4 20 14 4" />
          <path d="M9 15.5a5 5 0 0 1 2.5 3.8" />
        </svg>
      )
    case 'speed':
      return (
        <svg viewBox="0 0 24 24" {...p}>
          <path d="M12 21a9 9 0 1 1 9-9" />
          <path d="m12 12 4-4M3 12h2M12 3v2" />
          <path d="M16 18h6M18 15h4" />
        </svg>
      )
    default:
      return null
  }
}

/** Decorative flowing lines in brand blue → green (static behind all slides). */
function HeroBackground() {
  const top = Array.from({ length: 9 }, (_, i) => i)
  const bottom = Array.from({ length: 7 }, (_, i) => i)
  return (
    <svg className={styles.bg} viewBox="0 0 1440 640" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" style={{ stopColor: 'var(--hero-line-a)' }} />
          <stop offset="0.55" style={{ stopColor: 'var(--hero-line-b)' }} />
          <stop offset="1" style={{ stopColor: 'var(--hero-line-c)' }} />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#hero-line)" strokeWidth="1.2">
        {top.map((i) => (
          <path
            key={`t${i}`}
            d={`M ${620 + i * 6} -20 C ${820 + i * 10} ${120 + i * 9}, ${1080 - i * 6} ${40 + i * 14}, 1480 ${170 + i * 16}`}
            opacity={0.55 - i * 0.045}
            vectorEffect="non-scaling-stroke"
          />
        ))}
        {bottom.map((i) => (
          <path
            key={`b${i}`}
            d={`M -40 ${470 + i * 13} C 260 ${380 + i * 10}, 520 ${640 + i * 6}, 900 ${560 + i * 12} S 1300 ${600 + i * 8}, 1500 ${520 + i * 14}`}
            opacity={0.45 - i * 0.05}
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </g>
    </svg>
  )
}
