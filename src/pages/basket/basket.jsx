import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import CardBasket from '../../components/elements/cardBasket/cardBasket';
import HeaderBasket from '../../components/elements/blocks/header-basket/header-basket';
import FooterBasket from '../../components/elements/blocks/footer-basket/footer-basket';

function Basket() {

  const productsBasket = useSelector(state => state.products.basketProducts)
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  if(!isLoggedIn) {
    return (
      <Navigate to='/login' />
    )
  } else {
    return (
      <div className="main">
        <HeaderBasket />
        <div className='basket__main'>
          <div className='container__basket'>
            <div className='basket__div'>
              {productsBasket.map(item => {
                return (
                  <CardBasket
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                  />
                )
              })}
            </div>
          </div>
        </div>
        <FooterBasket />
      </div>
    )
  }
}

export default Basket;