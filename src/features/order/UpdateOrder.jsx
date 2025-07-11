import { useFetcher } from 'react-router-dom';
import Button from '../../ui/Button';
import PropTypes from 'prop-types';

function UpdateOrder({ order }) {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

UpdateOrder.propTypes = {
  order: PropTypes.object,
};

export default UpdateOrder;
