import { useMemo, useState } from "react"

import { cn } from "@/lib/utils"

type PropName = "A" | "B"

type Token =
  | { kind: "prop"; name: PropName }
  | { kind: "text"; text: string }

type ProofLine = {
  num: number
  depth: number
  formula: Token[]
  refs?: string
  rule?: string
  justificationKey?: "hypothesis" | "reference"
}

const PROOF_LINES: ProofLine[] = [
  {
    num: 1,
    depth: 1,
    formula: [{ kind: "prop", name: "A" }],
    justificationKey: "hypothesis",
  },
  {
    num: 2,
    depth: 2,
    formula: [{ kind: "prop", name: "B" }],
    justificationKey: "hypothesis",
  },
  {
    num: 3,
    depth: 2,
    formula: [{ kind: "prop", name: "A" }],
    refs: "(1)",
    justificationKey: "reference",
  },
  {
    num: 4,
    depth: 1,
    formula: [
      { kind: "prop", name: "B" },
      { kind: "text", text: " ⇒ " },
      { kind: "prop", name: "A" },
    ],
    refs: "(2)…(3)",
    rule: "(⇒I)",
  },
  {
    num: 5,
    depth: 0,
    formula: [
      { kind: "prop", name: "A" },
      { kind: "text", text: " ⇒ (" },
      { kind: "prop", name: "B" },
      { kind: "text", text: " ⇒ " },
      { kind: "prop", name: "A" },
      { kind: "text", text: " )" },
    ],
    refs: "(1)…(4)",
    rule: "(⇒I)",
  },
]

const SCOPES = [
  { from: 0, to: 3, depth: 1 },
  { from: 1, to: 2, depth: 2 },
]

const ROW_HEIGHT = 36
const NUM_WIDTH = 32
const SCOPE_WIDTH = 12
const SCOPE_STEP = 18
const JUSTIF_REFS_WIDTH = 72
const JUSTIF_LABEL_WIDTH = 80

/** Couleurs du thème sombre de l'app Edukera (.dark-theme .proofdiv) */
const PROOF_BG = "#2c2c2c"
const PROOF_BORDER = "#4e4e4e"
const EDUKERA_BLUE = "#00ace7"

function ScopeBracket({
  top,
  height,
  left,
}: {
  top: number
  height: number
  left: number
}) {
  return (
    <div
      className="pointer-events-none absolute z-10"
      style={{ top, left, height, width: SCOPE_WIDTH }}
    >
      <div className="relative h-full">
        <div
          className="absolute left-0 top-0 h-2 w-2.5 border-l-2 border-t-2"
          style={{ borderColor: EDUKERA_BLUE }}
        />
        <div
          className="absolute bottom-2 left-0 top-2 border-l-2"
          style={{ borderColor: EDUKERA_BLUE }}
        />
        <div
          className="absolute bottom-0 left-0 h-2 w-2.5 border-b-2 border-l-2"
          style={{ borderColor: EDUKERA_BLUE }}
        />
      </div>
    </div>
  )
}

function FormulaTokens({
  tokens,
  hoveredProp,
  onHover,
}: {
  tokens: Token[]
  hoveredProp: PropName | null
  onHover: (name: PropName | null) => void
}) {
  return (
    <>
      {tokens.map((token, idx) =>
        token.kind === "prop" ? (
          <span
            key={`${token.name}-${idx}`}
            onMouseEnter={() => onHover(token.name)}
            onMouseLeave={() => onHover(null)}
            className={cn(
              "cursor-default rounded-sm px-0.5 transition-colors",
              hoveredProp === token.name
                ? "bg-primary/20 text-primary"
                : "text-foreground"
            )}
          >
            {token.name}
          </span>
        ) : (
          <span key={`t-${idx}`}>{token.text}</span>
        )
      )}
    </>
  )
}

export function ProofMockup({
  className,
  labels,
}: {
  className?: string
  labels: {
    hypothesis: string
    reference: string
  }
}) {
  const [hoveredProp, setHoveredProp] = useState<PropName | null>(null)

  const lines = useMemo(
    () =>
      PROOF_LINES.map((line) => ({
        ...line,
        justification:
          line.justificationKey === "hypothesis"
            ? labels.hypothesis
            : line.justificationKey === "reference"
              ? labels.reference
              : undefined,
      })),
    [labels.hypothesis, labels.reference]
  )

  const scopeLeft = (depth: number) =>
    NUM_WIDTH + (depth - 1) * SCOPE_STEP + 2

  const formulaPadding = (depth: number) =>
    depth === 0 ? 4 : depth * SCOPE_STEP + 4

  return (
    <div
      className={cn("w-full overflow-hidden rounded-lg border", className)}
      aria-hidden
      style={{
        fontFamily: "Georgia, 'Times New Roman', Times, serif",
        backgroundColor: PROOF_BG,
        borderColor: PROOF_BORDER,
      }}
    >
      <div className="flex">
        {/* Preuves : numéros à gauche, crochets, formules */}
        <div className="relative min-w-0 flex-1 py-2.5 pl-2.5 pr-3">
          {SCOPES.map((scope) => (
            <ScopeBracket
              key={`${scope.depth}-${scope.from}`}
              top={scope.from * ROW_HEIGHT + 10}
              height={(scope.to - scope.from + 1) * ROW_HEIGHT - 4}
              left={scopeLeft(scope.depth)}
            />
          ))}

          {lines.map((line) => (
            <div
              key={line.num}
              className="group grid items-center transition-colors hover:bg-primary/10"
              style={{
                gridTemplateColumns: `${NUM_WIDTH}px 1fr`,
                minHeight: ROW_HEIGHT,
              }}
            >
              <span className="text-sm tabular-nums text-muted-foreground">
                ({line.num})
              </span>
              <span
                className="italic text-[17px] leading-none text-foreground"
                style={{ paddingLeft: formulaPadding(line.depth) }}
              >
                <FormulaTokens
                  tokens={line.formula}
                  hoveredProp={hoveredProp}
                  onHover={setHoveredProp}
                />
              </span>
            </div>
          ))}
        </div>

        <div className="w-px shrink-0" style={{ backgroundColor: EDUKERA_BLUE }} />

        {/* Justifications : refs | nature (hypothèse, référence, règle) */}
        <div
          className="flex shrink-0 flex-col py-2.5 pl-2.5 pr-2.5"
          style={{ width: JUSTIF_REFS_WIDTH + JUSTIF_LABEL_WIDTH + 16 }}
        >
          {lines.map((line) => (
            <div
              key={line.num}
              className="group grid items-center transition-colors hover:bg-primary/10"
              style={{
                gridTemplateColumns: `${JUSTIF_REFS_WIDTH}px ${JUSTIF_LABEL_WIDTH}px`,
                minHeight: ROW_HEIGHT,
              }}
            >
              <span className="px-1 text-center text-sm not-italic tabular-nums text-muted-foreground/75">
                {line.refs ?? ""}
              </span>
              <span className="text-left text-sm italic leading-tight text-muted-foreground">
                {line.rule ? (
                  <span className="not-italic text-foreground">{line.rule}</span>
                ) : (
                  line.justification
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
