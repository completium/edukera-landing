import { useEffect, useMemo, useState } from "react"
import {
  BookOpenCheckIcon,
  CheckCircle2Icon,
  ExternalLinkIcon,
  MailIcon,
} from "lucide-react"

import { content, LANGUAGES, type Language, type SiteContent } from "@/content"
import { detectInitialLanguage, persistLanguage } from "@/lib/language"
import { cn } from "@/lib/utils"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Marquee } from "@/components/ui/marquee"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"

const appUrl = "https://app.edukera.com/"
const docsUrl = "https://app.edukera.com/?doc=1"
const quickTourUrl = "https://app.edukera.com/?qt=1"
const contactHref = "mailto:contact@edukera.com"

export function App() {
  const [language, setLanguage] = useState<Language>(() =>
    detectInitialLanguage()
  )
  const copy = content[language]
  const route = useRoute()

  useEffect(() => {
    persistLanguage(language)
    document.title = copy.meta.title
    setMetaDescription(copy.meta.description)
  }, [copy, language])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader
        copy={copy}
        language={language}
        route={route}
        onLanguageChange={setLanguage}
      />
      {route === "legal" ? (
        <LegalPage copy={copy} />
      ) : route === "terms" ? (
        <TermsPage copy={copy} />
      ) : (
        <LandingPage copy={copy} />
      )}
      <SiteFooter copy={copy} />
    </div>
  )
}

function useRoute() {
  return useMemo(() => {
    const path = window.location.pathname.replace(/\/$/, "")

    if (path === "/legal") {
      return "legal"
    }

    if (path === "/tac" || path === "/terms") {
      return "terms"
    }

    return "home"
  }, [])
}

function useIsScrolled(threshold = 80) {
  const [isScrolled, setIsScrolled] = useState(
    () => typeof window !== "undefined" && window.scrollY > threshold
  )

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > threshold)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [threshold])

  return isScrolled
}

function setMetaDescription(description: string) {
  const existing = document.querySelector<HTMLMetaElement>(
    'meta[name="description"]'
  )

  if (existing) {
    existing.content = description
    return
  }

  const meta = document.createElement("meta")
  meta.name = "description"
  meta.content = description
  document.head.append(meta)
}

