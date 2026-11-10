// /digital-minimalist-wallet/ copy: kept from the old WordPress page of the same URL (requested), split
// into sections. Changes: sentences about other brands' leather wallets dropped (the "Note Sleeve" with
// card slots and a coin pouch, and the "cocktail bar" lifestyle paragraph), as Allied does not sell them;
// garbled phrases fixed ("forces to be ruthlessly budget-friendly", "possibility to explicit your taste",
// "duplex as"); "Lightening" → Lightning; "NOT SUPPORTS EMV CHIP CARDS" reworded. No pictures (requested).
// NOTE: most of the general wallet copy reads as if taken from wallet review sites and Wikipedia's
// "Digital wallet" article; a page about FuzeCard itself (price, where to buy, support) would be stronger.
// VERIFY: Allied still sells FuzeCard, and its specs (IP68, month-long battery, auto-wipe after 5 errors).
import type { ContentBlock } from './types'

export const walletHero = {
  eyebrow: 'FuzeCard digital minimalist wallet',
  heading: 'Digital Minimalist Wallet in Qatar',
  lead: 'FuzeCard is a single digital minimalist wallet that consolidates your whole wallet: the same size and thickness as a credit card, holding your magnetic stripe and barcode cards in one device.',
  text: [
    'Digital minimalist wallet systems enable the wide use of digital wallet transactions among diverse retail vendors, in the form of mobile payment systems and digital wallet applications. The current trend for minimalist, slim wallets comes from people wanting to carry less in an increasingly digital world. We provide digital minimalist wallet systems in Qatar.',
  ],
  highlight: { value: '10000+', label: 'installations as of 2026' },
  badge: 'Supplied in Qatar by Allied Enterprises',
  primary: { label: 'Enquire Now', href: '/contact-us/' },
}

export const walletFuzeCard = {
  heading: 'What is FuzeCard?',
  text: [
    'A single digital minimalist wallet which consolidates your whole wallet.',
    { subheading: 'Supported card types' },
    {
      list: [
        'Credit and debit cards (magnetic stripe only)',
        'Gift cards',
        'Loyalty and membership cards (barcode)',
      ],
    },
    'FuzeCard does not support EMV chip cards.',
    { subheading: 'How it works' },
    'Load your magnetic stripe card or barcode card. Once you select a card using the buttons on the FuzeCard, it starts to emulate the selected card’s data. All you have to do is swipe it through a POS machine.',
    {
      list: [
        'Load: add your cards using the reader dongle. If your mobile phone has no audio jack, use a Lightning to Aux cable to connect it.',
        'Select: choose the card you want with the buttons on the FuzeCard.',
        'Swipe: swipe the FuzeCard through the POS machine.',
      ],
    },
    { subheading: 'Download the eCard Manager app' },
    'Stay connected with your finances. The eCard Manager app is available on the Play Store and the App Store.',
  ] as ContentBlock[],
}

export const walletSecurity = {
  heading: 'What if I lose my FuzeCard?',
  text: [
    'No need to worry.',
    { subheading: 'Passcode protected' },
    'Turning on the device, selecting the card you want to pay with and emulating payment signals are only allowed with user authorization, via PIN.',
    { subheading: 'Location tracking' },
    'Receive a notification when you’ve left your FuzeCard behind, or if it’s on the move without you.',
    { subheading: 'Auto-wipe technology' },
    'FuzeCard protects itself by clearing all data and reverting to factory settings when a passcode entry error is detected 5 or more times.',
  ] as ContentBlock[],
}

export const walletProduct = {
  heading: 'Unique product features',
  items: [
    'Same size and thickness as a credit card',
    'IP68 water and dust resistant: if it gets wet, wipe it with a dry cloth',
    'Rechargeable battery that lasts about a month per charge on standard use',
  ],
}

export const walletAbout = {
  heading: 'About Digital Wallets',
  text: [
    'A digital wallet, also known as an “e-wallet”, is an electronic device, online service or software program that lets you make digital transactions, exchanging virtual currency units for goods and services. Digital wallets include digital wallet devices and digital wallet systems. Money can be deposited in the digital wallet before any transaction, or an individual’s bank account can be linked to it. Users may also keep their driver’s license, health card, loyalty cards and other documents in the wallet. There are also digital wallet gadgets that physically hold cash and cards, with a Bluetooth mobile connection.',
    'Credentials can be passed to a merchant’s terminal wirelessly through near field communication (NFC). Smartphones running Google’s Android and Apple’s iOS operating systems power NFC wallets such as Google Pay and Apple Pay.',
    'As vendors in Qatar, we offer digital wallets that are made not just for basic monetary transactions but also to authenticate the holder’s credentials. Digital wallets have gained recognition in Korea, where they are known as “wallet mobiles”.',
    { subheading: 'Choosing a minimalist wallet' },
    'More than a way to carry necessities like money and ID, the best wallet is a chance to express your taste and style. The ideal minimalist wallet is a marriage of form and function: hard-wearing, able to withstand regular use, and with a high-end design appeal.',
    'Depending on the requirement, minimalist wallets for the front pocket come with extra features such as RFID blocking, wireless tracking and more. Wallets with multitool functions that still keep a minimalist, slim profile keep growing as our digital footprint gets larger. The true test is finding the right balance between usefulness, aesthetics and innovation.',
  ] as ContentBlock[],
  links: [{ label: 'Contact our team', href: '/contact-us/' }],
}
