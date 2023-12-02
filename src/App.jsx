// import { createBrowserHistory } from 'history';
import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "routes";
// export const history = createBrowserRouter();

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
