import Image from 'next/image'
import type { CSSProperties } from 'react'

import type { MapLocation } from '@/content/home'
import styles from './ReachMap.module.css'

type ReachMapProps = {
  eyebrow: string
  heading: string
  text: string
  map: { src: string; darkSrc: string; width: number; height: number; alt: string }
  hub: MapLocation
  destinations: readonly MapLocation[]
}

/** Curved line from the hub, bending upwards (x/y are in the map image's own units) */
function arcPath(from: MapLocation, to: MapLocation) {
  const dx = to.x - from.x
  const dy = to.y - from.y
  const side = dx < 0 ? -1 : 1
  const controlX = (from.x + to.x) / 2 + dy * 0.22 * side
  const controlY = (from.y + to.y) / 2 - Math.abs(dx) * 0.22
  return `M${from.x} ${from.y}Q${controlX} ${controlY} ${to.x} ${to.y}`
}

/**
 * "Our reach": map with routes from the hub to each destination.
 *
 * Server component, no JavaScript: the routes animate with CSS only. SEO: the country
 * names are a real list in the HTML; the lines are decorative and hidden from screen readers.
 * One map image per theme: CSS shows one and lazy loading means only that one is downloaded.
 */
export function ReachMap({ eyebrow, heading, text, map, hub, destinations }: ReachMapProps) {
  const locations = [hub, ...destinations]

  return (
    <section className={styles.section} aria-labelledby="reach-heading">
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 id="reach-heading" className={styles.heading}>
        {heading}
      </h2>
      <p className={styles.text}>{text}</p>

      <div className={styles.stage}>
        <div className={styles.map}>
          <Image
            src={map.src}
            alt={map.alt}
            width={map.width}
            height={map.height}
            className={`${styles.image} ${styles.light}`}
          />
          <Image
            src={map.darkSrc}
            alt={map.alt}
            width={map.width}
            height={map.height}
            className={`${styles.image} ${styles.dark}`}
          />

          <svg
            className={styles.routes}
            viewBox={`0 0 ${map.width} ${map.height}`}
            fill="none"
            aria-hidden="true"
          >
            {destinations.map((destination, i) => {
              const d = arcPath(hub, destination)
              return (
                <g key={destination.code}>
                  {/* faint dotted route, always visible */}
                  <path d={d} className={styles.route} />
                  {/* bright dash travelling out from Qatar */}
                  <path
                    d={d}
                    pathLength={100}
                    className={styles.comet}
                    style={{ animationDelay: `${i * 0.7}s` } as CSSProperties}
                  />
                  <circle cx={destination.x} cy={destination.y} r="8" className={styles.point} />
                </g>
              )
            })}
            <circle cx={hub.x} cy={hub.y} r="12" className={styles.pulse} />
            <circle cx={hub.x} cy={hub.y} r="10" className={styles.point} />
          </svg>

          <ul className={styles.labels}>
            {locations.map((location) => (
              <li
                key={location.code}
                className={`${styles.label} ${styles[location.placement]} ${
                  location === hub ? styles.hub : ''
                }`}
                style={{
                  left: `${(location.x / map.width) * 100}%`,
                  top: `${(location.y / map.height) * 100}%`,
                }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className={styles.pin} aria-hidden="true">
                  <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                </svg>
                <span className={styles.code} aria-hidden="true">
                  {location.code}
                </span>
                {location.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
