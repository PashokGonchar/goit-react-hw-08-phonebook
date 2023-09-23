import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import debounce from 'lodash.debounce';
import { TextField } from '@mui/material';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    const value = e.target.value;
    dispatch(setFilter(value));
  };

  const onFilterChangeDebounced = debounce(onFilterChange, 500);

  return (
    <TextField
      id="search"
      name="search"
      label="Find contacts by name"
      variant="standard"
      onChange={onFilterChangeDebounced}
    />
  );
};

export default Filter;
