export function Letter() {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-12 lg:px-24 pt-24 pb-8">
      <div className="max-w-4xl">
        <h1 className="font-black text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
          <span className="block">Dear Mom</span>
          <span className="block">and Dad,</span>
        </h1>
        
        <div className="mt-12 md:mt-16 space-y-8">
          <p className="font-black text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
            I'm dropping out to start a company.
          </p>
          
          <p className="font-black text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tight">
I’d love you to talk to founders who dropped out and are still in their teens or twenties, and now run billion dollar companies.
You can also talk to <em>their</em>  parents.          </p>
        </div>
        
<p className="mt-10 text-lg md:text-xl font-medium italic tracking-normal text-black/80">
  {"- <insert your name here>"}
</p>

      </div>
    </section>
  )
}
