import {   Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = ({ children, ...rest }) => {
  let auth = { token: false };

  //  NEW THINGS
  // REDIRECT = NAVIGATE
  // ROUTES = SWITCH
  return auth.token ? <Outlet /> : <Navigate to="/login" />;

  //OLD WAY OF DOING THINGS
  //   return (
  //     <Route {...rest}>
  //       {!auth.token ? <Redirect to="/Login" /> : { children }}
  //     </Route>
  //   );
};

export default PrivateRoutes;
