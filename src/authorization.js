import React, { Component } from "react";

const Authorization = (allowedRoles) => (WrappedComponent) =>
  class WithAuthorization extends Component {
    constructor(props) {
      super(props)

      // In this case the user is hardcoded, but it could be loaded from anywhere.
      // Redux, MobX, RxJS, Backbone...
      this.state = {
        user: {
          name: 'vcarl',
          role: 'admin'
        }
      }
    }

    render() {
      const { role } = this.state.user.role;
      if (allowedRoles.includes(role)) {
        return <WrappedComponent {...this.props} />
      } else {
        return <h1>No page for you!</h1>
      }
    }
  }

export default Authorization;
