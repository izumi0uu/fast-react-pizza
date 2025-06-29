import { updateOrder } from '../../services/apiRestaurant';

// Revalidation basically means that react router knows（by fetcher.Form） that the data has changed as a result of this action， so then whenever that happens（Button be clicked）， it will automatically refetch the data in the background and then re render the page with that new data.
export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderId, data);

  return null;
}
