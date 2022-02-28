import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AppRoute from "./app/AppRoute";

import PageNotFound from './app/pages/PageNotFound';

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/app/*" element={<AppRoute />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Navigate replace to="/app" />} />
    </Routes>
  </Router>,
  rootElement
);
