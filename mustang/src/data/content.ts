// Central content + image data for the Mustang landing page.
// All images are remote (Pexels) so the built site works anywhere — including GitHub Pages.

const px = (id: number, w = 1200) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`;

export const IMAGES = {
  hero: px(14741507, 1920),
  heroFallback: px(31164335, 1920),
  grille: px(29028973),
  heritage: px(37144085),
  heritageClassic: px(37508222),
  garage: px(10446869, 1600),
  interior: px(29248398, 1400),
  models: {
    gt: px(31164335, 1200),
    darkHorse: px(9177138, 1200),
    convertible: px(9334965, 1200),
    classic: px(24182221, 1200),
  },
  gallery: [
    { src: px(15554864), caption: "Sunrise over the lot", tag: "GT Fastback" },
    { src: px(30538948), caption: "City canyon runner", tag: "GT Convertible" },
    { src: px(30302942), caption: "Racing red, Texas sun", tag: "GT Premium" },
    { src: px(11189635), caption: "Timeless chrome", tag: "1965 Fastback" },
    { src: px(29028973), caption: "The badge of a legend", tag: "Pony Badge" },
    { src: px(9177138), caption: "Night stalker", tag: "Dark Horse" },
  ],
};

export const NAV_LINKS = [
  { label: "Heritage", href: "#heritage" },
  { label: "Models", href: "#models" },
  { label: "Performance", href: "#performance" },
  { label: "Interior", href: "#interior" },
  { label: "Gallery", href: "#gallery" },
];

export const STATS = [
  { value: 500, suffix: "+", label: "Horsepower", note: "Coyote V8" },
  { value: 3.5, suffix: "s", label: "0–60 MPH", note: "Launch control" },
  { value: 180, suffix: " MPH", label: "Top Speed", note: "Track ready" },
  { value: 60, suffix: "", label: "Years of Legacy", note: "Since 1964" },
];

export const TIMELINE = [
  {
    year: "1964",
    title: "The Pony Car Is Born",
    text: "April 17, 1964 — the Mustang debuts at the New York World's Fair. Over 22,000 orders are placed on day one. A legend gallops into history.",
  },
  {
    year: "1965",
    title: "Shelby GT350",
    text: "Carroll Shelby turns the Mustang into a track weapon. The GT350 wins its class at SCCA and plants the pony car firmly on the podium.",
  },
  {
    year: "1979",
    title: "The Fox-Body Era",
    text: "Lighter, sharper and fuel-efficient, the third-generation Mustang becomes the platform of drag strips, drift scenes and street legends worldwide.",
  },
  {
    year: "2005",
    title: "Retro Rebirth",
    text: "The fifth generation returns to the aggressive fastback lines of the sixties — a love letter to the original that sells over a million units.",
  },
  {
    year: "2015",
    title: "Global Icon",
    text: "The sixth generation goes independent rear suspension and goes global, becoming the best-selling sports coupe on the planet.",
  },
  {
    year: "2024",
    title: "Dark Horse Arrives",
    text: "The most track-capable 5.0L V8 Mustang ever built. 500 horsepower of pure, unfiltered analog muscle — no hybrid, no apologies.",
  },
];

export const MODELS = [
  {
    name: "Mustang GT",
    image: IMAGES.models.gt,
    tagline: "The heart of the herd",
    description: "5.0L Coyote V8 with 486 hp and a soundtrack that needs no playlist.",
    specs: { hp: "486 HP", zeroToSixty: "4.2s", top: "163 MPH" },
  },
  {
    name: "Dark Horse",
    image: IMAGES.models.darkHorse,
    tagline: "Born on the track",
    description: "500 hp, rev-matching Tremec and handling that claws at every corner.",
    specs: { hp: "500 HP", zeroToSixty: "3.9s", top: "166 MPH" },
  },
  {
    name: "GT Convertible",
    image: IMAGES.models.convertible,
    tagline: "Sun. Sound. V8.",
    description: "Drop the top, drop the hammer. Open-air muscle at its finest.",
    specs: { hp: "486 HP", zeroToSixty: "4.4s", top: "155 MPH" },
  },
  {
    name: "Heritage Edition",
    image: IMAGES.models.classic,
    tagline: "The original recipe",
    description: "Chrome, white stripes and the spirit of April 17, 1964.",
    specs: { hp: "271 HP", zeroToSixty: "7.2s", top: "118 MPH" },
  },
];

export const PERFORMANCE = [
  { label: "Horsepower", value: 500, display: "500 HP", max: 500 },
  { label: "Torque", value: 418, display: "418 LB-FT", max: 418 },
  { label: "0–60 MPH", value: 3.5, display: "3.5 SEC", max: 4 },
  { label: "¼ Mile", value: 11.8, display: "11.8 SEC", max: 12 },
];

export const FEATURES = [
  {
    title: "12.4\" Digital Cluster",
    text: "A fully configurable instrument panel with Track Apps, lap timers and a shift light right in your line of sight.",
  },
  {
    title: "MagneRide Dampers",
    text: "Magnetorheological suspension that reads the road a thousand times a second. Smooth on the street, razor sharp on the circuit.",
  },
  {
    title: "Recaro Sport Seats",
    text: "Aggressive bolsters wrapped in leather and suede that hold you through 1G corners without sacrificing comfort.",
  },
  {
    title: "B&O Premium Audio",
    text: "A 12-speaker Bang & Olufsen system tuned for the cabin — though the V8 makes the best track on the list.",
  },
];

export const FOOTER_LINKS = [
  { label: "Heritage", href: "#heritage" },
  { label: "Models", href: "#models" },
  { label: "Performance", href: "#performance" },
  { label: "Interior", href: "#interior" },
  { label: "Gallery", href: "#gallery" },
];
