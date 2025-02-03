import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ title, subtitle, color }) => {
  return (
    <div className="text-center w-full max-w-full lg:w-full lg:max-w-[1197px] lg:mx-auto">
      <h1 className={`font-semibold lg:text-[45px] text-[25px] leading-tight lg:px-[90px] px-10 text-center ${color}`}>{title}</h1>
      {subtitle && <h2 className={`font-regular text-2xl text-black mt-3`}>{subtitle}</h2>}
    </div>
  );
};

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  color: PropTypes.string,
};

SectionTitle.defaultProps = {
  color: 'text-green-500',
};

export default SectionTitle;