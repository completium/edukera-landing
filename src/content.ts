export const LANGUAGES = ["fr", "en"] as const

export type Language = (typeof LANGUAGES)[number]

export interface Feature {
  title: string
  description: string
  icon: string
}

export interface Chapter {
  title: string
  description: string
  icon: string
}

export interface School {
  name: string
  href: string
  logo: string
}

export interface TermsSection {
  title: string
  paragraphs: string[]
}

export interface SiteContent {
  meta: {
    title: string
    description: string
  }
  nav: {
    benefits: string
    teachers: string
    usedBy: string
    launchApp: string
  }
  hero: {
    eyebrow: string
    title: string
    highlighted: string[]
    description: string
    launchApp: string
    launchDoc: string
    learnMore: string
    discover: string
    exerciseImage: string
  }
  benefits: {
    title: string
    items: Feature[]
  }
  teachers: {
    title: string
    bullets: string[]
    button: string
    price: string
    priceDetail: string
    limit: string
    footerBefore: string
    footerLink: string
  }
  quote: {
    before: string
    highlight: string
    after: string
    author: string
  }
  train: {
    title: string
    description: string
    chapters: Chapter[]
  }
  usedBy: {
    title: string
    schools: School[]
  }
  coq: {
    prefix: string
    link: string
    suffix: string
  }
  footer: {
    social: string
    contact: string
    legal: string
    terms: string
    copyright: string
  }
  legal: {
    title: string
    editor: string
    company: string[]
    headquarters: string
    address: string[]
    hosting: string
    hostingDetails: string[]
  }
  terms: {
    title: string
    intro: string[]
    sections: TermsSection[]
  }
}

const schools: School[] = [
  {
    name: "Sorbonne Universite",
    href: "http://www.upmc.fr/",
    logo: "/img/logo-school-sorbonne.svg",
  },
  {
    name: "Universite de Strasbourg",
    href: "http://www.unistra.fr/index.php?id=accueil",
    logo: "/img/logo-school-universite-strasbourg.svg",
  },
  {
    name: "Universite Paris Diderot",
    href: "http://www.univ-paris-diderot.fr/",
    logo: "/img/logo-school-up7.svg",
  },
  {
    name: "Universite Paris-Est Marne-la-Vallee",
    href: "http://www.u-pem.fr/",
    logo: "/img/logo-school-upem.svg",
  },
  {
    name: "Universite de Montpellier",
    href: "http://www.umontpellier.fr/",
    logo: "/img/logo-school-universite-montpellier.svg",
  },
  {
    name: "Universite de Franche-Comte",
    href: "http://www.univ-fcomte.fr/",
    logo: "/img/logo-school-ufc.svg",
  },
  {
    name: "Universite Toulouse III",
    href: "http://www.univ-tlse3.fr/",
    logo: "/img/logo-school-universite-toulouse3.svg",
  },
  {
    name: "Universite Paris-Sud",
    href: "http://www.u-psud.fr/",
    logo: "/img/logo-school-upsud.svg",
  },
]

