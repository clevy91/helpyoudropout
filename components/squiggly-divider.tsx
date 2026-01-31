export function SquigglyDivider() {
  return (
    <div className="px-6 md:px-12 lg:px-24 pt-8 pb-4">
      <svg
        viewBox="0 0 200 20"
        className="w-48 md:w-64 h-6 text-foreground"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      >
        <path
          d="M0 10 Q 10 0, 20 10 T 40 10 T 60 10 T 80 10 T 100 10 T 120 10 T 140 10 T 160 10 T 180 10 T 200 10"
          className="stroke-current"
        />
      </svg>
    </div>
  )
}
