import React, { Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const NewQuote = React.lazy(() => import("./components/pages/NewQuote"));
const QuoteDetail = React.lazy(() => import("./components/pages/QuoteDetail"));
const NotFound = React.lazy(() => import("./components/pages/NotFound"));
const AllQuotes = React.lazy(() => import("./components/pages/AllQuotes"));

function App() {
  return (
    <div>
      <Layout>
        <Suspense fallback={
          <div className="centered"> 
          <LoadingSpinner />
          </div>}>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/quotes" />
            </Route>
            <Route path="/quotes" exact>
              <AllQuotes />
            </Route>
            <Route path="/quotes/:quoteId" >
              <QuoteDetail />
            </Route>
            <Route path="/new-quote">
              <NewQuote />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
      </Suspense>
      </Layout>
    </div>
  );
}

export default App;