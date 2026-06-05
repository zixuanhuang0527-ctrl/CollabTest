import { activeSkinServices, serviceCategories } from './data.js';

const navItems = [
  ['Home', '/'], ['Services', '/services'], ['Gallery', '/gallery'], ['Gift Cards', '/gift-cards'], ['Policies', '/policies']
];
let galleryFilter = 'Space';
let booking = null;
let bookingState = {};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function navigateTo(path) {
  history.pushState({}, '', path);
  render();
  setTimeout(() => {
    const hash = location.hash;
    if (hash) $(hash)?.scrollIntoView({ behavior: 'smooth' });
    else scrollTo({ top: 0, behavior: 'smooth' });
  }, 40);
}

function openBooking(initial = {}) {
  booking = true;
  bookingState = { step: 'select', category: initial.category || '', treatment: initial.treatment || '', checked: false };
  render();
}
function closeBooking() { booking = null; render(); }

function appShell(page) {
  return `${header()}<main>${page}</main>${footer()}${booking ? bookingModal() : ''}`;
}

function header() {
  return `<header class="nav-shell"><nav class="nav container" aria-label="Main navigation">
    <button class="brand" data-route="/"><span>YAYA</span><small>SPA</small></button>
    <button class="hamburger" data-menu aria-label="Toggle menu">☰</button>
    <div class="nav-links" id="mobile-menu">
      ${navItems.map(([label, href]) => `<button data-route="${href}">${label}</button>`).join('')}
      <button class="pill-button" data-book>Book Now</button>
    </div>
  </nav></header>`;
}

function sectionIntro(eyebrow, title, text = '') {
  return `<div class="section-intro"><p class="eyebrow">${eyebrow}</p><h2>${title}</h2>${text ? `<p>${text}</p>` : ''}</div>`;
}

function homePage() {
  return `<section class="hero section-pad">
    <div class="hero-art" aria-hidden="true"><div class="spa-window"></div><div class="spa-bowl"></div></div>
    <div class="hero-content container reveal"><p class="eyebrow">Luxury beauty & wellness spa</p><h1>YAYA SPA</h1><h2>Head to Toes We Care</h2><p class="service-line">Scalp Therapy • Skin Ritual • Nails Artistry • Lash Design</p><div class="button-row center"><button class="primary" data-book>Book Now</button><button class="secondary" data-route="/services">Explore Services</button></div></div>
  </section>
  <section class="section-pad about-wrap"><div class="container split"><div><p class="eyebrow">About Yaya</p><h2>More Than Self-Care</h2><p>At Yaya Spa, we believe true beauty begins with balance.</p><p>Every ritual is thoughtfully designed to restore harmony between body, mind, and soul.</p><p>Rooted in nature. Guided by science. Elevated by intention.</p><p>This is your return to yourself.</p></div><div class="editorial-image" aria-label="Soft luxury spa treatment room placeholder"><span>Soft blush suite</span></div></div></section>
  <section class="section-pad container">${sectionIntro('Our Services', 'Care from scalp to lashes', 'Choose a refined ritual designed with softness, comfort, and intention.')}<div class="service-card-grid">${serviceCategories.map(servicePreviewCard).join('')}</div></section>
  ${whyChoose()}${promotions()}${subscribe()}${reviews()}${contactSection()}`;
}

function servicePreviewCard(category) {
  return `<article class="service-preview"><div class="image-placeholder">✦</div><h3>${category.name}</h3><p class="tagline">${category.tagline}</p><p>${category.description}</p><div class="card-actions"><button class="text-link" data-route="/services#${category.id}">Learn More</button><button class="mini-button" data-book data-category="${category.name}">Book Now</button></div></article>`;
}

function whyChoose() {
  const features = [
    ['Personalized Consultations', 'Every treatment begins with understanding your unique needs.'],
    ['Premium Professional Products', 'Carefully selected products for performance, comfort, and safety.'],
    ['Thoughtful Care', 'Every detail is designed with softness, comfort, and intention.'],
    ['Head-to-Toes Beauty', 'A refined destination for scalp, skin, nails, and lashes.']
  ];
  return `<section class="section-pad container">${sectionIntro('The Yaya Experience', 'A softer standard of care')}<div class="feature-grid">${features.map(([t, p]) => `<div class="feature"><span class="icon">♡</span><h3>${t}</h3><p>${p}</p></div>`).join('')}</div></section>`;
}

