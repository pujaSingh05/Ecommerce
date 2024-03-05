import { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import { Link } from "react-router-dom";
import CartItem from "../components/cartItem";


 const cartItems= [

  {
    productId:"abxcsvsnbs",
    photo:"https://m.media-amazon.com/images/I/71Tr-1B1j7L._SL1500_.jpg",
    name:"books",
    price: 200,
    quantity: 40,
    stock: 200,

  },
 ];
 const subtotal = 4000;
 const tax = Math.round(subtotal* 0.18);
 const shippingCharges = 200;
 const total = subtotal + tax + shippingCharges;
 const discount = 10;

const Cart = () => {
  const  [couponCode, setCouponCode] = useState<string>("");
  const  [isvalidCouponCode, setIsvalidCouponCode] = useState<boolean>(false);


  useEffect(() => {
    
    const timeOutId = setTimeout(() => {
      if(Math.random()> 0.5) setIsvalidCouponCode(true);
      else setIsvalidCouponCode(false);

    }, 1000);

    return () => {
      clearTimeout(timeOutId);
      setIsvalidCouponCode(false);
    }
  }, [couponCode])

  return (
    <div className="cart">
    <main> 

      {
        
        cartItems.length > 0 ? cartItems.map((i, idx)=>(
          <CartItem key={idx} cartItem={i}/>
        )): <h1>No Items Added</h1>

      }


    </main>
      <aside>

        <p>Subtotal: ${subtotal}</p>
        <p>Shipping Charges: ${shippingCharges}</p>
        <p>tax: ${tax}</p>
        <p>
          Discount: <em>-
            ${discount}
          </em>
        </p>
        <p>
          <b>
            Total: ${total}
          </b>
        </p>
        <input type="text" 
        placeholder="Coupon code"
        value={couponCode} onChange={(e)=>setCouponCode(e.target.value)}/>


        {
          couponCode && (
            isvalidCouponCode? <span className="green"> 
            ${discount} off using the<code>{couponCode}</code>
          </span>: 
          <span className="red">
            Invalid Coupon <VscError/>
          </span>

          )
        }


        {
          cartItems.length > 0 && <Link to="/shipping">Checkout</Link>
        }
      </aside>
      
    </div>
  )
}

export default Cart
