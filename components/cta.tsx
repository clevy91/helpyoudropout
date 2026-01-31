import { Mail, MessageSquare } from "lucide-react"

export function CTA() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-12 md:py-16">
      <div className="max-w-4xl">
<h2 className="font-black text-2xl md:text-3xl leading-[1] tracking-tight mb-3">
</h2>


<section className="max-w-2xl">
  <h1 className="text-4xl md:text-5xl font-black tracking-tight">
    Thinking about dropping out?
  </h1>

  <p className="mt-4 text-lg md:text-xl leading-relaxed text-neutral-700">
    Send me 3 answers. I’ll reply with thoughts — and if helpful, I’ll connect your parents with founders in their teens/20s running billion+ companies.
  </p>

  <ul className="mt-4 space-y-1 text-base md:text-lg text-neutral-700 leading-relaxed">
    <li>• I dropped out of UIUC CS after freshman year.</li>
    <li>• I work with and invested in 7 founders (teens/20s) running billion+ companies.</li>
    <li>• I work with many others on their way there.</li>
  </ul>

  <div className="mt-8 space-y-4">
    <h2 className="text-2xl font-black">Reply with:</h2>

    <ol className="space-y-3 text-lg font-semibold">
      <li>1) What are you working on now? <span className="font-normal text-neutral-600">(3–5 sentences)</span></li>
      <li>2) What cool stuff have you worked on in the past? <span className="font-normal text-neutral-600">(3–5 sentences)</span></li>
      <li>3) Links about you and/or accomplishments <span className="font-normal text-neutral-600">(X / LinkedIn / GitHub / site)</span></li>
    </ol>
  </div>

  <div className="mt-8 flex flex-wrap gap-3">
    <a 
      href={`sms:+16505059984&body=1.%20What%20are%20you%20working%20on%20now%3F%0A%0A2.%20What%20cool%20stuff%20have%20you%20worked%20on%20in%20the%20past%3F%0A%0A3.%20Links%20about%20you%20and%2For%20accomplishments%3A`}
      className="inline-flex items-center gap-2 bg-white text-foreground border border-neutral-300 font-medium text-sm px-5 py-2.5 rounded-lg hover:border-neutral-400 hover:bg-neutral-50 transition-colors duration-150"
    >
      <MessageSquare className="w-4 h-4" />
      Text Me
    </a>
    <a 
      href={`mailto:cory@corylevy.com?subject=Help%20Me%20Dropout&body=1.%20What%20are%20you%20working%20on%20now%3F%0A%0A%0A2.%20What%20cool%20stuff%20have%20you%20worked%20on%20in%20the%20past%3F%0A%0A%0A3.%20Links%20about%20you%20and%2For%20accomplishments%3A%0A`}
      className="inline-flex items-center gap-2 bg-white text-foreground border border-neutral-300 font-medium text-sm px-5 py-2.5 rounded-lg hover:border-neutral-400 hover:bg-neutral-50 transition-colors duration-150"
    >
      <Mail className="w-4 h-4" />
      Email Me
    </a>
  </div>

<p className="mt-3 text-sm text-neutral-500">
    I'll do my best to reply within 24 hours. If it's a fit, we'll do a 10-min call.
  </p>

  <p className="mt-8 font-black text-xl tracking-tight">
    -<a href="https://x.com/cory" target="_blank" rel="noopener noreferrer" className="hover:underline">Cory Levy</a>
  </p>
</section>


        
      </div>
    </section>
  )
}
