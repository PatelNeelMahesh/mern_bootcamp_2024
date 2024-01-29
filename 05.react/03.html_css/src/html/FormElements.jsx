import React from 'react';
import '../css/FormElements.css';

function FormElements() {
  return (
    <form className="form-elements">
      {/* Text input */}
      <label>
        Name:
        <input type="text" name="name" />
      </label>

      {/* Textarea */}
      <label>
        Message:
        <textarea name="message" />
      </label>

      {/* Select dropdown */}
      <label>
        Country:
        <select name="country">
          <option value="india">India</option>
          <option value="canada">Canada</option>
          {/* Additional options */}
        </select>
      </label>

      {/* Radio buttons */}
      <label>
        <input type="radio" name="gender" value="male" /> Male
      </label>
      <label>
        <input type="radio" name="gender" value="female" /> Female
      </label>

      {/* Checkbox */}
      <label>
        <input type="checkbox" name="subscribe" /> Subscribe to newsletter
      </label>

      {/* Submit button */}
      <input type="submit" value="Submit" />
    </form>
  );
}

export default FormElements;
