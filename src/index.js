import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AppRoute from "./app/AppRoute";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="*" element={<AppRoute />} />
    </Routes>
  </Router>,
  rootElement
);
