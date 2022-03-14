import { HashRouter, Route, Switch } from "react-router-dom";
import Main from "./components/pages/Main";
import Settings from "./components/pages/Settings";
import Header from "./components/organisms/Header";
import Footer from "./components/organisms/Footer";

function App() {
  return (
    <HashRouter>
      <>
        <Header />
        <Switch>
          <>
            <Route path="/" component={Main} exact={true} />
            <Route path="/settings/" component={Settings} />
          </>
        </Switch>
        <Footer />
      </>
    </HashRouter>
  );
}

export default App;
