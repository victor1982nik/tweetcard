import { Box } from "./Filter.styled";

const Filter = ({ onChangeFilter, onChangeFilterSubscription }) => {
  return (
    <>
      <Box>
        <label htmlFor="select">Кількість карток на сторинці:</label>
        <select id="select" onChange={onChangeFilter}>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </Box>
      <Box>
        <label htmlFor="filterSubscription">Підписан:</label>
        <select id="select" onChange={onChangeFilterSubscription}>
          <option value="disabled">disabled</option>
          <option value="true">subscribed</option>
          <option value="false">unsubscribed</option>
        </select>
      </Box>
    </>
  );
};

export default Filter;
