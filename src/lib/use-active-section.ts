import { useEffect, useState } from "react"

export function useActiveSection(sectionIds: readonly string[], offset = 120) {
  const [activeSection, setActiveSection] = useState<string | null>(null)

  useEffect(() => {
    const update = () => {
      const scrollPosition = window.scrollY + offset
      let active: string | null = null

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element && element.offsetTop <= scrollPosition) {
          active = id
        }
      }

      setActiveSection(active)
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [offset, sectionIds])

  return activeSection
}
