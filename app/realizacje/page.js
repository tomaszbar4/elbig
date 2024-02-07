import { Partners, SmallHero, Realizations } from "@/components"

const Realizacje = () => {

  return (
    <main className="bg-white text-gray-950">
    <SmallHero text="Realizacje"/>
    <div className="max-w-[80rem] mx-auto px-6 xl:px-0">
    <Realizations/>
    </div>
    <Partners/>
    </main>
  )
}

export default Realizacje