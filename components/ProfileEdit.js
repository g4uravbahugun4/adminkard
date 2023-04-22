import { useState } from "react";
import {editProfile} from "../utils/post"
function ProfileEdit({ setShowModal }) {
  const [user, setUser] = useState({
    name: "",
  
    gender:"",
    date:"",
    status:"",
    number:"",
    country:"",
    address:"",
    city:"",
    postalcode:"",
    progress:25,
    profile:true

  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };



  const handleSubmit = async (e) => {
   
try {
  e.preventDefault()
   await editProfile(user);
} catch (error) {
  console.log(error)
}   
  };
  return (
    <div     className=" top-0 z-20  w-screen h-screen fixed flex justify-center items-center  bg-[#11111192] p-2 shadow-md ">
      <div className="w-full bg-slate-100  rounded-md sm:w-9/12 m-4 p-4 ">
        <div className="h-[90vh] overflow-auto">
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form  onSubmit={handleSubmit} >
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className=" py-5 bg-slate-50  z-50 px-4  sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={user.value}
                        onChange={handleChange}
                        id="first_name"
                        autocomplete="given-name"
                        className="mt-1 p-2 focus:ring-indigo-500  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <p className="pb-2 text-sm font-medium text-gray-700">
                        GENDER
                      </p>
                      <ul class="grid w-full gap-6 grid-cols-3">
                        <li>
                          <input
                            type="radio"
                            id="male"
                            name="gender"
                            value="male"
                            className="hidden peer"
                          
                            onChange={handleChange}
                          />
                          <label
                            for="male"
                            class="flex items-center justify-center w-full py-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            Male
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="female"
                            name="gender"
                            value="female"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <label
                            for="female"
                            className="flex items-center justify-center w-full py-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            Female
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="other"
                            name="gender"
                            value="other"
                            className="hidden peer"
                            onChange={handleChange}
                          />
                          <label
                            for="other"
                            class=" items-center  w-full py-1 flex justify-center jus text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            other
                          </label>
                        </li>
                      </ul>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        date of birth
                      </label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        value={user.date} onChange={handleChange}
                        className="mt-1 p-2 focus:ring-indigo-500  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <p className="pb-2 text-sm font-medium text-gray-700">
                        status
                      </p>
                      <ul class="grid w-full gap-6 grid-cols-3">
                        <li>
                          <input
                            type="radio"
                            id="married"
                            name="status"
                            value="married"
                            class="hidden peer"
                            onChange={handleChange}
                         
                          />
                          <label
                            for="married"
                            class="flex items-center justify-center w-full py-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            Married
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="unmarried"
                            name="status"
                            value="unmarried"
                            class="hidden peer"
                            onChange={handleChange}
                          />
                          <label
                            for="unmarried"
                            class="flex items-center justify-center w-full py-1 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
                          >
                            Unmarried
                          </label>
                        </li>
                      </ul>
                    </div>

                   
                    <div className="col-span-6">
                      <label
                        for="number"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        name="number"
                        id="number"
                        value={user.number} onChange={handleChange}
                        className="mt-1 p-2  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        for="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country / Region
                      </label>
                      <select
                        id="country"
                        name="country"
                        autocomplete="country"
                        onChange={handleChange}
                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                        <option>india</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        for="street_address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="address"
                        id="street_address"
                        autocomplete="street-address"
                        value={user.address} onChange={handleChange}
                        className="mt-1 p-2  focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        for="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        value={user.city} onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 p-2  focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        for="state"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="state"
                        value={user.state} onChange={handleChange}
                        className="mt-1 focus:ring-indigo-500 p-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        for="postal_code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal
                      </label>
                      <input
                        type="text"
                        name="postalcode"
                        id="postal_code"
                        autocomplete="postal-code"
                        value={user.postalcode} onChange={handleChange}
                        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                 
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                  <button
                    className="inline-flex ml-2 justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileEdit;
