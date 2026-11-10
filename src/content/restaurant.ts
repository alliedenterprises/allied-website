// /restaurant-management-software-qatar/ copy: kept from the old WordPress page of the same URL (requested),
// split into sections. Changes: the old copy had been machine-reworded in places, so garbled phrases were
// put back to their plain meaning ("every eating places", "nearest resort", "exceptional styles of orders",
// "in desire of other enterprise offering", "book a large number of channels", and similar). No pictures
// (requested).
// VERIFY: whether the software is desktop, cloud or both (the old page said both), the product name, and
// "best … in Qatar" claims. The old meta description called Allied an authorized ZKTeco POS agent; that
// is not used here until confirmed.
import { company } from './company'
import type { ContentBlock } from './types'

export const restaurantHero = {
  eyebrow: 'Restaurant POS and management software',
  heading: 'Restaurant Management Software in Qatar',
  lead: 'Restaurant management software is designed to control every side of a hospitality business through better workflow management and automation.',
  text: [
    'The restaurant technology landscape in Qatar gets more complex every year, with many technologies that solve the challenges every restaurant faces. We offer all-in-one restaurant management software that helps you increase restaurant revenue. Implemented in the right way, restaurant management software is a sure way to support a restaurant’s success.',
  ],
  highlight: { value: '10000+', label: 'installations as of 2026' },
  badge: 'Setup and support in Doha',
  primary: { label: 'Book a Demo', href: '/contact-us/' },
}

export const restaurantHandles = {
  heading: 'What the software handles',
  items: [
    'Orders, menus and tables',
    'Shifts and staff',
    'Food and beverage',
    'Takeaway and home delivery',
    'Multiple taxes posted into accounts',
    'Cashier collection and payments',
    'Discounts, checkout and loyalty',
    'Reservations and waiting lists',
    'Reports and analytics',
  ],
}

export const restaurantWhy = {
  heading: 'All-in-One Restaurant Management Software',
  text: [
    'Our all-in-one restaurant management software is reliable and proven. It gives restaurants the tools they need to improve their service and the performance of their operations.',
    'Then there’s the whole world of restaurant analytics. The drive to simplify often creates more complexity, and high competition increases the demand for technology that cuts out repetitive work. If your phone can navigate you to the nearest restaurant, your restaurant technology should be able to run with minimal manual intervention.',
    'Good restaurant management software helps a restaurant control every kind of order, menus, shifts, tables, food and beverage, takeaway, home delivery, multiple taxes posted into accounts, cashier collection, payments and more. Designed to serve the F&B industry, it speeds up every operation in the restaurant and makes management far easier for the restaurateur.',
    'A restaurant management system is a collective term for software that streamlines food business operations. A seamless order, discount, checkout, payment, delivery status, feedback and loyalty experience matters. The online ordering system is often the first touchpoint with the customer, and it can go a long way towards making a great first impression and helping your brand grow.',
    'Money is one of the most important elements of a stable business, yet cash flow is often the first thing restaurant owners overlook in favour of other needs. Our restaurant management and restaurant billing software, at an affordable price, helps you manage cash flow and improve the profitability of your business.',
  ] as ContentBlock[],
}

export const restaurantReservations = {
  heading: 'Reservations and Table Management',
  text: [
    'For restaurants that take reservations, moving from pen and paper to a restaurant reservation system can make an incredible difference. It makes everyday operations much easier and creates a better experience for guests. Rather than answering phones and entering data by hand, guests can enter their details through a website, mobile app or web widget.',
    'A good reservation setup also includes intuitive table management, so restaurants can take bookings from many channels. Restaurant operators can quickly add guests to a waiting list when the restaurant is full, and are alerted when a table frees up. Guests are told their table is ready through a portable buzzer or, with modern waitlist systems, by SMS.',
    { subheading: 'Easy to learn, ready to grow' },
    'Our restaurant management system does not take hours of training to master. It is scalable, fits the restaurant’s needs today and grows with future volume, and it can keep restaurant data in the cloud for a better user experience.',
    `To see it working, call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email}.`,
  ] as ContentBlock[],
  links: [{ label: 'Contact our team', href: '/contact-us/' }],
}
