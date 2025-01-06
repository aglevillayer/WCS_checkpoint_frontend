import { useQuery, useMutation } from "@apollo/client";
import { mutationAddCountry } from "@/graphql/addCountry";
import { IContinent, ICountry } from "@/utils/interfaces";
import { useForm } from "react-hook-form";
import { queryCountries } from "@/graphql/countries";

export interface CreateCountryData {
  name: string;
  emoji: string;
  code: string;
  continent: IContinent;
}
export default function AddCountry() {
  const [doAddCountry, { loading }] = useMutation<{ item: ICountry }>(
    mutationAddCountry
  );

  const { register, handleSubmit } = useForm<CreateCountryData>();

  async function onFormSubmit(formData: CreateCountryData) {
    console.log("form submitted for", formData);

    await doAddCountry({
      variables: {
        data: {
          name: formData.name,
          emoji: formData.emoji,
          code: formData.code,
        },
      },
    });
  }
  console.log("onSubmit");

  return (
    <div className="div-form">
      <form onSubmit={handleSubmit(onFormSubmit)} className="country-form">
        <div className="input-form">
          <label>Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            placeholder="Name"
          />
        </div>
        <div className="input-form">
          <label>Emoji</label>
          <input
            type="text"
            {...register("emoji", { required: true })}
            placeholder="Emoji"
          />
        </div>
        <div className="input-form">
          <label>Code</label>
          <input
            type="text"
            {...register("code", { required: true })}
            placeholder="Code"
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
