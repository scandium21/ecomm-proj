import App from "next/app";
import Layout from "../components/_App/Layout"

// MyApp has access to every page in the app
class MyApp extends App {
  render() {
    const { Component } = this.props;
    // returning the entire page here
    return <Layout><Component /></Layout>;
  }
}

export default MyApp;
