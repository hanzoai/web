export function StudiesPortion() {
  return (
    <section className="pt-20 2xl:pt-24 bg-black text-white font-inter self-center h-full">
      <div className="grid 2xl:gap-12 gap-6 max-w-[1500px] px-8">
        <div className="grid 2xl:gap-12 gap-6 md:grid-cols-2 md:items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="text-3xl 2xl:text-4xl font-semibold tracking-tighter">
              Hanzo: Powering the Launch of the Damon Motorbike
            </div>
            <div className="text-white/80 text-lg/relaxed md:text-sm/relaxed xl:text-base/relaxed">
              With the announcement of over 100 Million in Sales, Hanzo is proud to be the agency of record since launch
              of the most exciting motorbike of our lifetimes. Hanzo has been responsible for the marketing efforts
              starting with the launch at CES 2020 (we won) and into CES 2022 (we won again), and into the first units
              delivered in the upcoming year. Damon is a shining example of the power of a Hanzo Launch, with total
              average ROAS at a glorious 243 : 1. Visit DAMON.com to reserve yours today.
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg bg-background shadow-lg">
            <video
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
              autoPlay
              loop
              muted
              className="!m-0"
            />
          </div>
        </div>
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative aspect-video overflow-hidden rounded-lg bg-background shadow-lg">
            <video
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              autoPlay
              loop
              muted
              className="!m-0"
            />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <div className="text-3xl 2xl:text-4xl font-semibold tracking-tighter">Case Study: TRILLER</div>
            <div className="text-white/80 text-lg/relaxed md:text-sm/relaxed xl:text-base/relaxed">
              Some highlights from Triller's 1st ever paid marketing launch:
              <br />
              over 169 million people reached on less than $60,000 ad spend
              <br />
              our AI engine identified India as the number 1 growth market (and it became the top app in Apple & Android
              weeks later)
              <br />
              Grew YouTube subscribers from 0 to over 100,000 in 5 days
              <br />
              Grew MAU from ~50M to 82M
              <br />
              Visit TRILLER.co to join the party.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