export const content: Record<Language, SiteContent> = {
  fr: {
    meta: {
      title: "Edukera",
      description:
        "Edukera est un assistant de demonstration dedie a l'enseignement de la logique et des mathematiques.",
    },
    nav: {
      benefits: "Avantages",
      teachers: "Pour les enseignants",
      usedBy: "Utilisee a",
      launchApp: "Acceder a l'application",
    },
    hero: {
      eyebrow: "Assistant de preuve pour l'enseignement",
      title:
        "Un assistant de demonstration dedie a l'enseignement de la Logique et des Maths",
      highlighted: ["assistant", "enseignement", "Logique", "Maths"],
      description:
        "Edukera transforme la preuve mathematique en experience interactive : les etudiants construisent, justifient et comprennent chaque etape.",
      launchApp: "Acceder a l'application",
      launchDoc: "Voir l'axiomatique",
      learnMore: "En savoir plus",
      discover: "Cliquer pour decouvrir l'interface de demonstration",
      exerciseImage: "/img/exercise_fr.png",
    },
    benefits: {
      title: "Avantages pedagogiques",
      items: [
        {
          title: "Former",
          description:
            "L'etudiant comprend comment fonctionne une demonstration mathematique grace a l'ergonomie de la copie numerique.",
          icon: "/img/exercise.svg",
        },
        {
          title: "Clarifier",
          description:
            "Toutes les regles de calcul et de raisonnement necessaires sont mises a disposition dans la boite a theoremes.",
          icon: "/img/bulb.svg",
        },
        {
          title: "Entrainer",
          description:
            "L'etudiant approfondit sa maitrise des notions et augmente le nombre d'exercices resolus grace a l'assistance fournie.",
          icon: "/img/lightning.svg",
        },
      ],
    },
    teachers: {
      title: "Creez une classe et suivez l'activite des etudiants",
      bullets: [
        "Choisissez les exercices",
        "Integrez nativement la classe au LMS (Moodle, Canvas, ...)",
        "Creez des devoirs a la maison ou sur table",
        "Accedez aux rapports d'activite des etudiants",
      ],
      button: "Creer une classe",
      price: "10€",
      priceDetail: "HT / an / etudiant",
      limit: "Jusqu'a 90 etudiants.",
      footerBefore: "Au dela de 90 etudiants,",
      footerLink: "nous contacter",
    },
    quote: {
      before: "Les mathematiques sont un jeu qui s'exerce selon des ",
      highlight: "regles simples",
      after:
        " avec des symboles qui n'ont en soi aucune importance particuliere.",
      author: "David Hilbert",
    },
    train: {
      title: "Entrainer",
      description:
        "Actuellement 500+ exercices dans trois thematiques sont disponibles, et d'autres sont en preparation.",
      chapters: [
        {
          title: "Calcul algebrique",
          description:
            "L'etudiant apprend a mener des calculs algebriques avec les operations fondamentales.",
          icon: "/img/operators.svg",
        },
        {
          title: "Logique",
          description:
            "L'etudiant maitrise les elements fondamentaux de la deduction naturelle : connecteurs, quantificateurs et logique classique.",
          icon: "/img/puzzle.svg",
        },
        {
          title: "Ensembles",
          description:
            "L'etudiant maitrise les proprietes des objets mathematiques fondamentaux : relations, fonctions et ensembles.",
          icon: "/img/sets.svg",
        },
      ],
    },
    usedBy: {
      title: "Utilisee a",
      schools,
    },
    coq: {
      prefix: "Edukera embarque",
      link: "l'assistant de preuve Coq",
      suffix: "developpe par Inria.",
    },
    footer: {
      social: "Reseaux sociaux",
      contact: "Contact",
      legal: "Mentions legales",
      terms: "Conditions generales",
      copyright: "© edukera 2013 - 2026",
    },
    legal: {
      title: "Mentions legales",
      editor: "Editeur du site",
      company: [
        "edukera SAS",
        "Societe par actions simplifiee au capital de 26 417,00 euros",
        "RCS de Nanterre : 793 014 333",
        "Numero de TVA intracommunautaire : FR 59 793014333",
        "Email : contact@edukera.com",
        "Directeur de publication : Benoit Rognier",
      ],
      headquarters: "Siege social",
      address: ["84, rue Perronet", "92 200 Neuilly-sur-Seine"],
      hosting: "Hebergement",
      hostingDetails: [
        "1&1 Internet SARL",
        "7, place de la Gare BP 70109, 57201 Sarreguemines Cedex",
      ],
    },
    terms: {
      title: "Conditions generales",
      intro: [
        "Derniere mise a jour : 1er janvier 2018",
        "Ces conditions generales regissent votre relation avec le site web app.edukera.com, gere par Edukera.",
        "Veuillez lire ces Conditions attentivement avant d'utiliser le Service.",
      ],
      sections: [
        {
          title: "Achats",
          paragraphs: [
            "Si vous souhaitez acheter un produit ou service, certaines informations pertinentes a l'achat peuvent vous etre demandees.",
            "Nous nous reservons le droit de refuser ou d'annuler une commande en cas d'erreur, d'indisponibilite, de fraude ou de transaction suspecte.",
          ],
        },
        {
          title: "Abonnements",
          paragraphs: [
            "Certains aspects du Service sont fournis par abonnement et factures par anticipation selon un cycle annuel.",
            "L'abonnement est renouvele automatiquement sauf annulation par l'utilisateur ou par Edukera.",
          ],
        },
        {
          title: "Comptes",
          paragraphs: [
            "Lorsque vous creez un compte, vous devez fournir des informations exactes, completes et a jour.",
            "Vous etes responsable de la protection de votre mot de passe et de toute activite realisee avec votre compte.",
          ],
        },
        {
          title: "Propriete intellectuelle",
          paragraphs: [
            "Le Service et son contenu original restent la propriete exclusive d'Edukera et de ses concedants.",
          ],
        },
        {
          title: "Liens vers d'autres sites Web",
          paragraphs: [
            "Le Service peut contenir des liens vers des sites tiers qui ne sont ni possedes ni controles par Edukera.",
          ],
        },
        {
          title: "Loi applicable",
          paragraphs: [
            "Ces conditions sont regies et interpretees conformement aux lois francaises.",
          ],
        },
        {
          title: "Coordonnees",
          paragraphs: [
            "Pour toute question au sujet de ces Conditions, contactez-nous a contact@edukera.com.",
          ],
        },
      ],
    },
  },
  en: {
    meta: {
      title: "Edukera",
      description:
        "Edukera is a proof assistant dedicated to teaching logic and mathematics.",
    },
    nav: {
      benefits: "Benefits",
      teachers: "For teachers",
      usedBy: "Used at",
      launchApp: "Launch application",
    },
    hero: {
      eyebrow: "Proof assistant for education",
      title: "Teach Logic and Math with a proof assistant",
      highlighted: ["Logic", "Math", "proof assistant"],
      description:
        "Edukera turns mathematical proof into an interactive learning experience where students build, justify and understand every step.",
      launchApp: "Launch application",
      launchDoc: "See axiomatics",
      learnMore: "Learn more",
      discover: "Click to discover the proof assistant interface",
      exerciseImage: "/img/exercise_en.png",
    },
    benefits: {
      title: "Pedagogical benefits",
      items: [
        {
          title: "Develop",
          description:
            "Students learn how mathematical proof works thanks to the digital paper interface.",
          icon: "/img/exercise.svg",
        },
        {
          title: "Clarify",
          description:
            "All calculus and reasoning rules needed to solve exercises are available in the theorem box.",
          icon: "/img/bulb.svg",
        },
        {
          title: "Practice",
          description:
            "Students master studied notions by solving more exercises with assistance from the digital paper.",
          icon: "/img/lightning.svg",
        },
      ],
    },
    teachers: {
      title: "Create a class and monitor students activity",
      bullets: [
        "Select exercises",
        "Add the class to your LMS (Moodle, Canvas, ...)",
        "Create homework assignments and exams",
        "Monitor your students activity with detailed reports",
      ],
      button: "Create a class",
      price: "10€",
      priceDetail: "excl. tax / year / student",
      limit: "Up to 90 students.",
      footerBefore: "Beyond 90 students, please",
      footerLink: "contact us",
    },
    quote: {
      before: "Mathematics is a game played according to certain ",
      highlight: "simple rules",
      after: " with meaningless marks on paper.",
      author: "David Hilbert",
    },
    train: {
      title: "Practice",
      description:
        "Currently 500+ exercises in three themes are available, with more in preparation.",
      chapters: [
        {
          title: "Calculus",
          description:
            "Students develop algebraic calculation skills with fundamental operations.",
          icon: "/img/operators.svg",
        },
        {
          title: "Logic",
          description:
            "Students master natural deduction fundamentals: connectives, quantifiers and classical logic.",
          icon: "/img/puzzle.svg",
        },
        {
          title: "Sets",
          description:
            "Students master fundamental mathematical objects such as relations, functions and sets.",
          icon: "/img/sets.svg",
        },
      ],
    },
    usedBy: {
      title: "Used at",
      schools,
    },
    coq: {
      prefix: "Edukera embeds",
      link: "the Coq proof assistant",
      suffix: "developed by Inria.",
    },
    footer: {
      social: "Social",
      contact: "Contact",
      legal: "Legal",
      terms: "Terms and Conditions",
      copyright: "© edukera 2013 - 2026",
    },
    legal: {
      title: "Legal",
      editor: "Publisher",
      company: [
        "edukera SAS",
        "Simplified joint-stock company with share capital of 26,417.00 euros",
        "RCS Nanterre: 793 014 333",
        "VAT number: FR 59 793014333",
        "Email: contact@edukera.com",
        "Publishing director: Benoit Rognier",
      ],
      headquarters: "Registered office",
      address: ["84, rue Perronet", "92 200 Neuilly-sur-Seine, France"],
      hosting: "Hosting",
      hostingDetails: [
        "1&1 Internet SARL",
        "7, place de la Gare BP 70109, 57201 Sarreguemines Cedex, France",
      ],
    },
    terms: {
      title: "Terms and Conditions",
      intro: [
        "Last updated: January 1, 2018",
        "These Terms and Conditions govern your relationship with the app.edukera.com website operated by Edukera.",
        "Please read these Terms and Conditions carefully before using the Service.",
      ],
      sections: [
        {
          title: "Purchases",
          paragraphs: [
            "If you purchase a product or service, you may be asked to supply information relevant to the purchase.",
            "We reserve the right to refuse or cancel any order in case of error, unavailability, fraud or suspected unauthorized transaction.",
          ],
        },
        {
          title: "Subscriptions",
          paragraphs: [
            "Some parts of the Service are billed on a subscription basis in advance on an annual billing cycle.",
            "At the end of each billing cycle, the subscription renews automatically unless cancelled by you or by Edukera.",
          ],
        },
        {
          title: "Accounts",
          paragraphs: [
            "When creating an account, you must provide accurate, complete and current information.",
            "You are responsible for safeguarding your password and for any activity under your account.",
          ],
        },
        {
          title: "Intellectual Property",
          paragraphs: [
            "The Service and its original content remain the exclusive property of Edukera and its licensors.",
          ],
        },
        {
          title: "Links To Other Web Sites",
          paragraphs: [
            "The Service may contain links to third-party websites or services that are not owned or controlled by Edukera.",
          ],
        },
        {
          title: "Governing Law",
          paragraphs: [
            "These Terms are governed and construed in accordance with the laws of France.",
          ],
        },
        {
          title: "Contact Us",
          paragraphs: [
            "If you have any questions about these Terms, contact us at contact@edukera.com.",
          ],
        },
      ],
    },
  },
}

export function isLanguage(value: string | null): value is Language {
  return LANGUAGES.includes(value as Language)
}