function promotions() {
  const promos = [['Grand Opening Special', 'Enjoy exclusive opening offers for a limited time.'], ['Referral Rewards', 'Share Yaya Spa with someone you love and receive special rewards.'], ['Seasonal Beauty Offers', 'Limited-time rituals designed for the season.']];
  return `<section class="promo section-pad"><div class="container">${sectionIntro('Current Promotions', 'Discover seasonal offers', 'Discover seasonal offers, opening specials, and limited-time beauty experiences at Yaya Spa.')}<div class="promo-grid">${promos.map(([t, p]) => `<article class="promo-card"><span class="icon">◇</span><h3>${t}</h3><p>${p}</p></article>`).join('')}</div><div class="button-row center"><button class="secondary">View Offers</button><button class="primary" data-book>Book Now</button></div></div></section>`;
}

function subscribe() {
  return `<section class="section-pad container"><div class="subscribe"><p class="eyebrow">Be the First to Know</p><h2>Subscribe to receive exclusive promotions</h2><p>Subscribe to receive exclusive promotions, seasonal offers, event invitations, and beauty tips from Yaya Spa.</p><form><label for="email">Email address</label><input id="email" type="email" placeholder="Enter your email"><button class="primary">Subscribe</button></form><small>No spam. Just beautiful updates.</small></div></section>`;
}

function reviews() {
  const reviews = ['A beautiful and relaxing experience from beginning to end.', 'My skin felt refreshed, calm, and glowing.', 'The space is so soft, clean, and peaceful.'];
  return `<section class="section-pad container">${sectionIntro('Loved by Our Guests', 'Soft words from our community')}<div class="review-grid">${reviews.map((r) => `<article class="review"><div class="stars">★★★★★</div><p>“${r}”</p></article>`).join('')}</div><div class="button-row center"><button class="secondary">Leave a Review</button></div></section>`;
}

function contactSection() {
  return `<section class="section-pad contact" id="contact"><div class="container contact-grid"><div><p class="eyebrow">Contact Us</p><h2>Have questions?</h2><p>We are always happy to help. If you have any questions regarding our services, bookings, aftercare, or policies, please feel free to contact us.</p><div class="contact-list"><p>⌖ Address: 123 Blush Avenue, Suite 8, Your City</p><p>☎ Phone: (555) 123-9292</p><p>✉ Email: hello@yayaspa.com</p><p>◎ Instagram: @yayaspa</p><p>Business Hours: Mon–Sat 10 AM–7 PM • Sun 11 AM–5 PM</p><p>Parking Information: Complimentary guest parking is available behind the spa.</p></div><div class="button-row"><button class="primary" data-book>Book Now</button><a class="secondary anchor-button" href="tel:5551239292">Call Us</a></div></div><div class="map-placeholder">Google Map Placeholder</div></div></section>`;
}

function servicesPage() {
  return `<section class="page-shell section-pad container">${sectionIntro('Our Services', 'Thoughtfully designed rituals for scalp, skin, nails, and lashes.')}<div class="directory">${serviceCategories.map((cat) => `<a href="#${cat.id}">${cat.name}</a>`).join('')}</div>${serviceCategories.map(serviceSection).join('')}</section>`;
}
function serviceSection(category) {
  return `<section id="${category.id}" class="service-section"><div class="service-heading"><p class="eyebrow">${category.tagline}</p><h2>${category.name}</h2><p>${category.description}</p>${category.note ? `<p class="note">${category.note}</p>` : ''}</div><div class="treatment-grid">${category.treatments.map((t) => treatmentCard(t, category.name)).join('')}</div></section>`;
}
function treatmentCard(treatment, category) {
  return `<article class="treatment-card"><h3>${treatment.name}</h3>${treatment.forText ? `<p class="tagline">For: ${treatment.forText}</p>` : ''}<p>${treatment.description}</p>${treatment.duration ? `<p><strong>Duration:</strong> ${treatment.duration}</p>` : ''}${treatment.price ? `<p><strong>Price:</strong> ${treatment.price}</p>` : ''}${listBlock('Benefits', treatment.benefits)}${listBlock('Highlights', treatment.highlights)}${treatment.journey ? `<p class="journey"><strong>Ritual Journey:</strong> ${treatment.journey}</p>` : ''}${treatment.caution ? '<p class="caution">Pre-service information required before booking.</p>' : ''}<button class="mini-button" data-book data-category="${category}" data-treatment="${treatment.name}">Book Now</button></article>`;
}
function listBlock(title, items) { return items ? `<h4>${title}</h4><ul>${items.map((i) => `<li>${i}</li>`).join('')}</ul>` : ''; }

