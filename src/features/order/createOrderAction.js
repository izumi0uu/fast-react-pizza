import { redirect } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import store from '../../store';
import { clearCart } from '../cart/cartSlice';

const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Please give us your correct phone number. We might need it to contact you.';

  if (Object.keys(errors).length > 0) return errors;

  // newOrder already contains the id from api
  const newOrder = await createOrder(order);

  // DONT over use this trick, because it deactivates couple of performance optimizations of redux
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}
