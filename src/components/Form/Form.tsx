const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="form-label" htmlFor="descrption">
          Descrption
        </label>
        <input className="form-control" id="descrption" type="text" />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="amount">
          Amount
        </label>
        <input className="form-control" id="amount" type="text" />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="category">
          Category
        </label>
        <select className="form-control" name="category" id="category">
          <option value=""></option>
          <option value="groseries">Groseries</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>
      <button type="button" className="btn btn-primary">
        Primary
      </button>
    </form>
  );
};

export default Form;
