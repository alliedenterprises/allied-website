/** An image used in page content; width/height are the file's pixel size. */
export type PageImage = { src: string; width: number; height: number; alt: string }

/** A question with its answer paragraphs and an optional bullet list. */
export type FaqItem = { question: string; answer: readonly string[]; list?: readonly string[] }

/** Line icons available to IconCardGrid (see src/components/sections/UserGroupGrid.tsx). */
export type CardIcon = 'staff' | 'teacher' | 'student' | 'parent' | 'tools' | 'scanner' | 'handheld' | 'rfid'

/** A card with an icon, a title (h3) and a short text: user groups, hardware types, etc. */
export type IconCard = { title: string; text: string; icon: CardIcon }

/** One piece of a text section: a paragraph, a bullet list, or a small sub-heading (h3). */
export type ContentBlock = string | { list: readonly string[] } | { subheading: string }
