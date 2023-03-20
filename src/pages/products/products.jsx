import '../../variables.css';
import '../../reset.css';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Card from '../../components/elements/card/card';
import Header from '../../components/elements/blocks/header-main/header';

function Products() {
  
  const products = useSelector(state => state.products.products)
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if(!isLoggedIn) {
    return (
      <Navigate to='/login' />
    )
  } else {
    return (
      <div className='main'>
        <Header />
        <div className='card__div'>
          <div className='container'>
            <div className='card__main'>
              {products.map(item => {
                return (
                  <Card 
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    quantity={item.quantity}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Products;
