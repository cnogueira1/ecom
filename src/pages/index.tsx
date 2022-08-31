import type { NextPage } from 'next'
import { AccordionFilter, Filters } from '../components'


const Home: NextPage = () => {

  return (
    <div>
      <Filters>
        <AccordionFilter />
        <AccordionFilter />
        <AccordionFilter />
      </Filters>
    </div>
  )
}

export default Home
