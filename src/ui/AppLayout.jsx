import Header from './Header';
import Main from './Main';
import CartOverview from '../features/cart/CartOverview';
import { useNavigation } from 'react-router-dom';
import Loader from './Loader';

function AppLayout() {
  const navgation = useNavigation();
  // Global state
  const isLoading = navgation.state === 'loading';

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}

      <Header />

      <Main />

      <CartOverview />
    </div>
  );
}

export default AppLayout;
