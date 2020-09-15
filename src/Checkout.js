import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from './Subtotal'


function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
        <div className='checkot__left'>
      <img
        className="checkout__ad"
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Wireless/MobileAccessories/OnePlus_accessories/PC_accesories_banner._CB443675846_.jpg"
        alt=""
      />

      {basket?.length === 0 ? (
        <div>
            <h2>Your Shopping basket is empty</h2><br/>
          You have no items in your basket.To buy one or "Add to basket" next to
          the item.
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping basket</h2>
          {basket?.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
      </div>
      {basket?.length>0&&(
          <div className='checkout__right'>
              <Subtotal/>
          </div>
      )}
    </div>
    
  );
}

export default Checkout;
