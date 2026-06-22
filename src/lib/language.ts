import { isLanguage, type Language } from "@/content"

const STORAGE_KEY = "edukera-language"

export function detectInitialLanguage(): Language {
  const params = new URLSearchParams(window.location.search)
  const queryLanguage = params.get("lang")

  if (isLanguage(queryLanguage)) {
    window.localStorage.setItem(STORAGE_KEY, queryLanguage)
    return queryLanguage
  }

  const storedLanguage = window.localStorage.getItem(STORAGE_KEY)

  if (isLanguage(storedLanguage)) {
    return storedLanguage
  }

  return window.navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en"
}

export function persistLanguage(language: Language) {
  window.localStorage.setItem(STORAGE_KEY, language)
  document.documentElement.lang = language
}
