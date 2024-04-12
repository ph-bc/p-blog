import Banner from "components/Banner";
import { Outlet } from "react-router-dom";

function Default({ children }) {
  return (
    <main>
      <Banner />
      {/* O componente Outlet é usado para renderizar o conteúdo da rota atual */}
      <Outlet />
      {children}
    </main>
  );
}

export default Default;
