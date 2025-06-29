import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div className="overflow-scroll">
      <main className="mx-auto max-w-5xl">
        <Outlet />
      </main>
    </div>
  );
}

export default Main;
