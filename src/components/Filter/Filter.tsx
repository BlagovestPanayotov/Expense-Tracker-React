import categories from "../../categories";

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
        {categories.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;