function SiteHeader({
  copy,
  language,
  route,
  onLanguageChange,
}: {
  copy: SiteContent
  language: Language
  route: string
  onLanguageChange: (language: Language) => void
}) {
  const isHome = route === "home"
  const isScrolled = useIsScrolled()
  const showLaunchApp = !isHome || isScrolled

  return (
    <header
      className={cn(
        "z-40 border-b transition-colors",
        isHome
          ? cn(
              "dark fixed inset-x-0 top-0 text-foreground",
              isScrolled
                ? "border-border/60 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/85"
                : "border-transparent bg-transparent"
            )
          : "sticky top-0 bg-background/90 backdrop-blur supports-backdrop-filter:bg-background/80"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <a href="/" className="flex items-center gap-3" aria-label="Edukera">
          <img src="/img/logo.png" alt="Edukera" className="h-10 w-auto" />
        </a>

        {isHome && (
          <NavigationMenu className="hidden md:flex" viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#intro"
                  className={navigationMenuTriggerStyle()}
                >
                  {copy.nav.benefits}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#price"
                  className={navigationMenuTriggerStyle()}
                >
                  {copy.nav.teachers}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#used_by"
                  className={navigationMenuTriggerStyle()}
                >
                  {copy.nav.usedBy}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        )}

        <div className="flex items-center gap-2">
          <div className="flex rounded-lg border bg-muted p-1">
            {LANGUAGES.map((candidate) => (
              <button
                key={candidate}
                type="button"
                onClick={() => onLanguageChange(candidate)}
                className={`rounded-md px-2 py-1 text-xs font-medium uppercase transition ${
                  language === candidate
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {candidate}
              </button>
            ))}
          </div>
          {showLaunchApp && (
            <Button asChild>
              <a href={appUrl} target="_blank" rel="noreferrer">
                {copy.nav.launchApp}
                <ExternalLinkIcon data-icon="inline-end" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

function LandingPage({ copy }: { copy: SiteContent }) {
  return (
    <main>
      <HeroSection copy={copy} />
      <BenefitsSection copy={copy} />
      <TeachersSection copy={copy} />
      <QuoteSection copy={copy} />
      <TrainingSection copy={copy} />
      <UsedBySection copy={copy} />
      <CoqSection copy={copy} />
    </main>
  )
}

function HeroSection({ copy }: { copy: SiteContent }) {
  return (
    <section
      id="index-banner"
      className="dark relative overflow-hidden bg-background text-foreground"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,23,32,0.92), rgba(15,23,32,0.55)), url('/img/chemical.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-4 pt-24 pb-20 md:grid-cols-2 md:px-8">
        <div className="flex flex-col gap-6">
          <Badge className="w-fit" variant="secondary">
            {copy.hero.eyebrow}
          </Badge>
          <div className="flex flex-col gap-4">
            <h1 className="font-display text-4xl font-semibold tracking-tight text-balance md:text-6xl">
              {copy.hero.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              {copy.hero.description}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <a href={appUrl} target="_blank" rel="noreferrer">
                {copy.hero.launchApp}
                <ExternalLinkIcon data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={docsUrl} target="_blank" rel="noreferrer">
                {copy.hero.launchDoc}
                <ExternalLinkIcon data-icon="inline-end" />
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="#intro">{copy.hero.learnMore}</a>
            </Button>
          </div>
        </div>

        <Card className="border-transparent bg-card/60 shadow-2xl ring-0">
          <CardHeader>
            <CardTitle>{copy.hero.discover}</CardTitle>
            <CardDescription>
              {copy.hero.highlighted.join(" · ")}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <a
              href={quickTourUrl}
              target="_blank"
              rel="noreferrer"
              className="block overflow-hidden rounded-xl border bg-primary"
              aria-label={copy.hero.discover}
            >
              <AspectRatio ratio={16 / 9}>
                <div className="relative size-full">
                  <img
                    src={copy.hero.exerciseImage}
                    alt={copy.hero.discover}
                    className="size-full object-cover"
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    <img src="/img/play.svg" alt="" className="size-24" />
                  </div>
                </div>
              </AspectRatio>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

function BenefitsSection({ copy }: { copy: SiteContent }) {
  return (
    <section id="intro" className="px-4 py-20 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <SectionHeader title={copy.benefits.title} />
        <div className="grid gap-5 md:grid-cols-3">
          {copy.benefits.items.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="grid size-20 shrink-0 place-items-center rounded-full bg-primary/10">
                    <img
                      src={feature.icon}
                      alt=""
                      className="size-12 object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function TeachersSection({ copy }: { copy: SiteContent }) {
  return (
    <section
      id="price"
      className="dark px-4 py-20 text-foreground md:px-8"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.82), rgba(0,0,0,0.36)), url('/img/desk-small.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="flex flex-col justify-center gap-6">
          <Badge className="w-fit" variant="secondary">
            {copy.nav.teachers}
          </Badge>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
            {copy.teachers.title}
          </h2>
          <div className="grid gap-3">
            {copy.teachers.bullets.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
          <div>
            <Button asChild size="lg">
              <a href={appUrl} target="_blank" rel="noreferrer">
                {copy.teachers.button}
                <ExternalLinkIcon data-icon="inline-end" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function QuoteSection({ copy }: { copy: SiteContent }) {
  return (
    <section
      id="quote"
      className="dark px-4 py-20 text-foreground md:px-8"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,23,32,0.88), rgba(15,23,32,0.88)), url('/img/parallax1.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <blockquote className="font-display text-3xl font-light leading-tight text-balance md:text-5xl">
          “{copy.quote.before}
          <span className="text-primary">{copy.quote.highlight}</span>
          {copy.quote.after}”
        </blockquote>
        <Button asChild variant="outline" className="w-fit">
          <a
            href="https://fr.wikipedia.org/wiki/David_Hilbert"
            target="_blank"
            rel="noreferrer"
          >
            {copy.quote.author}
            <ExternalLinkIcon data-icon="inline-end" />
          </a>
        </Button>
      </div>
    </section>
  )
}

function TrainingSection({ copy }: { copy: SiteContent }) {
  return (
    <section id="train" className="bg-muted/50 px-4 py-20 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <SectionHeader
          title={copy.train.title}
          description={copy.train.description}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {copy.train.chapters.map((chapter) => (
            <Card key={chapter.title}>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="grid size-20 shrink-0 place-items-center rounded-full bg-background">
                    <img
                      src={chapter.icon}
                      alt=""
                      className="size-12 object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <CardTitle>{chapter.title}</CardTitle>
                    <CardDescription>{chapter.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function UsedBySection({ copy }: { copy: SiteContent }) {
  return (
    <section
      id="used_by"
      className="px-4 py-20 md:px-8"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.88), rgba(255,255,255,0.78)), url('/img/amphi-small.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <SectionHeader title={copy.usedBy.title} />
        <div className="relative [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <Marquee gap="1.25rem" duration="40s">
            {copy.usedBy.schools.map((school) => (
              <a
                key={school.name}
                href={school.href}
                target="_blank"
                rel="noreferrer"
                className="flex w-56 shrink-0 items-center justify-center rounded-xl bg-background/75 p-6 shadow-sm ring-1 ring-border transition hover:-translate-y-1 hover:shadow-md"
              >
                <img
                  src={school.logo}
                  alt={school.name}
                  className="h-20 max-w-full object-contain grayscale transition hover:grayscale-0"
                />
              </a>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}

function CoqSection({ copy }: { copy: SiteContent }) {
  return (
    <section className="border-y bg-card">
      <div className="mx-auto max-w-7xl px-4 py-4 md:px-8">
        <Alert className="rounded-none border-0 bg-transparent p-0 text-card-foreground">
          <BookOpenCheckIcon />
          <AlertTitle>
            {copy.coq.prefix}{" "}
            <a
              href="https://coq.inria.fr/"
              target="_blank"
              rel="noreferrer"
              className="text-primary"
            >
              {copy.coq.link}
            </a>
          </AlertTitle>
          <AlertDescription className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <span>{copy.coq.suffix}</span>
            <a href="https://www.inria.fr/" target="_blank" rel="noreferrer">
              <img
                src="/img/logo-inria-institutionnel-couleur.jpg"
                alt="Inria"
                className="h-10 w-auto"
              />
            </a>
          </AlertDescription>
        </Alert>
      </div>
    </section>
  )
}

function SectionHeader({
  title,
  description,
}: {
  title: string
  description?: string
}) {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-3 text-center">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}

function LegalPage({ copy }: { copy: SiteContent }) {
  return (
    <main className="px-4 py-16 md:px-8">
      <article className="mx-auto flex max-w-3xl flex-col gap-8">
        <PageTitle title={copy.legal.title} />
        <LegalBlock title={copy.legal.editor} lines={copy.legal.company} />
        <LegalBlock
          title={copy.legal.headquarters}
          lines={copy.legal.address}
        />
        <LegalBlock
          title={copy.legal.hosting}
          lines={copy.legal.hostingDetails}
        />
      </article>
    </main>
  )
}

function LegalBlock({ title, lines }: { title: string; lines: string[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 text-muted-foreground">
        {lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </CardContent>
    </Card>
  )
}

function TermsPage({ copy }: { copy: SiteContent }) {
  return (
    <main className="px-4 py-16 md:px-8">
      <article className="mx-auto flex max-w-3xl flex-col gap-8">
        <PageTitle title={copy.terms.title} />
        <Card>
          <CardContent className="flex flex-col gap-4 pt-(--card-spacing) text-muted-foreground">
            {copy.terms.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </CardContent>
        </Card>
        {copy.terms.sections.map((section) => (
          <Card key={section.title}>
            <CardHeader>
              <CardTitle>{section.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 text-muted-foreground">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </CardContent>
          </Card>
        ))}
      </article>
    </main>
  )
}

function PageTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-col gap-4">
      <Button asChild variant="link" className="w-fit px-0">
        <a href="/">Edukera</a>
      </Button>
      <h1 className="font-display text-4xl font-semibold tracking-tight md:text-6xl">
        {title}
      </h1>
    </div>
  )
}

function SiteFooter({ copy }: { copy: SiteContent }) {
  return (
    <footer id="contact" className="bg-foreground px-4 py-10 text-background md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8">
        <div className="grid gap-8 md:grid-cols-[1fr_auto_auto] md:items-start">
          <div className="flex flex-col gap-3">
            <img src="/img/logo.png" alt="Edukera" className="h-10 w-fit" />
            <p className="max-w-xl text-sm text-background/70">
              {copy.hero.description}
            </p>
            <Button
              asChild
              variant="outline"
              className="w-fit border-background/30 bg-transparent text-background hover:bg-background/10 hover:text-background"
            >
              <a href={contactHref}>
                <MailIcon data-icon="inline-start" />
                {copy.footer.contact}
              </a>
            </Button>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <h2 className="font-medium">{copy.footer.social}</h2>
            <a href="https://twitter.com/edukera" target="_blank" rel="noreferrer">
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/company/edukera"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <a href="http://utop.fr/blog/le-projet-sonate" target="_blank" rel="noreferrer">
            <img src="/img/anr.svg" alt="ANR Sonate" className="h-16 w-auto" />
          </a>
        </div>
        <Separator className="bg-background/20" />
        <div className="flex flex-col gap-3 text-sm text-background/70 md:flex-row md:items-center md:justify-between">
          <p>{copy.footer.copyright}</p>
          <div className="flex gap-4">
            <a href="/legal">{copy.footer.legal}</a>
            <a href="/tac">{copy.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
