import { Letter } from "@/components/letter"
import { SquigglyDivider } from "@/components/squiggly-divider"
import { CTA } from "@/components/cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Letter />
      <SquigglyDivider />
      <CTA />
    </main>
  )
}
