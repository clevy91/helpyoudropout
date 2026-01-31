import { Mail, MessageSquare } from "lucide-react"

export function CTA() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 md:py-16">
      <div className="max-w-4xl">
<h2 className="font-black text-2xl md:text-3xl leading-[1] tracking-tight mb-3">
  <span className="block">Debating whether to drop out? </span>
  <span className="block">Need help with your parents?</span>
</h2>
        <p className="font-medium text-base md:text-lg text-foreground/70 leading-relaxed mb-6">
          I'll try my best to help jam on this topic. And if helpful... connect you and your parents with founders who did the same in their teens/20s and now run billion-dollar companies. I dropped out after freshman year at UIUC and work with 7 of them. Send me answers to the below questions.
        </p>

        <div className="space-y-3 mb-8">
          <div>
            <h3 className="font-black text-lg md:text-xl tracking-tight">
              What are you working on now?
            </h3>
            <p className="text-sm text-foreground/60">(max 5 sentences)</p>
          </div>

          <div>
            <h3 className="font-black text-lg md:text-xl tracking-tight">
              What cool stuff have you worked on in the past?
            </h3>
            <p className="text-sm text-foreground/60">(max 5 sentences)</p>
          </div>

          <div>
            <h3 className="font-black text-lg md:text-xl tracking-tight">
              Links about you and/or accomplishments
            </h3>
            <p className="text-sm text-foreground/60">Website, LinkedIn, and/or X</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <a 
            href={`mailto:cory@helpyoudropout.com?subject=Help%20Me%20Dropout&body=1.%20What%20are%20you%20working%20on%20now%3F%0A%0A%0A2.%20What%20cool%20stuff%20have%20you%20worked%20on%20in%20the%20past%3F%0A%0A%0A3.%20Links%20about%20you%20and%2For%20accomplishments%3A%0A`}
            className="inline-flex items-center gap-2.5 bg-white text-foreground border-2 border-foreground font-semibold text-base px-6 py-2.5 rounded-full hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            Email Me
          </a>
          <a 
            href={`sms:+16505059984&body=1.%20What%20are%20you%20working%20on%20now%3F%0A%0A2.%20What%20cool%20stuff%20have%20you%20worked%20on%20in%20the%20past%3F%0A%0A3.%20Links%20about%20you%20and%2For%20accomplishments%3A`}
            className="inline-flex items-center gap-2.5 bg-white text-foreground border-2 border-foreground font-semibold text-base px-6 py-2.5 rounded-full hover:bg-foreground hover:text-background hover:scale-105 transition-all duration-200"
          >
            <MessageSquare className="w-4 h-4" />
            Text Me
          </a>
        </div>
      </div>
    </section>
  )
}
