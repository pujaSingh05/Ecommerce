import { Link } from 'react-router-dom';
import ProductCard from '../components/productCard';

const Home = () => {

  const addToCartHandler =()=>{

  }; 
  return (
    <div className='home'>
      <section></section>

      <h1> Latest Products
        <Link to="/search" className='findMore'>More</Link>
      </h1>

      <main>
        <ProductCard 
         productId='abx'
         name='books'
         price={455}
         stock={200}
        handler={addToCartHandler}
        photo='https://m.media-amazon.com/images/I/71Tr-1B1j7L._SL1500_.jpg'
        />

      </main>
     
    </div>
  )
}

export default Home;
