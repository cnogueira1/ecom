import type { NextPage } from 'next'
import { AccordionFilter, Filters, ProductCard } from '../components'


const Home: NextPage = () => {

  return (
    <div>
      <Filters>
        <AccordionFilter />
        <AccordionFilter />
        <AccordionFilter />
      </Filters>

      <ProductCard />
    </div>
  )
}

export default Home
