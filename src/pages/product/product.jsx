import './product.css'
import { Navigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/elements/blocks/header-main/header';
import { addProductsBasket, removeProductsBasket } from '../../store/reducers/products';

function Product() {

  const { id} = useParams()

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const products = useSelector(state => state.products.products)
  const currentProduct = products[id - 1]

  const dispatch = useDispatch()

  const productsBasket = useSelector(state => state.products.basketProducts)
  const isProductInBasket = productsBasket.some(product => product.id === currentProduct.id)

  const addProduct = () => {
    const item = {
      id: currentProduct.id,
      image: currentProduct.image,
      title: currentProduct.title,
      price: currentProduct.price
    }

    dispatch(addProductsBasket(item))
  }

  const removeProduct = () => {
    dispatch(removeProductsBasket(currentProduct.id))
  }

  if(!isLoggedIn) {
    return (
      <Navigate to='/login' />
    )
  } else {
    return (
      <div className="main-product">
        <Header />
        <div className='product__main__div'>
          <div className='container'>
            <div className='product__div'>
              <div className='product__image__div'>
                <img src={currentProduct.image} alt='' />
              </div>
              <div className='product__desc__div'>
                <h2>{currentProduct.title}</h2>
                <p>{currentProduct.fullDescription}</p>
                <div className='product__price__and__btn'>
                  <div className='product__price1'>
                    <p className='product__price2'>{currentProduct.price} ₽</p>
                    <p className='slash2'>&nbsp; / &nbsp;</p>
                    <p className='quantity2'>{currentProduct.quantity} г.</p>
                  </div>
                  {isProductInBasket ? (
                    <div className='product__btn__div'>
                      <button onClick={removeProduct} className='product__btn2'>Удалить</button>
                    </div>
                  ) : (
                    <div className='product__btn__div'>
                      <button onClick={addProduct} className='product__btn1'>В корзину</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Product