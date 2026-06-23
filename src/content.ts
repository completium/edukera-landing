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
    discoverDescription: string
    exerciseImage: string
    tutorialBadge: string
    tutorialCta: string
    justifHypothesis: string
    justifReference: string
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
    name: "Sorbonne Université",
    href: "http://www.upmc.fr/",
    logo: "/img/logo-school-sorbonne.svg",
  },
  {
    name: "Université de Strasbourg",
    href: "http://www.unistra.fr/index.php?id=accueil",
    logo: "/img/logo-school-universite-strasbourg.svg",
  },
  {
    name: "Université Paris Diderot",
    href: "http://www.univ-paris-diderot.fr/",
    logo: "/img/logo-school-up7.svg",
  },
  {
    name: "Université Paris-Est Marne-la-Vallée",
    href: "http://www.u-pem.fr/",
    logo: "/img/logo-school-upem.svg",
  },
  {
    name: "Université de Montpellier",
    href: "http://www.umontpellier.fr/",
    logo: "/img/logo-school-universite-montpellier.svg",
  },
  {
    name: "Université de Franche-Comté",
    href: "http://www.univ-fcomte.fr/",
    logo: "/img/logo-school-ufc.svg",
  },
  {
    name: "Université Toulouse III",
    href: "http://www.univ-tlse3.fr/",
    logo: "/img/logo-school-universite-toulouse3.svg",
  },
  {
    name: "Université Paris-Sud",
    href: "http://www.u-psud.fr/",
    logo: "/img/logo-school-upsud.svg",
  },
]

