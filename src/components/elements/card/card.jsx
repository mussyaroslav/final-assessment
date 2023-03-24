import './card.css';

import { addProductsBasket, removeProductsBasket } from '../../../store/reducers/products';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Card({id, title, description, price, quantity, image}) {


  const dispatch = useDispatch()

  const productsBasket = useSelector(state => state.products.basketProducts)
  const isProductInBasket = productsBasket.some(product => product.id === id)

  const addProduct = () => {
    const item = {
      id: id,
      image: image,
      title: title,
      price: price
    }

    dispatch(addProductsBasket(item))
  }

  const removeProduct = () => {
    dispatch(removeProductsBasket(id))
  }

  return (
    <div className='product__card'>
      <div className='product__img__div'>
        <img alt='' className='product__img' src={image} />
      </div>
      <div className='product__title'>
      <Link to={`/product/${id}`}>{title}</Link>
      </div>
      <div className='product__description'>
        <p>{description}</p>
      </div>
      <div className='price__btn'>
        <div className='price__div'>
          <p className='price'>{price} ₽</p>
          <p className='slash'>&nbsp; / &nbsp;</p>
          <p className='time'>{quantity} г.</p>     
        </div>
        {isProductInBasket ? (
          <button onClick={removeProduct} className='basket__btn__delete1'>
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
            <path d="M6.70408 6.07886L12.1218 11.4966C12.2723 11.6471 12.2723 11.891 12.1218 12.0415C12.0467 12.1168 11.948 12.1543 11.8495 12.1543C11.7508 12.1543 11.6523 12.1168 11.5771 12.0415L6.11867 6.583L0.660201 12.0415C0.584848 12.1168 0.486355 12.1543 0.387861 12.1543C0.289368 12.1543 0.190682 12.1168 0.115521 12.0415C-0.0349922 11.891 -0.0349922 11.6471 0.115521 11.4966L5.53306 6.07886L0.111887 0.657308C-0.0386267 0.506794 -0.0386267 0.26295 0.111887 0.112437C0.262401 -0.0378858 0.506245 -0.0378858 0.656568 0.112437L6.11848 5.57473L11.581 0.112628C11.7315 -0.0376946 11.9751 -0.0376946 12.1256 0.112628C12.2762 0.263142 12.2762 0.506985 12.1256 0.657499L6.70408 6.07886Z" fill="white"/>
          </svg>
        </button>
        ) : (
          <button onClick={addProduct} className='btn__plus'>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1.28564V12.3571" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            <path d="M12.3569 6.82135L1.28551 6.82135" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        )}
      </div>
    </div>
  )
}

export default Card;