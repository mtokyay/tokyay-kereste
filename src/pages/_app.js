import React from "react";
import "./../styles/global.scss";
import NavbarCustom from "./../components/NavbarCustom";
import IndexPage from "./index";
import BizKimizPage from "./biz-kimiz";
import YasalBilgilerPage from "./yasal-bilgiler";
import UrunlerimizPage from "./urunlerimiz";
import SorularPage from "./sorular";
import IletisimPage from "./iletisim";
import BlogPage from "./blog";
import DashboardPage from "./dashboard";
import SettingsPage from "./settings";
import PurchasePage from "./purchase";
import AuthPage from "./auth";
import UrunlerimizInsaatlikKerestePage from "./urunlerimiz/insaatlik-kereste";
import UrunlerimizDogramalikKerestePage from "./urunlerimiz/dogramalik-kereste";
import { Switch, Route, Router } from "./../util/router.js";
import Auth0Callback from "./auth0-callback.js";
import NotFoundPage from "./not-found.js";
import Footer from "./../components/Footer";
import "./../util/analytics.js";
import { ProvideAuth } from "./../util/auth.js";

function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <NavbarCustom
            bg="white"
            variant="light"
            expand="md"
            logo="https://uploads.divjoy.com/logo.svg"
          />

          <Switch>
            <Route exact path="/" component={IndexPage} />

            <Route exact path="/biz-kimiz" component={BizKimizPage} />

            <Route exact path="/yasal-bilgiler" component={YasalBilgilerPage} />

            <Route exact path="/urunlerimiz" component={UrunlerimizPage} />

            <Route exact path="/sorular" component={SorularPage} />

            <Route exact path="/iletisim" component={IletisimPage} />

            <Route exact path="/blog" component={BlogPage} />

            <Route exact path="/dashboard" component={DashboardPage} />

            <Route exact path="/settings/:section" component={SettingsPage} />

            <Route exact path="/purchase/:plan" component={PurchasePage} />

            <Route exact path="/auth/:type" component={AuthPage} />

            <Route
              exact
              path="/urunlerimiz/insaatlik-kereste"
              component={UrunlerimizInsaatlikKerestePage}
            />

            <Route
              exact
              path="/urunlerimiz/dogramalik-kereste"
              component={UrunlerimizDogramalikKerestePage}
            />

            <Route exact path="/auth0-callback" component={Auth0Callback} />

            <Route component={NotFoundPage} />
          </Switch>

          <Footer
            bg="white"
            textColor="dark"
            size="md"
            bgImage=""
            bgImageOpacity={1}
            description="A short description of what you do here"
            copyright="© 2020 Company"
            logo="https://uploads.divjoy.com/logo.svg"
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