export const content: Record<Language, SiteContent> = {
  fr: {
    meta: {
      title: "Edukera",
      description:
        "Edukera est un assistant de démonstration dédié à l'enseignement de la logique et des mathématiques.",
    },
    nav: {
      benefits: "Avantages",
      teachers: "Pour les enseignants",
      usedBy: "Utilisée à",
      launchApp: "Accéder à l'application",
    },
    hero: {
      eyebrow: "Assistant de preuve pour l'enseignement",
      title:
        "Un assistant de démonstration dédié à l'enseignement de la Logique et des Maths",
      highlighted: ["assistant", "enseignement", "Logique", "Maths"],
      description:
        "Edukera transforme la preuve mathématique en expérience interactive : les étudiants construisent, justifient et comprennent chaque étape.",
      launchApp: "Accéder à l'application",
      launchDoc: "Voir l'axiomatique",
      learnMore: "En savoir plus",
      discover: "Découvrir l'interface de l'assistant de preuve",
      discoverDescription:
        "Découvrez l'assistant pour construire la preuve de A ⇒ (B ⇒ A) ci-dessous, à l'aide d'un tutoriel guidé pas à pas.",
      exerciseImage: "/img/exercise_fr.png",
    tutorialBadge: "Tutoriel guidé pas à pas",
    tutorialCta: "Démarrer le tutoriel guidé",
    justifHypothesis: "hypothèse",
    justifReference: "référence",
    },
    benefits: {
      title: "Avantages pédagogiques",
      items: [
        {
          title: "Former",
          description:
            "L'étudiant comprend comment fonctionne une démonstration mathématique grâce à l'ergonomie de la copie numérique.",
          icon: "/img/exercise.svg",
        },
        {
          title: "Clarifier",
          description:
            "Toutes les règles de calcul et de raisonnement nécessaires sont mises à disposition dans la boîte à théorèmes.",
          icon: "/img/bulb.svg",
        },
        {
          title: "Entraîner",
          description:
            "L'étudiant approfondit sa maîtrise des notions et augmente le nombre d'exercices résolus grâce à l'assistance fournie.",
          icon: "/img/lightning.svg",
        },
      ],
    },
    teachers: {
      title: "Créez une classe et suivez l'activité des étudiants",
      bullets: [
        "Choisissez les exercices",
        "Intégrez nativement la classe au LMS (Moodle, Canvas, ...)",
        "Créez des devoirs à la maison ou sur table",
        "Accédez aux rapports d'activité des étudiants",
      ],
      button: "Créer une classe",
      price: "10€",
      priceDetail: "HT / an / étudiant",
      limit: "Jusqu'à 90 étudiants.",
      footerBefore: "Au-delà de 90 étudiants,",
      footerLink: "nous contacter",
    },
    quote: {
      before: "Les mathématiques sont un jeu qui s'exerce selon des ",
      highlight: "règles simples",
      after:
        " avec des symboles qui n'ont en soi aucune importance particulière.",
      author: "David Hilbert",
    },
    train: {
      title: "Entraîner",
      description:
        "Actuellement 500+ exercices dans trois thématiques sont disponibles, et d'autres sont en préparation.",
      chapters: [
        {
          title: "Calcul algébrique",
          description:
            "L'étudiant apprend à mener des calculs algébriques avec les opérations fondamentales.",
          icon: "/img/operators.svg",
        },
        {
          title: "Logique",
          description:
            "L'étudiant maîtrise les éléments fondamentaux de la déduction naturelle : connecteurs, quantificateurs et logique classique.",
          icon: "/img/puzzle.svg",
        },
        {
          title: "Ensembles",
          description:
            "L'étudiant maîtrise les propriétés des objets mathématiques fondamentaux : relations, fonctions et ensembles.",
          icon: "/img/sets.svg",
        },
      ],
    },
    usedBy: {
      title: "Utilisée à",
      schools,
    },
    coq: {
      prefix: "Edukera embarque",
      link: "l'assistant de preuve Coq",
      suffix: "développé par Inria.",
    },
    footer: {
      social: "Réseaux sociaux",
      contact: "Contact",
      legal: "Mentions légales",
      terms: "Conditions générales",
      copyright: "© edukera 2013 - 2026",
    },
    legal: {
      title: "Mentions légales",
      editor: "Éditeur du site",
      company: [
        "edukera SAS",
        "Société par actions simplifiée au capital de 26 417,00 euros",
        "RCS de Nanterre : 793 014 333",
        "Numéro de TVA intracommunautaire : FR 59 793014333",
        "Email : contact@edukera.com",
        "Directeur de publication : Benoit Rognier",
      ],
      headquarters: "Siège social",
      address: ["84, rue Perronet", "92 200 Neuilly-sur-Seine"],
      hosting: "Hébergement",
      hostingDetails: [
        "1&1 Internet SARL",
        "7, place de la Gare BP 70109, 57201 Sarreguemines Cedex",
      ],
    },
    terms: {
      title: "Conditions générales",
      intro: [
        "Dernière mise à jour : 1er janvier 2018",
        "Ces conditions générales régissent votre relation avec le site web app.edukera.com, géré par Edukera.",
        "Veuillez lire ces Conditions attentivement avant d'utiliser le Service.",
      ],
      sections: [
        {
          title: "Achats",
          paragraphs: [
            "Si vous souhaitez acheter un produit ou service, certaines informations pertinentes à l'achat peuvent vous être demandées.",
            "Nous nous réservons le droit de refuser ou d'annuler une commande en cas d'erreur, d'indisponibilité, de fraude ou de transaction suspecte.",
          ],
        },
        {
          title: "Abonnements",
          paragraphs: [
            "Certains aspects du Service sont fournis par abonnement et facturés par anticipation selon un cycle annuel.",
            "L'abonnement est renouvelé automatiquement sauf annulation par l'utilisateur ou par Edukera.",
          ],
        },
        {
          title: "Comptes",
          paragraphs: [
            "Lorsque vous créez un compte, vous devez fournir des informations exactes, complètes et à jour.",
            "Vous êtes responsable de la protection de votre mot de passe et de toute activité réalisée avec votre compte.",
          ],
        },
        {
          title: "Propriété intellectuelle",
          paragraphs: [
            "Le Service et son contenu original restent la propriété exclusive d'Edukera et de ses concédants.",
          ],
        },
        {
          title: "Liens vers d'autres sites Web",
          paragraphs: [
            "Le Service peut contenir des liens vers des sites tiers qui ne sont ni possédés ni contrôlés par Edukera.",
          ],
        },
        {
          title: "Loi applicable",
          paragraphs: [
            "Ces conditions sont régies et interprétées conformément aux lois françaises.",
          ],
        },
        {
          title: "Coordonnées",
          paragraphs: [
            "Pour toute question au sujet de ces Conditions, contactez-nous à contact@edukera.com.",
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
      discover: "Discover the proof assistant interface",
      discoverDescription:
        "Discover the assistant to build the proof of A ⇒ (B ⇒ A) below, with a step-by-step guided tutorial.",
      exerciseImage: "/img/exercise_en.png",
    tutorialBadge: "Step-by-step guided tutorial",
    tutorialCta: "Start the guided tutorial",
    justifHypothesis: "hypothesis",
    justifReference: "reference",
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
