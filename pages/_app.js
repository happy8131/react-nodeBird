import PropTypes from "prop-types";
import Head from "next/head";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import wrapper from "../store/configureStore";
const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charsSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
