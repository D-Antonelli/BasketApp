import Button from "./button";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="absolute overflow-hidden w-9/12 p-6 bg-purple-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded shadow-lg">
      <form action="#">
        <fieldset>
          <legend className="bg-gray-300 pt-2 pb-2 w-full pt-2 pb-2 block font-bold">
            Your Delivery Information
          </legend>
          <div className="country-field mt-5">
            <label htmlFor="country">
              Country<span>*</span>
            </label>
            <select
              id="country-select"
              autoComplete="country"
              className="block px-2 py-1"
            >
              <option defaultValue="GB" selected="selected">
                United Kingdom
              </option>
            </select>
          </div>
          <div className="name-field flex flex-col md:flex-row mt-5">
            <div className="mr-5">
              <label htmlFor="name">
                First Name<span>*</span>
              </label>
              <input
                className="block w-full"
                type="text"
                id="name"
                name="name"
                size="30"
                maxLength="127"
                required
              ></input>
            </div>
            <div className="mt-5 md:mt-0">
              <label htmlFor="last-name">
                Last Name<span>*</span>
              </label>
              <input
                className="block w-full"
                id="last-name"
                autoComplete="family-name"
                type="text"
                size="30"
                maxLength="127"
                required
              ></input>
            </div>
          </div>
          <div>
            <label htmlFor="address-1" className="block mt-5">
              Address1
              <span>*</span>
            </label>
            <input
              className="block w-full"
              autoComplete="address-line1"
              type="text"
              id="address-1"
              size="10"
              maxLength="255"
              required
            ></input>
            <label htmlFor="address-2" className="block mt-5">
              Address2
            </label>
            <input
              className="block w-full"
              autoComplete="address-line2"
              type="text"
              id="address-2"
              size="30"
              maxLength="255"
            ></input>
            <label htmlFor="town-city" className="block mt-5">
              Town/City<span>*</span>
            </label>
            <input
              className="block w-full"
              autoComplete="town-city"
              type="text"
              id="town-city"
              size="30"
              maxLength="255"
            ></input>
            <label htmlFor="postcode" className="block mt-5">
              Postcode<span>*</span>
            </label>
            <input
              className="block mb-8"
              autoComplete="postcode"
              type="text"
              id="postcode"
              size="10"
              maxLength="255"
            ></input>
            <Link to="/">
              <Button label="Continue to next step" />
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Checkout;
