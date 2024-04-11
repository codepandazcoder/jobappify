// export async function action({ request }) {
//   const formData = await request.formData();
//   const email = formData.get("email");
//   const password = formData.get("password");
//   const errors = {};

//   // validate the fields
//   if (typeof email !== "string" || !email.includes("@")) {
//     errors.email = "That doesn't look like an email address";
//   }

//   if (typeof password !== "string" || password.length < 6) {
//     errors.password = "Password must be > 6 characters";
//   }

//   // return data if we have errors
//   if (Object.keys(errors).length) {
//     return errors;
//   }

//   // otherwise create the user and redirect
//   //await createUser(email, password);
//   return redirect("/dashboard");
// }

import React, { useState } from "react";

const initVal = {
  email: "",
  password: "",
};

const AddJob = () => {
  const [formData, setFormData] = useState(initVal);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://example.com/api/endpoint", {
        method: "POST", // Set method to 'POST'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form data successfully submitted");
        // Reset form fields after successful submission if needed
      } else {
        console.error("Failed to submit form data");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div style={{ width: "550px" }}>
      <h2>Add Job</h2>
      <form method="post" onSubmit={(e) => handleSubmit(e)}>
        <p>
          <input
            style={{
              padding: "10px",
              borderRadius: "10px",
              width: "100%",
              border: "1px solid #000",
              margin: "10px",
            }}
            type="email"
            name="email"
            placeholder="Enter your email..."
            value={formData.email}
            onChange={handleChange}
          />
        </p>

        <p>
          <input
            style={{
              padding: "10px",
              borderRadius: "10px",
              width: "100%",
              border: "1px solid #000",
              margin: "10px",
            }}
            type="password"
            name="password"
            placeholder="enter your password..."
            value={formData.password}
            onChange={handleChange}
          />
        </p>

        <p>
          <button
            type="submit"
            style={{
              backgroundColor: "#FF0000",
              padding: "10px",
              borderRadius: "10px",
              margin: "10px",
            }}
          >
            Sign up
          </button>
        </p>
      </form>
    </div>
  );
};

export default AddJob;
