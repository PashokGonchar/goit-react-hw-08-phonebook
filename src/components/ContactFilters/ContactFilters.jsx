import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import debounce from 'lodash.debounce';
import { TextField } from '@mui/material';
import { FilterDiv } from './ContactFilters.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = e => {
    const value = e.target.value;
    dispatch(setFilter(value));
  };

  const onFilterChangeDebounced = debounce(onFilterChange, 500);

  return (
    <FilterDiv>
      <TextField
        id="search"
        name="search"
        label="Find contacts by name"
        variant="standard"
        onChange={onFilterChangeDebounced}
      />
    </FilterDiv>
  );
};

export default Filter;
