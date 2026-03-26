/**
 * Single source of truth for a new client site.
 * After cloning: edit this file, swap files in /public, set NEXT_PUBLIC_SITE_URL in .env
 */

export type ServiceIconKey = "threading" | "skin" | "facials" | "makeup";

export type PriceRow = {
  name: string;
  amount: string;
  currency: string;
};

export type PriceListSection = {
  heading: string;
  tabLabel?: string;
  rows: readonly PriceRow[];
};

export type SiteService = {
  title: string;
  description: string;
  icon: ServiceIconKey;
  priceList?: {
    sections: readonly PriceListSection[];
    /** When sections use tabs, overrides `site.services.priceTabsAriaLabel` (e.g. vosak/šećer vs žene/muškarci). */
    tabsAriaLabel?: string;
  };
};

export type NavItem = { href: string; label: string };

export type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  alt: string;
};

const publicUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

/**
 * In-page nav hashes → element ids (smooth scroll). When you add a `site.nav`
 * link like `#pricing`, add a matching entry and put `id="pricing-heading"` on the section.
 */
export const scrollTargetIds: Record<string, string> = {
  hero: "hero",
  services: "services-heading",
  philosophy: "philosophy-heading",
  contact: "contact-heading",
  "about-us": "about-us-heading",
  blog: "blog-heading",
};

