const Filter = ({ onChangeFilter }) => {
  return (
    <>
      <div>
        <label htmlFor="select">Количество карточек на странице:</label>
        <select id="select" onChange={onChangeFilter}>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
    </>
  );
};

export default Filter;
