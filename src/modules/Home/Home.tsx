import React from 'react'
import { AccordionFilter, Carrousel, CheckBox, Filters, ProductCard } from '../../components'
import { Container, Contend, Items, Title } from './styled'

//images
import OP1 from '../../assets/img/banner/onepiece.jpg'
import OP2 from '../../assets/img/banner/onepiece2.jpg'


export const Home = () => {
  return (
    <Container>
      <Carrousel
        images={[OP1,OP2]}
      />



      <Contend>
        <Filters>
          <AccordionFilter />
          <AccordionFilter />
          <AccordionFilter />
        </Filters>

        <div>
          <Title> Novos Lançamentos </Title>
          <Items>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </Items>
        </div>

      </Contend>

    </Container>
  )
}
