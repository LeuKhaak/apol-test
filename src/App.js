import { HashRouter, Route, Switch } from "react-router-dom";
import Main from "./components/pages/Main";
import About from "./components/pages/About";
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
            <Route path="/about/" component={About} />
          </>
        </Switch>
        <Footer />
      </>
    </HashRouter>
  );
}

export default App;
