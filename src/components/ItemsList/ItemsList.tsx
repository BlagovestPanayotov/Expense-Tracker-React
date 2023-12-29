interface ItemsProps {
  items: Items[];
  onDeleteItems: (id: string) => void;
}

interface Items {
  id: string;
  description: string;
  amount: number;
  category: string;
}

const ItemsList = ({ items, onDeleteItems }: ItemsProps) => {
  return (
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
        {items.map((i) => (
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
            {items.reduce((a, c) => {
              return a + c.amount;
            }, 0)}
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ItemsList;
