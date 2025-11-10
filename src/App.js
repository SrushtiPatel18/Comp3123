import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedData({ ...formData });
  };

  return (
    <main className="app-shell">
      <header>
        <h1>Lab Week 10 &mdash; Data Entry Form</h1>
      </header>

      <section className="form-section">
        <form className="entry-form" onSubmit={handleSubmit}>
          {/* Row 1: Email + Full Name */}
          <div className="form-row spaced-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Jane Doe"
                required
              />
            </div>
          </div>

          {/* Address Line 1 */}
          <div className="form-group">
            <label htmlFor="address1">Address Line 1</label>
            <input
              id="address1"
              name="address1"
              type="text"
              value={formData.address1}
              onChange={handleChange}
              placeholder="123 Main St"
              required
            />
          </div>

          {/* Address Line 2 */}
          <div className="form-group">
            <label htmlFor="address2">Address Line 2</label>
            <input
              id="address2"
              name="address2"
              type="text"
              value={formData.address2}
              onChange={handleChange}
              placeholder="Apt, Suite, Unit, etc. (optional)"
            />
          </div>

          {/* City + Province + Postal Code */}
          <div className="form-row spaced-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                type="text"
                value={formData.city}
                onChange={handleChange}
                placeholder="Toronto"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="province">Province</label>
              <select
                id="province"
                name="province"
                value={formData.province}
                onChange={handleChange}
                required
              >
                <option value="">Select Province</option>
                <option value="Ontario">Ontario</option>
                <option value="Quebec">Quebec</option>
                <option value="Nova Scotia">Nova Scotia</option>
                <option value="New Brunswick">New Brunswick</option>
                <option value="Manitoba">Manitoba</option>
                <option value="British Columbia">British Columbia</option>
                <option value="Prince Edward Island">Prince Edward Island</option>
                <option value="Saskatchewan">Saskatchewan</option>
                <option value="Alberta">Alberta</option>
                <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
                <option value="Northwest Territories">Northwest Territories</option>
                <option value="Yukon">Yukon</option>
                <option value="Nunavut">Nunavut</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="postalCode">Postal Code</label>
              <input
                id="postalCode"
                name="postalCode"
                type="text"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="A1A 1A1"
                required
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="checkbox-row">
            <input type="checkbox" id="agree" required />
            <label htmlFor="agree">I agree to the terms and conditions</label>
          </div>

          {/* Submit button */}
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </section>

      {/* Display submitted data */}
      {submittedData && (
        <section className="output-section">
          <h2>Submitted Information</h2>
          <div className="aligned-output">
            <p><span className="label">Email:</span> {submittedData.email}</p>
            <p><span className="label">Full Name:</span> {submittedData.fullName}</p>
            <p><span className="label">Address Line 1:</span> {submittedData.address1}</p>
            <p><span className="label">Address Line 2:</span> {submittedData.address2}</p>
            <p><span className="label">City:</span> {submittedData.city}</p>
            <p><span className="label">Province:</span> {submittedData.province}</p>
            <p><span className="label">Postal Code:</span> {submittedData.postalCode}</p>
          </div>
        </section>
      )}
    </main>
  );
}

export default App;
