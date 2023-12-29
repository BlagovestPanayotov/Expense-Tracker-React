interface FilterProps {
  onSelectCategory: (category: string) => void;
}

const Filter = ({ onSelectCategory }: FilterProps) => {
  return (
    <div className="mb-3 mt-3">
      <select
        onChange={(e) => onSelectCategory(e.target.value)}
        className="form-select"
        aria-label="Default select example"
      >
        <option value="">All</option>
        <option value="Groceries">Groseries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertainment">Entertainment</option>
      </select>
    </div>
  );
};

export default Filter;
