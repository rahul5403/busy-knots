// import React from "react";
// import "../styles/Cart.css";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { removeFromCart, updateQuantity } from "../redux/cartSlice";

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cartItems);
//   const cartCount = useSelector((state) => state.cart.cartCount);

//   const calculateSubTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
//   };

//   const calculateTax = () => {
//     return calculateSubTotal() * 0.1;
//   };

//   const calculateTotal = () => {
//     return calculateSubTotal() + calculateTax();
//   };

//   return (
//     <div className="cart-page">
//       {cartCount === 0 ? (
//         <div className="empty-cart">
//           <h2>Your cart is empty!</h2>
//           <p>Browse products and add items to your cart.</p>
//           <Link to="/shop">
//             <button className="go-back-button">Go Back to Products</button>
//           </Link>
//         </div>
//       ) : (
//         <>
//           <div className="cart-list">
//             <h2>Cart List</h2>
//             <table className="cart-table">
//               <thead>
//                 <tr>
//                   <th>Product Image</th>
//                   <th>Name</th>
//                   <th>Price</th>
//                   <th>Quantity</th>
//                   <th>Sub Total</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.map((item) => (
//                   <tr key={item.id}>
//                     <td>
//                       <img
//                         src={item.image}
//                         alt={item.name}
//                         className="cart-product-img"
//                       />
//                     </td>
//                     <td>{item.name}</td>
//                     <td>${item.price}</td>
//                     <td>
//                       <input
//                         type="number"
//                         className="cart-quantity-input"
//                         value={item.quantity}
//                         onChange={(e) =>
//                           dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) || 0 }))
//                         }
//                       />
//                     </td>
//                     <td>${item.price * item.quantity}</td>
//                     <td>
//                       <button
//                         className="cart-remove-button"
//                         onClick={() => dispatch(removeFromCart({ id: item.id }))}
//                       >
//                         🗑️
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="cart-summary">
//             <h2>Cart Price</h2>
//             <div className="cart-summary-item">
//               <span>Tax:</span>
//               <span>${calculateTax()}</span>
//             </div>
//             <div className="cart-summary-item">
//               <span>SubTotal Price:</span>
//               <span>${calculateSubTotal()}</span>
//             </div>
//             <div className="cart-summary-item">
//               <span>Total Price:</span>
//               <span>${calculateTotal()}</span>
//             </div>
//             <button className="cart-pay-button">Pay Now</button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;

import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = useSelector((state) => state.cart.cartCount);

  const calculateSubTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTax = () => {
    return calculateSubTotal() * 0.1;
  };

  const calculateTotal = () => {
    return calculateSubTotal() + calculateTax();
  };

  return (
    <div className=" min-h-screen max-w-screen-xl mx-auto p-4">
      {cartCount === 0 ? (
        <div className="text-center py-10">
          <h2 className="text-xl font-semibold">Your cart is empty!</h2>
          <p className="text-gray-600">Browse products and add items to your cart.</p>
          <Link to="/shop">
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700">
              Go Back to Products
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          {/* Cart Items Section */}
          <div className="bg-white p-4 rounded-lg shadow-md w-full overflow-x-auto">
            <h2 className="text-lg font-semibold mb-3">Cart List</h2>
            <table className="w-full border-collapse border border-gray-200 text-sm lg:text-base">
              <thead>
                <tr className="bg-gray-800 text-white">
                  <th className="p-2 w-[12%]">Image</th>
                  <th className="p-2 w-[18%]">Name</th>
                  <th className="p-2 w-[15%]">Price</th>
                  <th className="p-2 w-[15%]">Qty</th>
                  <th className="p-2 w-[18%]">SubTotal</th>
                  <th className="p-2 w-[10%]">Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id} className="border-b text-center">
                    <td className="p-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-10 h-10 lg:w-16 lg:h-16 object-cover rounded-md mx-auto"
                      />
                    </td>
                    <td className="p-2">{item.name}</td>
                    <td className="p-2">₹{item.price}</td>
                    <td className="p-2">
                      <input
                        type="number"
                        className="w-10 lg:w-12 p-1 border rounded text-center text-xs lg:text-sm"
                        value={item.quantity}
                        min="1"
                        onChange={(e) =>
                          dispatch(updateQuantity({ id: item.id, quantity: parseInt(e.target.value) || 0 }))
                        }
                      />
                    </td>
                    <td className="p-2">₹{(item.price * item.quantity).toFixed(2)}</td>
                    <td className="p-2">
                      <button
                        className="bg-red-600 text-white p-1 rounded hover:bg-red-700 text-xs lg:text-sm"
                        onClick={() => dispatch(removeFromCart({ id: item.id }))}
                      >
                        🗑️
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cart Summary Section */}
          <div className="bg-white p-4 rounded-lg shadow-md w-full">
            <h2 className="text-lg font-semibold mb-3">Cart Price</h2>
            <div className="space-y-2 text-sm lg:text-base">
              <div className="flex justify-between">
                <span className="text-gray-600">Tax:</span>
                <span className="font-semibold">₹{calculateTax().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">SubTotal:</span>
                <span className="font-semibold">₹{calculateSubTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-semibold border-t pt-2">
                <span>Total Price:</span>
                <span>₹{calculateTotal().toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full mt-3 bg-gray-800 text-white py-2 rounded-md shadow-md hover:bg-gray-900 text-sm lg:text-base">
              Pay Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