export const site = {
  /** Used for metadataBase, sitemap, robots */
  publicUrl,

  /** <html lang=""> */
  htmlLang: "sr",

  seo: {
    title: "Beauty by Masha",
    description:
      "Beauty by Masha — kozmetički studio u Beogradu. Profesionalne usluge lepote u mirnom, pažljivo osmišljenom okruženju.",
    openGraphLocale: "en_US",
  },

  brand: {
    /** Full name — metadata, hero eyebrow, etc. */
    name: "Beauty by Masha",
    /** Mobile hero: first line (uppercase block) */
    heroTitleLine1: "Beauty",
    /** Mobile hero: second line (lighter, under line 1) */
    heroTitleLine2: "by Masha",
    /** Logo in header/footer */
    logoSrc: "/logo.png",
    logoAlt: "Beauty by Masha",
  },

  /** Main navigation + footer quick links */
  nav: [
    { href: "#hero", label: "Početna" },
    { href: "#services", label: "Usluge" },
    { href: "#contact", label: "Kontakt" },
    { href: "#about-us", label: "O nama" },
    { href: "#blog", label: "Blog" },
  ] as const satisfies readonly NavItem[],

  ui: {
    book: "Zakaži",
    openMenu: "Otvori meni",
    closeMenu: "Zatvori meni",
    mobileNavLabel: "Mobilna navigacija",
    footerMenuTitle: "Meni",
    footerContactTitle: "Kontakt",
    instagramLabel: "Instagram",
    facebookLabel: "Facebook",
    copyrightReserved:
      "Sva prava zadržana.",
    copyrightTagline: "Dizajn sa namerom.",
  },

  hero: {
    imageSrc: "/hero.jpg",
    imageAltMobile:
      "Klijent uživa u tretmanu lica u salonu Beauty by Masha",
    imageAltDesktop:
      "Klijent uživa u opuštajućem tretmanu lica sa restorativnom maskom",
    /** After wave on mobile */
    tagline: "Umetnost dodira, ritual lepote",
    /** Large serif lines on desktop (second line is italic in UI) */
    desktopHeadlineLine1: "Umetnost dodira,",
    desktopHeadlineLine2: "ritual lepote",
    ctaPrimaryMobile: "Zakaži Termin",
    ctaPrimaryDesktop: "Zakaži Konsultacije",
    ctaSecondary: "Pogledaj Usluge",
    intro:
      "Kozmetičke usluge i nega lica u mirnom, profesionalnom okruženju stvorenom da obnovi vaš prirodni sjaj i unutrašnji mir.",
  },

  footer: {
    blurb:
      "Moderno utočište lepote gde se probrana profesionalna nega susreće sa dubokim ritualima posvećenim unutrašnjem miru.",
    social: {
      instagram: "#",
      facebook: "#",
    },
  },

  contact: {
    sectionEyebrow: "Stupite u vezu",
    sectionTitle: "Kontakt",
    mapIframeTitle: "Beauty by Masha — mapa lokacije",
    /** Google Maps embed URL */
    mapEmbedSrc:
      "https://www.google.com/maps?q=Jurija%20Gagarina%2014e%2C%20lok.%2014%2C%20Beograd&output=embed",
    addressLines: [
      "Jurija Gagarina 14e, lok 14",
      "(zgrada Ljubicica)",
      "Beograd, Srbija",
    ] as const,
    phoneDisplay: "064/1451064",
    phoneTel: "+381641451064",
    email: "beautybymasha@gmail.com",
    hours: [
      "Ponedeljak: 10h - 17h",
      "Utorak - Petak: 12h - 20h",
      "Subota: 10h - 17h",
      "Nedelja: Zatvoreno",
    ] as const,
    formTitle: "Pošaljite nam poruku",
    formLabels: {
      name: "Ime i Prezime",
      namePlaceholder: "Vaše ime",
      email: "Email",
      emailPlaceholder: "vas@email.com",
      phone: "Telefon",
      phonePlaceholder: "+381...",
      message: "Poruka",
      messagePlaceholder: "Vaša poruka...",
      submit: "Pošalji Poruku",
    },
    cards: {
      address: "Adresa",
      phone: "Telefon",
      email: "Email",
      hours: "Radno Vreme",
    },
  },

  services: {
    eyebrow: "Naša ponuda",
    title: "Usluge",
    priceListToggleLabel: "Cenovnik",
    priceTabsAriaLabel: "Cenovnik po polu",
  },

  servicesList: [
    {
      title: "Manikir",
      description:
        "Profesionalna nega i oblikovanje noktiju na rukama za uredan, čist i dugotrajan rezultat prilagođen vašem stilu.",
      icon: "makeup",
      priceList: {
        sections: [
          {
            heading: "Cenovnik – manikir",
            rows: [
              { name: "Lakiranje", amount: "1.100", currency: "rsd" },
              {
                name: "Manikir sa lakiranjem",
                amount: "2.100",
                currency: "rsd",
              },
              {
                name: "Manikir + vitaminski trajni lak",
                amount: "3.200",
                currency: "rsd",
              },
              {
                name: "Manikir + vitaminska rubber baza",
                amount: "3.400",
                currency: "rsd",
              },
              {
                name: "Manikir + vitaminska BUILD rubber baza",
                amount: "3.600",
                currency: "rsd",
              },
              {
                name: "Korekcija / ojačanje S / M / L (vitaminski gel)",
                amount: "3.800 / 4.000 / 4.200",
                currency: "rsd",
              },
              {
                name: "Izlivanje S / M / L (vitaminski gel)",
                amount: "4.300 / 4.500 / 4.700",
                currency: "rsd",
              },
              {
                name: "Korekcija tuđeg rada (dodatak)",
                amount: "+500",
                currency: "rsd",
              },
              {
                name: "Korekcija GELA preko 4 nedelje (dodatak)",
                amount: "+500",
                currency: "rsd",
              },
              {
                name: "French (dodatak)",
                amount: "+400",
                currency: "rsd",
              },
            ],
          },
        ],
      },
    },
    {
      title: "Pedikir",
      description:
        "Nega stopala i noktiju na nogama uz pažnju na higijenu i udobnost — opuštajuće iskustvo i uredan izgled.",
      icon: "facials",
      priceList: {
        sections: [
          {
            heading: "Cenovnik – pedikir",
            rows: [
              {
                name: "Pedikir sa lakiranjem",
                amount: "3.200",
                currency: "rsd",
              },
              {
                name: "Pedikir sa vitaminskim trajnim lakom",
                amount: "3.800",
                currency: "rsd",
              },
              {
                name: "Medicinski pedikir sa lakiranjem",
                amount: "4.000",
                currency: "rsd",
              },
              {
                name: "Medicinski pedikir sa trajnim lakom",
                amount: "4.500",
                currency: "rsd",
              },
              {
                name: "Trajno lakiranje na nogama",
                amount: "2.700",
                currency: "rsd",
              },
              {
                name: "Aparaturni dodatak",
                amount: "+500",
                currency: "rsd",
              },
            ],
          },
        ],
      },
    },
    {
      title: "Depilacija",
      description:
        "Uklanjanje neželjenih dlačica voskom ili šećernom pastom. Ženski i muški tretmani, prilagođeni vašoj koži.",
      icon: "threading",
      priceList: {
        tabsAriaLabel: "Depilacija — ženska ili muška, vosak ili šećer",
        sections: [
          {
            tabLabel: "Žene · vosak",
            heading: "Depilacija ženska — vosak",
            rows: [
              {
                name: "Depilacija brazilska",
                amount: "2.000",
                currency: "rsd",
              },
              {
                name: "Depilacija celih nogu",
                amount: "1.900",
                currency: "rsd",
              },
              {
                name: "Depilacija pola nogu",
                amount: "1.200",
                currency: "rsd",
              },
              {
                name: "Depilacija ruku",
                amount: "900",
                currency: "rsd",
              },
              { name: "Nausnice", amount: "600", currency: "rsd" },
              { name: "Obrve", amount: "600", currency: "rsd" },
              {
                name: "Paket 1 — ruke, noge, bikini",
                amount: "4.300",
                currency: "rsd",
              },
              {
                name: "Paket 2 — ruke, pola nogu, bikini",
                amount: "3.700",
                currency: "rsd",
              },
            ],
          },
          {
            tabLabel: "Žene · šećer",
            heading: "Depilacija ženska — šećer",
            rows: [
              {
                name: "Depilacija šećer brazilska",
                amount: "2.300",
                currency: "rsd",
              },
              {
                name: "Depilacija šećer celih nogu",
                amount: "2.200",
                currency: "rsd",
              },
              {
                name: "Depilacija šećer pola nogu",
                amount: "1.500",
                currency: "rsd",
              },
              {
                name: "Depilacija šećer ruku",
                amount: "1.300",
                currency: "rsd",
              },
              {
                name: "Depilacija šećer nausnice",
                amount: "800",
                currency: "rsd",
              },
              {
                name: "Paket 1 šećer — ruke, noge, bikini",
                amount: "5.200",
                currency: "rsd",
              },
            ],
          },
          {
            tabLabel: "Muškarci · vosak",
            heading: "Depilacija muška — vosak",
            rows: [
              {
                name: "Depilacija muška vosak — noge (cele)",
                amount: "2.600",
                currency: "rsd",
              },
              {
                name: "Depilacija muška vosak — pola nogu",
                amount: "1.600",
                currency: "rsd",
              },
              {
                name: "Depilacija muška vosak — ruke",
                amount: "1.500",
                currency: "rsd",
              },
              {
                name: "Depilacija muška vosak — leđa",
                amount: "2.000",
                currency: "rsd",
              },
              {
                name: "Depilacija muška vosak — grudi",
                amount: "2.000",
                currency: "rsd",
              },
              {
                name: "Depilacija muška vosak — ramena",
                amount: "1.200",
                currency: "rsd",
              },
            ],
          },
          {
            tabLabel: "Muškarci · šećer",
            heading: "Depilacija muška — šećer",
            rows: [
              {
                name: "Depilacija muška šećer — noge (cele)",
                amount: "3.400",
                currency: "rsd",
              },
              {
                name: "Depilacija muška šećer — pola nogu",
                amount: "2.400",
                currency: "rsd",
              },
              {
                name: "Depilacija muška šećer — ruke",
                amount: "2.000",
                currency: "rsd",
              },
              {
                name: "Depilacija muška šećer — leđa",
                amount: "3.300",
                currency: "rsd",
              },
              {
                name: "Depilacija muška šećer — grudi",
                amount: "3.000",
                currency: "rsd",
              },
              {
                name: "Depilacija muška šećer — ramena",
                amount: "2.000",
                currency: "rsd",
              },
            ],
          },
        ],
      },
    },
    {
      title: "Trepavice i obrve",
      description:
        "Tretmani za naglašene trepavice i uredne obrve — od oblikovanja i nijansiranja do uzdržavanja prirodnog izgleda.",
      icon: "makeup",
      priceList: {
        sections: [
          {
            heading: "Trepavice / obrve",
            rows: [
              { name: "Lash lift", amount: "3.500", currency: "rsd" },
              { name: "Brow lift", amount: "3.500", currency: "rsd" },
              { name: "Korekcija obrva", amount: "900", currency: "rsd" },
              { name: "Farbanje obrva", amount: "1.000", currency: "rsd" },
              { name: "Farbanje trepavica", amount: "1.000", currency: "rsd" },
            ],
          },
        ],
      },
    },
    {
      title: "Masaža",
      description:
        "Opuštajuća masaža za smanjenje napetosti mišića, bolji cirkulaciju i duboki osećaj relaksacije.",
      icon: "skin",
      priceList: {
        sections: [
          {
            heading: "Masaža",
            rows: [
              {
                name: "Terapeutska masaža (30 min)",
                amount: "3.000",
                currency: "rsd",
              },
              {
                name: "Terapeutska masaža (45 min)",
                amount: "3.500",
                currency: "rsd",
              },
              {
                name: "Terapeutska masaža (60 min)",
                amount: "4.000",
                currency: "rsd",
              },
              {
                name: "Sportska masaža (60 min)",
                amount: "4.000",
                currency: "rsd",
              },
              {
                name: "Relax masaža (60 min)",
                amount: "3.500",
                currency: "rsd",
              },
              {
                name: "Antistres masaža (60 min)",
                amount: "3.500",
                currency: "rsd",
              },
              {
                name: "Anticelulit masaža (30 min)",
                amount: "2.500",
                currency: "rsd",
              },
              {
                name: "Madero (45 min)",
                amount: "2.500",
                currency: "rsd",
              },
            ],
          },
        ],
      },
    },
  ] as const satisfies readonly SiteService[],

  philosophy: {
    imageSrc: "/about.jpg",
    imageAlt: "Warm spa interior with soft ambient lighting",
    quote:
      '"Lepota je ritual ljubavi prema sebi, protkan namerom i gracioznošću."',
    eyebrow: "Naša filozofija",
    title: "Mir, Profesionalnost, Posvećenost",
    paragraphs: [
      "U Beauty by Masha verujemo da je lepota mnogo više od spoljašnjeg izgleda. Ona je meditativna praksa. Fokusirani smo na isticanje vaše prirodne lepote kroz stručnu negu i precizan, pažljiv pristup.",
      "Svaka poseta predstavlja jedinstven ritual, pažljivo osmišljen kako biste ne samo izgledali osveženo, već osetili duboki unutrašnji mir i potpunu relaksaciju.",
    ] as const,
    credentialTitle: "Sertifikovani Stručnjaci",
    credentialSubtitle: "Licencirani Kozmetičari",
  },

  about: {
    eyebrow: "O nama",
    title: "Pažljivo Kreirani Rituali, Ljudski Dodir",
    paragraphs: [
      "Beauty by Masha je studio lepote posvećen tretmanima koji su podjednako precizni i duboko opuštajući. Spajamo stručnu negu sa pažljivim pristupom kako bismo postigli rezultate koji izgledaju prirodno i u skladu sa vama.",
      "Svaki termin je potpuno prilagođen vašoj koži, vašem načinu života i vašim ciljevima. Od prve konsultacije do saveta za kućnu negu, naš fokus je na svakom detalju, transparentnoj brizi i iskustvu pravog utočišta.",
    ] as const,
    imageSrc: "/owner.jpg",
    imageAlt: "Studio owner portrait",
  },

  blog: {
    eyebrow: "Edukacija",
    title: "Stručni Saveti",
    viewAll: "Pročitaj Sve Članke",
    readMore: "Pročitaj Više",
    listPath: "/blog" as const,
    posts: [
      {
        title: "5 Saveta za Zdraviju Kožu",
        excerpt:
          "Otkrijte osnovne jutarnje rituale koji štite vašu kožu od svakodnevnih spoljašnjih uticaja.",
        image: "/blog-1.jpg",
        alt: "Skincare bottles and products arranged on a table",
      },
      {
        title: "Priprema pred Vama Važan Događaj",
        excerpt:
          "Kako da pripremite kožu za dugotrajan, blistav izgled koji zrači od jutra do mraka.",
        image: "/blog-2.jpg",
        alt: "Makeup palette and brushes laid out on a surface",
      },
      {
        title: "Nega Nakon Tretmana",
        excerpt:
          "Zadržite rezultate uz naš profesionalni vodič za kućnu negu nakon svakog tretmana.",
        image: "/blog-3.jpg",
        alt: "Illustrated woman with a calming facial mask",
      },
    ] as const satisfies readonly BlogPost[],
  },
} as const;
