import { useState } from "react";

export default function CityForm(props) {
  const { onSubmit } = props;
  const [formData, setFormData] = useState({
    city: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);
    setFormData({ city: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>
        Enter the city name for which you would like to know the current weather information that
        you like.
      </h1>
      <input
        type="text"
        name="city"
        className="Test"
        placeholder="Enter the city name"
        onChange={handleChange}
        value={formData.city}
      />
      <button type="submit">Search!</button>
    </form>
  );
}

// formData.city
// formData["city"]
// formData[name]
// formData.name

// const newFormData = {...formData}
// newFormData[name] = value
// setFormData(newFormData)
