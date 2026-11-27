/* ===================== EDIT THIS FILE ===================== */
const WHATSAPP = "393755871504";
const EMAIL = "stefbattistin@gmail.com";
const PRICE = 99;              // per person. Also appears as text in the HTML pages (search and replace 99)
const PRIVATE_PRICE = 629;      // whole van, up to 8 guests
const FORM_ENDPOINT = "https://formspree.io/f/xyeeaway";
const GA_ID = "";              // Google Analytics ID, e.g. "G-XXXXXXXXXX"
/* PAYMENT: create Stripe Payment Links (with adjustable quantity for the shared tour) and paste them here */
const PAY_LINK_SHARED = "";
const PAY_LINK_PRIVATE = "";
/* SEATS: capacity per departure and seats ALREADY SOLD per date. Example: BOOKED = {"2026-12-20":6}. Dates you do not run: CLOSED = ["2026-12-25"] */
const CAPACITY = 8;
const BOOKED = {};
const CLOSED = [];
/* REVIEWS: real ones only, e.g. {q:"Best day of our trip!", n:"Anna, Germany"} */
const REVIEWS = [];
