import { ChangeEvent } from "react";

interface ItemsProps {
  currentItems: Items[];
  onDeleteItems: (id: string) => void;
  onSelectChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

interface Items {
  id: string;
  description: string;
  amount: number;
  category: string;
}

const ItemsList = ({
  currentItems,
  onDeleteItems,
  onSelectChange,
}: ItemsProps) => {
  if (currentItems.length === 0) return <h2>No Expences</h2>;
  return (
    <>
      <div className="mb-3 mt-3">
        <select
          onChange={(e) => onSelectChange(e)}
          className="form-select"
          aria-label="Default select example"
        >
          <option value="all">All</option>
          <option value="Groceries">Groseries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((i) => (
            <tr key={i.id}>
              <td>{i.description}</td>
              <td>${i.amount}.00</td>
              <td>{i.category}</td>
              <td>
                <button
                  onClick={() => onDeleteItems(i.id)}
                  type="button"
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {currentItems
                .reduce((a, c) => {
                  return a + c.amount;
                }, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};

export default ItemsList;
