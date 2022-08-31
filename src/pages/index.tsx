import type { NextPage } from 'next'
import { ProductCard } from '../components/CardProduct/CardProduct'
import { Cart } from '../components/Cart/Cart'
import { InputSearch } from '../components/InputSearch/InputSearch'

const Home: NextPage = () => {

  return (
    <div>
      <Cart />
      <InputSearch />

    </div>
  )
}

export default Home
