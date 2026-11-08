// /fiber-optic-testing-otdl-olts-qatar/ copy: kept from the old WordPress page of the same URL (requested),
// split into sections. The slug's "otdl" typo is kept (CLAUDE.md §14A). Changes: the old copy had been
// machine-reworded in places, so garbled phrases were put back to their plain meaning ("progression of
// optical pulses" → series, "attention rate" → attenuation rate, "deliberate worth" → measured value,
// "occasions" → events, "healthier left" → better left, and similar); the unfinished sentence
// "Models we service include Fluke, and__________." shortened to Fluke only. No pictures (requested).
// NOTE: parts of this copy follow Wikipedia's OTDR article; rewriting it in Allied's own words, with
// details of the testing service Allied actually provides, would be stronger for SEO.
// VERIFY: test equipment sales, rental, calibration and repair, and servicing Fluke models.
import { company } from './company'
import type { ContentBlock } from './types'

export const fiberHero = {
  eyebrow: 'OTDR, OLTS, power meter and drum testing',
  heading: 'Fiber Optic Testing in Qatar: OTDR & OLTS',
  lead: 'In today’s world of communications, bandwidth is the most sought after commodity. The wider the bandwidth, the more data can be sent, and the faster, over the communications media.',
  text: [
    'Fiber optics uses light through glass. Light is at such a high frequency that the bandwidth available for fiber optic communications systems is the greatest of all the communications media available today.',
    'Allied Enterprise Qatar provides quotes on new fiber optic test equipment units, rental units, calibration and repair.',
  ],
  highlight: { value: '3000+', label: 'installations as of 2026' },
  badge: 'ISO 9001:2015 certified company',
  primary: { label: 'Request a Quote', href: '/contact-us/' },
}

export const fiberOtdr = {
  heading: 'What is an OTDR?',
  text: [
    'An Optical Time Domain Reflectometer (OTDR) is an important instrument used by organisations to certify the performance of new fiber optic links and detect problems with existing fiber links. An OTDR is the optical equivalent of an electronic time-domain reflectometer. It injects a series of optical pulses into the fiber under test and extracts, from the same end of the fiber, light that is scattered or reflected back from points along the fiber. The scattered or reflected light that is gathered back is used to characterise the optical fiber, in the same way that an electronic time-domain meter measures reflections caused by changes in the impedance of the cable under test. The strength of the return pulses is measured and integrated as a function of time, and plotted as a function of fiber length.',
    { subheading: 'Detecting problems using an OTDR' },
    'OTDRs are also used for maintaining fiber plant performance. An OTDR maps the cabling and can show the termination quality and the location of faults that may impair network performance. It reveals problems along the length of a channel that may affect long-term reliability and accuracy. OTDRs identify features such as attenuation uniformity and attenuation rate, segment length, the location and insertion loss of connectors and splices, and other events such as sharp bends that may have been introduced during cable installation or afterwards.',
    'When selecting an OTDR, network engineers should make sure the tool has certain functionality, such as loss-length certification, a channel or event map view, power meter capabilities, an easy-to-use interface and smart-remote options. The OTDR also needs to provide a reliable way to document the results. Features that make an OTDR simple to operate, such as automated setup and an event map, are essential for users who aren’t OTDR specialists but need to find problems quickly.',
    { subheading: 'Reading an OTDR trace' },
    'The OTDR is useful for testing the integrity of fiber optic cables. It can verify splice loss, measure length and find faults. It is also commonly used to create a “picture” of a fiber optic cable when it is newly installed. Later, comparisons can be made between the original trace and a second trace taken if problems arise. Analysing the OTDR trace is always easier when there is documentation from the original trace created when the cable was installed.',
    'OTDRs are only effective when testing long cables (more than approximately 250 metres or 800 feet) or cable plants with splices. The information the OTDR produces is typically used to create an image called a “trace” or “signature”, which holds relevant information for the trained user and can be stored for later reference or checked against a blueprint when network trouble arises. OTDRs should not be used for measuring insertion loss in the fiber optic cable; that task is better left to a fiber optic test source and power meter. OTDRs show where the cables are terminated and verify the quality of the fibers, connections and splices. OTDR traces are also used for troubleshooting, since they show where breaks are in the fiber when traces are compared to installation documentation.',
  ] as ContentBlock[],
}

