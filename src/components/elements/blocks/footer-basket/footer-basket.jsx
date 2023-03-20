import { useSelector, useDispatch } from 'react-redux';
import { clearBasket } from '../../../../store/reducers/products';
import './footer-basket.css'

function FooterBasket() {

  const dispatch = useDispatch();

  const productsPrice = useSelector(state => state.products.allPriceProductsBasket)

  const footerBtn = () => {
    alert('Заказ успешно оформлен');
    dispatch(clearBasket());
  }

  return (
    <footer className='footer__basket'>
        <div className='container__basket'>
          <div className='footer__basket__div'>
            <div className='footer__price__div'>
              <h2>Заказ на сумму:</h2>
              <p>{productsPrice} ₽</p>
            </div>
            <button className='footer__btn' onClick={footerBtn}>Оформить заказ</button>
          </div>
        </div>
      </footer>
  )
}

export default FooterBasket