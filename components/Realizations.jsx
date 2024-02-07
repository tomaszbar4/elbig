import { RealizationItem } from "@/components"
import { realizationsData } from "@/constants/data"

export default function Realizations() {

  return (
    <section >
        {realizationsData.map((item, idx) => (
            <RealizationItem 
            key={item}
            reversed={idx%2===0 ? true : false}
            heading={item.heading} 
            paragraph={item.paragraph} 
            image={item.image}
            rotate={idx===8 ? true : false}/>
        ))}
    </section>
  )
}
