// import './App.css'
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter as Router, Routes } from "react-router-dom";
import generateRoutes from "./utils/generateRoutes";
import routes from "./routes/index";
import PageOne from "./component/PageOne";
import Footer from "./pages/Footer/footer";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Routes>{generateRoutes(routes)}</Routes>
          </Router>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
