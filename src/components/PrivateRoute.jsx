import React from "react";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";
import Swal from "sweetalert2";
const PrivateRoute = ({ auth, component: Component, ...rest }) => {
  const { token } = auth;
  return (
    <Route {...rest} render={props => {
      if (token !== null) {
        return <Component {...props} />;
      } else {
        Swal.fire({
          icon: "error",
          title: "Opps!",
          text: "You must Login first!",
          timer: 2000
        });
        return <Redirect to="/login" />;
      }
    }} />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps)(PrivateRoute);
