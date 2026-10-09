/* ============================================================
   BINCE VISUALS – PHOTO LIST
   To add a photo:
     1. Put the file in images/gallery/  (JPG, about 2000px on the long side)
     2. Add a line below with the same file name.
   Fields:
     t   = caption shown under the photo
     src = file path
     c   = series: "denim", "details" or "night"
     s   = placeholder colour while loading (denim, leather, boots, hat, garden, street, dusk)
     r   = rough shape until the photo loads: "4/5" tall, "3/2" wide, "1/1" square
     x   = optional camera settings, e.g. "50mm · f/1.8 · 1/250" (leave "" to hide)
   ============================================================ */
const names = {
  denim:   "Denim & Leather",
  details: "Boots & Hats",
  night:   "After Dark"
};

const shots = [
  { t:"Denim jacket, side light", src:"images/gallery/denim-01.jpg",   c:"denim",   s:"denim",   r:"4/5", x:"" },
  { t:"Leather, hard shadow",     src:"images/gallery/denim-02.jpg",   c:"denim",   s:"leather", r:"2/3", x:"" },
  { t:"Boots on concrete",        src:"images/gallery/details-01.jpg", c:"details", s:"boots",   r:"1/1", x:"" },
  { t:"Lamplight at night",       src:"images/gallery/night-01.jpg",   c:"night",   s:"garden",  r:"3/2", x:"" },
  { t:"Brim and profile",         src:"images/gallery/details-02.jpg", c:"details", s:"hat",     r:"4/5", x:"" },
  { t:"Double denim",             src:"images/gallery/denim-03.jpg",   c:"denim",   s:"denim",   r:"3/4", x:"" },
  { t:"Street at dusk",           src:"images/gallery/night-02.jpg",   c:"night",   s:"dusk",    r:"2/3", x:"" },
  { t:"Laces, close",             src:"images/gallery/details-03.jpg", c:"details", s:"boots",   r:"4/5", x:"" },
  { t:"Collar detail",            src:"images/gallery/denim-04.jpg",   c:"denim",   s:"leather", r:"1/1", x:"" },
  { t:"Wet pavement glow",        src:"images/gallery/night-03.jpg",   c:"night",   s:"street",  r:"3/4", x:"" },
  { t:"Hat, window light",        src:"images/gallery/details-04.jpg", c:"details", s:"hat",     r:"2/3", x:"" },
  { t:"Garden pavilion",          src:"images/gallery/night-04.jpg",   c:"night",   s:"garden",  r:"4/5", x:"" }
];
