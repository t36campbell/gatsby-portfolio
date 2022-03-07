import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const JsonLd = ({ children }): JSX.Element => {
  return (
    <Helmet>
      <script defer type="application/ld+json">
        {JSON.stringify(children)}
      </script>
    </Helmet>
  );
};

JsonLd.propTypes = {
  children: PropTypes.objectOf(PropTypes.string).isRequired,
};
export default JsonLd;
