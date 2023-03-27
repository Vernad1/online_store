import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Context } from ".";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import { fetchTypes } from "./http/productAPI";
import { check } from "./http/userAPI";
import "./style.css";

const App = observer(() => {
  const { user, product } = useContext(Context);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //fetchTypes().then((data) => product.setTypes(data));

    check()
      .then((data) => {
        user.setUser(data);
        user.setIsAuth(true);
        console.log("render_APP");
      })
      .finally(() => setLoading(false));
  }, [user.isAuth]);

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