function galleryPage() {
  const cats = ['Space', 'Scalp Therapy', 'Skin Ritual', 'Nails Artistry', 'Lash Design', 'Before & After'];
  return `<section class="page-shell section-pad container">${sectionIntro('Gallery', 'A glimpse into the Yaya Spa experience.')}<div class="filter-tabs">${cats.map((cat) => `<button class="${galleryFilter === cat ? 'active' : ''}" data-filter="${cat}">${cat}</button>`).join('')}</div><div class="gallery-grid">${Array.from({ length: 9 }, (_, i) => `<div class="gallery-tile"><span>${galleryFilter}</span><small>Image ${i + 1}</small></div>`).join('')}</div></section>`;
}

function giftCardsPage() {
  const occasions = ['Birthday', 'Anniversary', 'Mother’s Day', 'Graduation', 'Thank You', 'Just Because'];
  return `<section class="gift-page"><div class="gift-hero section-pad"><div class="container split"><div><p class="eyebrow">YAYA SPA Gift Cards</p><h1>Give the Gift of Self-Care</h1><p>A thoughtful gift for beauty, relaxation, and a moment of return.</p><button class="primary">Buy Gift Card</button></div><div class="gift-card-art"><span>YAYA SPA</span><small>Head to Toes We Care</small></div></div></div><div class="section-pad container">${sectionIntro('Gift Occasions', 'For every beautiful reason')}<div class="occasion-grid">${occasions.map((o) => `<span>${o}</span>`).join('')}</div><div class="gift-options"><article><h3>Digital Gift Card</h3><p>Perfect for instant gifting.</p></article><article><h3>Physical Gift Card</h3><p>Beautifully prepared for an elevated gifting experience.</p></article><article><h3>Custom Amount</h3><p>Let them choose their own ritual.</p></article></div><div class="message-box"><h2>Add a personal message</h2><p>Add a personal message and make their experience feel even more special.</p></div>${faq()}<div class="final-cta"><h2>Give a moment of beauty and calm.</h2><button class="primary">Buy Gift Card</button></div></div></section>`;
}
function faq() {
  return `<div class="faq"><h2>Gift Card FAQ</h2>${['Do gift cards expire?', 'Can gift cards be used for all services?', 'Can I purchase a gift card online?', 'Can I send it to someone else?'].map((q) => `<details><summary>${q}</summary><p>Please contact Yaya Spa for current gift card purchasing and redemption details.</p></details>`).join('')}</div>`;
}

