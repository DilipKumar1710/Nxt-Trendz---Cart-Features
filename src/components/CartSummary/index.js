import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value

      const totalPriceArray = cartList.map(
        eachItem => eachItem.quantity * eachItem.price,
      )

      const totalAmount = totalPriceArray.reduce(
        (sum, eachItem) => sum + eachItem,
      )

      const cartItems = cartList.length
      return (
        <div className="summary-container">
          <h1 className="ordered-price">
            Order Total: <snap className="price">Rs {totalAmount}/-</snap>
          </h1>
          <p className="items-count">{cartItems} Items in cart</p>
          <button className="check-out-btn" type="button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
