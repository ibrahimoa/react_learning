import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

const CART_DB =
  "https://react-http-3cd7d-default-rtdb.europe-west1.firebasedatabase.app/cart.json";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(CART_DB);

      if (!response.ok) {
        throw new Error("Fetching cart data failed");
      }

      const data = await response.json();

      return data;
    };

    try {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Loading...",
          message: "Loading cart data.",
        })
      );

      // Timeout to see the loading message.
      await new Promise((r) => setTimeout(r, 100));

      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity || 0,
        })
      );

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Fetched cart data successfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data.",
      })
    );

    // Timeout to see the loading message.
    await new Promise((r) => setTimeout(r, 100));

    const sendRequest = async () => {
      console.log(cart);
      // PUT overwrites the data, POST doesn't
      const response = await fetch(CART_DB, {
        method: "PUT",
        body: JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        }),
      });

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully.",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!",
          message: error.message,
        })
      );
    }

    dispatch();
  };
};