function policiesPage() {
  const policies = [
    ['cancellation-policy', 'Cancellation Policy', 'Appointments must be cancelled or rescheduled at least 24 hours in advance. Late cancellations may be subject to a cancellation fee.'],
    ['late-arrival-policy', 'Late Arrival Policy', 'Please arrive on time for your appointment. If you arrive late, your service time may be shortened to avoid affecting the next guest. Guests arriving too late may need to reschedule.'],
    ['no-show-policy', 'No-Show Policy', 'Guests who do not arrive for their appointment without notice may be charged a no-show fee. Repeated no-shows may require prepayment for future appointments.'],
    ['refund-policy', 'Refund Policy', 'All service sales are final. If you have concerns about your service, please contact us within 3 days so our team can review your experience and provide appropriate support.'],
    ['gift-card-policy', 'Gift Card Policy', 'Gift cards are non-refundable and cannot be exchanged for cash. Gift cards must be presented at the time of service. Lost or stolen gift cards may not be replaceable.'],
    ['health-safety-policy', 'Health & Safety Policy', 'Please inform us of allergies, skin sensitivities, pregnancy, medical conditions, medications, or recent cosmetic procedures before your appointment. We reserve the right to modify or decline a service if it may not be suitable for your current condition.'],
    ['children-guest-policy', 'Children & Guest Policy', 'To maintain a peaceful environment, guests are encouraged to attend appointments alone unless assistance is needed. Children must be supervised at all times.']
  ];
  return `<section class="page-shell section-pad container">${sectionIntro('Yaya Spa Policies', 'Please review our policies before booking to help us provide a smooth and respectful experience for every guest.')}<div class="directory">${policies.map(([id, title]) => `<a href="#${id}">${title}</a>`).join('')}</div><div class="policy-list">${policies.map(([id, title, text]) => `<section class="policy-card" id="${id}"><span class="icon">✓</span><h2>${title}</h2><p>${text}</p></section>`).join('')}</div><div class="final-cta"><p>If you have any questions regarding our policies, please feel free to contact us. Our team will be happy to assist you.</p><button class="primary" data-route="/#contact">Contact Us</button><button class="secondary" data-book>Book Now</button></div></section>`;
}

function bookingModal() {
  const selectedCategory = serviceCategories.find((cat) => cat.name === bookingState.category);
  const treatments = selectedCategory?.treatments || [];
  const requiresCaution = activeSkinServices.includes(bookingState.treatment);
  const generalFacial = bookingState.category === 'Skin Ritual' && bookingState.treatment && !requiresCaution;
  const checked = bookingState.checked ? 'checked' : '';
  let body = '';
  if (bookingState.step === 'select') {
    body = `<p class="eyebrow">Book Now</p><h2>Select your ritual</h2><label>Service category<select data-book-category><option value="">Choose a category</option>${serviceCategories.map((cat) => `<option ${cat.name === bookingState.category ? 'selected' : ''}>${cat.name}</option>`).join('')}</select></label><label>Treatment<select data-book-treatment ${!bookingState.category ? 'disabled' : ''}><option value="">Choose a treatment</option>${treatments.map((t) => `<option ${t.name === bookingState.treatment ? 'selected' : ''}>${t.name}</option>`).join('')}</select></label><button class="primary full" data-continue-select ${!bookingState.category || !bookingState.treatment ? 'disabled' : ''}>Continue</button>`;
  } else if (bookingState.step === 'caution') {
    body = infoStep('Before Your Skin Ritual Appointment', `<p>To help protect your skin and support the best possible treatment experience, please review the following before booking.</p><ul><li>Avoid direct sun exposure or tanning for 3–5 days before your appointment.</li><li>Avoid retinol, tretinoin, AHAs, BHAs, exfoliants, scrubs, and strong active ingredients for 3–5 days before your appointment.</li><li>Do not perform at-home peeling, strong exfoliation, or aggressive skincare before your appointment.</li><li>Please inform us of any allergies, medications, pregnancy, skin sensitivity, recent cosmetic procedures, or current skin irritation.</li><li>If your skin is sunburned, broken, irritated, infected, or actively inflamed, your treatment may need to be adjusted or rescheduled.</li></ul>`, 'I have read and understood the pre-service information.', 'Continue', 'agreement', checked);
  } else if (bookingState.step === 'facial') {
    body = infoStep('Before Your Facial', '<p>Please inform us of allergies, pregnancy, medications, recent cosmetic treatments, or any skin sensitivities before your appointment.</p>', 'I understand.', 'Continue', 'agreement', checked);
  } else if (bookingState.step === 'agreement') {
    body = infoStep('Booking Agreement', '<p>By proceeding with your reservation, you acknowledge that you have read and agree to Yaya Spa’s policies, including our Cancellation Policy, Late Arrival Policy, No-Show Policy, Refund Policy, and Health & Safety Policy.</p><button class="text-link" data-policies>View Full Policies</button>', 'I have read and agree to Yaya Spa’s policies.', 'Continue Booking', 'schedule', checked);
  } else if (bookingState.step === 'schedule') {
    body = `<p class="eyebrow">Appointment Scheduling</p><h2>Select date and time</h2><label>Date<input type="date"></label><label>Time<select><option>10:00 AM</option><option>12:30 PM</option><option>3:00 PM</option><option>5:30 PM</option></select></label><button class="primary full" data-step="complete">Confirm Appointment</button>`;
  } else {
    body = `<div class="complete"><span class="big-icon">✦</span><h2>Booking complete</h2><p>Your Yaya Spa appointment request has been received. We look forward to caring for you from head to toes.</p><button class="primary" data-close>Close</button></div>`;
  }
  return `<div class="modal-backdrop" role="dialog" aria-modal="true" aria-label="Booking flow"><div class="booking-modal"><button class="close" data-close aria-label="Close booking">×</button>${body}</div></div>`;
  function infoStep(title, copy, label, button, nextStep, isChecked) {
    return `<p class="eyebrow">Pre-booking step</p><h2>${title}</h2><div class="info-copy">${copy}</div><label class="check"><input type="checkbox" data-check ${isChecked}> ${label}</label><button class="primary full" data-step="${nextStep}" ${!bookingState.checked ? 'disabled' : ''}>${button}</button>`;
  }
}

