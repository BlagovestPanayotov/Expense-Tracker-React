import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface FormProps {
  onAddItem: (d: FieldValues) => void;
}

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." }),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(1, "Amount must be a positive number."),
  category: z.enum(["Groseries", "Utilities", "Entertainment"], {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

type FormData = z.infer<typeof schema>;

const Form = ({ onAddItem }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  // function onSubmision(d: FieldValues) {
  //   console.log(d);
  // }

  return (
    <form onSubmit={handleSubmit((d) => onAddItem(d))}>
      <div className="mb-3">
        <label className="form-label" htmlFor="descrption">
          Descrption
        </label>
        <input
          {...register("description")}
          className="form-control"
          id="descrption"
          type="text"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="amount">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          className="form-control"
          id="amount"
          type="number"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="category">
          Category
        </label>
        <select
          {...register("category")}
          className="form-control"
          name="category"
          id="category"
        >
          <option value=""></option>
          <option value="Groseries">Groseries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
