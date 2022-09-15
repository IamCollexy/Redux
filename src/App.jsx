import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { Fragment, useEffect, useState } from 'react';
// import {uiActions} from './Store/ui-slice';
import Notification from './components/UI/Notification';
import { fetchCartData, sendCartData } from './Store/cart-actions';



function App() {
  const [isInitial, setIsInitial] = useState(true);

  const dispatch = useDispatch();
  const showCart = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

useEffect(() => {
dispatch(fetchCartData());
},[dispatch]);

useEffect(()=> {
  
  // const sendCartData = async () => {

  //   dispatch(
  //     uiActions.showNotification({
  //     status: 'pending',
  //     title: 'Sending...',
  //     message: 'Sending cart data!',
  //   }));
  //  const response = await fetch 
  //  ('https://redux-frontend-and-backend-default-rtdb.firebaseio.com/cart.json',
  //   {
  //     method: 'PUT',
  //     body: JSON.stringify(cart),
  //   })
  //   if (!response.ok) {
  //     throw new Error('sending cart data failed.');
 
  //   }
    // const responseData = await response.json();
    // dispatch(uiActions.showNotification({
    //   status: 'success',
    //   title: 'Success!',
    //   message: 'Send cart data successfully!',
    // }));
  // };

  // if (isInitial) {
  //   isInitial = false;
  //   return;
  // };

  // sendCartData().catch((error) => {
  //   dispatch(uiActions.showNotification({
  //     status: 'error',
  //     title: 'Error!',
  //     message: 'Sending cart data failed!',
  //   }));
  // });

  if (isInitial) {
    setIsInitial(false);
    return;
  }
  if (cart.changed) {
    dispatch(sendCartData(cart));

  }
 
}, [cart, dispatch]);


  return (
    <Fragment>
  { 
  notification  && <Notification 
  status={notification.status} 
  title={notification.title} 
  message={notification.message}/> 
  }
    <Layout>
     {showCart && <Cart /> }
      <Products />
    </Layout>
    </Fragment>
  );
}

export default App;




// import { Fragment } from 'react';
// import Counter from './components/Counter';
// import Header from './components/Header';
// import Auth from './components/Auth';
// import UserProfile from './components/UserProfile';
// import {useSelector} from 'react-redux';


// function App() {

// const isAuth = useSelector( state => state.auth.isAuthenticated);

//   return (
//     <Fragment>
//       <Header/>
//       {!isAuth && <Auth />}
//       {isAuth && <UserProfile />}
//     <Counter />
//     </Fragment>
//   );
// }

// export default App;