function footer() {
  return `<footer class="footer"><div class="container footer-grid"><div><h2>YAYA SPA</h2><p>Head to Toes We Care</p></div><div><h3>Quick Links</h3>${navItems.map(([label, href]) => `<button data-route="${href}">${label}</button>`).join('')}<button data-book>Book Now</button></div><div><h3>Contact</h3><p>Phone: (555) 123-9292</p><p>Email: hello@yayaspa.com</p><p>Instagram: @yayaspa</p><button data-route="/#contact">Contact Us</button></div></div></footer>`;
}

function render() {
  const path = location.pathname;
  const page = path === '/services' ? servicesPage() : path === '/gallery' ? galleryPage() : path === '/gift-cards' ? giftCardsPage() : path === '/policies' ? policiesPage() : homePage();
  $('#root').innerHTML = appShell(page);
  bindEvents();
}

function bindEvents() {
  $$('[data-route]').forEach((button) => button.addEventListener('click', () => navigateTo(button.dataset.route)));
  $$('[data-book]').forEach((button) => button.addEventListener('click', () => openBooking({ category: button.dataset.category, treatment: button.dataset.treatment })));
  $('[data-menu]')?.addEventListener('click', () => $('#mobile-menu')?.classList.toggle('show'));
  $$('form').forEach((form) => form.addEventListener('submit', (event) => event.preventDefault()));
  $$('[data-filter]').forEach((button) => button.addEventListener('click', () => { galleryFilter = button.dataset.filter; render(); }));
  $$('[data-close]').forEach((button) => button.addEventListener('click', closeBooking));
  $('[data-book-category]')?.addEventListener('change', (event) => { bookingState.category = event.target.value; bookingState.treatment = ''; render(); });
  $('[data-book-treatment]')?.addEventListener('change', (event) => { bookingState.treatment = event.target.value; render(); });
  $('[data-continue-select]')?.addEventListener('click', () => {
    const requiresCaution = activeSkinServices.includes(bookingState.treatment);
    const generalFacial = bookingState.category === 'Skin Ritual' && bookingState.treatment && !requiresCaution;
    bookingState.step = requiresCaution ? 'caution' : generalFacial ? 'facial' : 'agreement';
    bookingState.checked = false;
    render();
  });
  $('[data-check]')?.addEventListener('change', (event) => { bookingState.checked = event.target.checked; render(); });
  $$('[data-step]').forEach((button) => button.addEventListener('click', () => { bookingState.step = button.dataset.step; bookingState.checked = false; render(); }));
  $('[data-policies]')?.addEventListener('click', () => { closeBooking(); navigateTo('/policies'); });
}

window.addEventListener('popstate', render);
render();
