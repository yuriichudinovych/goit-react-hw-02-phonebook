import PropTypes from 'prop-types';

const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <h3>Find contacts by name</h3>
      <label htmlFor="">
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </label>
    </>
  );
};

Filter.propsTypes = {
  filter: PropTypes.string,
};

export default Filter;