export const fiberQuality = {
  heading: 'Reliability and Quality of OTDR Equipment',
  text: [
    'The reliability and quality of an OTDR depend on its accuracy, measurement range, ability to resolve and measure closely spaced events, measurement speed, and ability to perform well in different environmental conditions and after different kinds of physical abuse. The instrument is also judged on its cost, features, size, weight and ease of use.',
    'Some of the terms regularly used to describe the quality of an OTDR are:',
    { subheading: 'Accuracy' },
    'The correctness of the measurement, that is, the difference between the measured value and the true value of the event being measured.',
    { subheading: 'Measurement range' },
    'The maximum attenuation that can be placed between the instrument and the event being measured, for which the instrument will still be able to measure the event within acceptable accuracy limits.',
    { subheading: 'Instrument resolution' },
    'A measure of how close two events can be spaced and still be recognised as two separate events. The length of the measurement pulse and the data sampling interval limit the resolution of an OTDR: the shorter the pulse and the sampling interval, the better the resolution, but the shorter the measurement range. Resolution is also often limited when strong reflections return to the OTDR and briefly overload the detector; some time is then needed before the instrument can resolve a second fiber event. Some OTDR manufacturers use a “masking” technique to improve resolution.',
    'Industry requirements for the reliability and quality of OTDRs are specified in the Generic Requirements for Optical Time Domain Reflectometer (OTDR) Type Equipment.',
  ] as ContentBlock[],
}

export const fiberTesters = {
  heading: 'Fiber Optic Tester Types',
  text: [
    'Communications systems using fiber optics have two basic types of test equipment for the installation and maintenance of fiber optic networks: the Optical Line Test Set (OLTS) and the Optical Time Domain Reflectometer (OTDR).',
    { subheading: 'OLTS fiber tester' },
    'In its most basic form, the OLTS consists of a fiber optic light source and a fiber optic power meter. An OLTS kit requires access to both ends of a fiber run, and it cannot be used to locate a break within a fiber run. With the most basic optical line test set, the installer or maintainer of the fiber optic network can determine the overall loss of a fiber optic installation, which is then compared to the allowable total loss of the installation. Advanced OLTS sets can determine more than overall loss: they can show loss levels at each connection, as well as the lengths of the fiber optic runs and the distances between fault or connection points.',
    { subheading: 'OTDR fiber tester' },
    'The OTDR does not require access to both ends of a fiber run. It can determine the length of fiber runs, the loss of the run, the distance to a break, or the length of fiber on a spool. It can be used on very short runs, such as within a single building, and on long fiber runs, such as between cities. The classic OTDR output is a trace, very similar to the traces seen in metallic time domain or frequency domain reflectometers. Most modern OTDR units also have onboard computing power to analyse a trace and help the user evaluate it. Almost all OTDR units can store the data, with software available to produce test reports for submission as needed.',
  ] as ContentBlock[],
  links: [{ label: 'Structured cabling data & voice', href: '/structured-cabling-data-voice-qatar/' }],
}

export const fiberCalibration = {
  heading: 'Fiber Optic Test Equipment Calibration, Verification and Factory Service',
  text: [
    'We offer calibration and verification of accuracy for both fiber optic line test sets and fiber optic time domain reflectometers, to ensure the accuracy of measurements.',
    'Models we service include Fluke.',
    `For fiber testing, test equipment, rental or calibration, call ${company.phone.display}, WhatsApp ${company.helpline.display} or email ${company.email}.`,
  ] as ContentBlock[],
  links: [{ label: 'Contact our team', href: '/contact-us/' }],
}
