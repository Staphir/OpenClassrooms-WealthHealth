import Select from "react-select"
import { states } from "./data/states";
import { useRef, useState } from "react";
import DatePicker from "react-date-picker";
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { Link } from "react-router-dom";
import { ModalText } from "react-modal-text";
import 'react-modal-text/dist/style.css';


function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const departmentRef = useRef(null);
  const streetRef = useRef(null);
  const cityRef = useRef(null);
  const stateRef = useRef(null);
  const zipCodeRef = useRef(null);

  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());

  const departements = [
    { value: 'Sales', label: 'Sales' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Engineering', label: 'Engineering' },
    { value: 'Human Resources', label: 'Human Resources' },
    { value: 'Legal', label: 'Legal' }
  ]

  function handleSubmit(e) {

    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const employee = {
      firstName: firstNameRef.current.value,
      lastName: lastNameRef.current.value,
      dateOfBirth: dateOfBirth,
      startDate: startDate,
      department: departmentRef.current.getValue()[0].value,
      street: streetRef.current.value,
      city: cityRef.current.value,
      state: stateRef.current.getValue()[0].value,
      zipCode: zipCodeRef.current.value
    };
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
  }

  return (
    <>
    <div className="flex items-center justify-center">
      <h1>HRnet</h1>
    </div>
    <div className="flex flex-col items-center justify-center">
      <Link to="employee-list">View Current Employees</Link>
      <h2>Create Employee</h2>
      <form>
          <label htmlFor="first-name">First Name</label>
          <input className="ring-1 ring-black p-0.5 text-xs" type="text" ref={firstNameRef} />

          <label htmlFor="last-name">Last Name</label>
          <input className="ring-1 ring-black p-0.5 text-xs" type="text" ref={lastNameRef} />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <DatePicker onChange={setDateOfBirth} value={dateOfBirth}></DatePicker>

          <label htmlFor="start-date">Start Date</label>
          <DatePicker onChange={setStartDate} value={startDate}></DatePicker>

          <fieldset className="mt-[10px] mx-0.5 p-3 border-2 border-gray-500">
              <legend>Address</legend>

              <label htmlFor="street">Street</label>
              <input className="ring-1 ring-black p-0.5 text-xs" ref={streetRef} type="text" />

              <label htmlFor="city">City</label>
              <input className="ring-1 ring-black p-0.5 text-xs" ref={cityRef} type="text" />

              <label htmlFor="state">State</label>
              <Select name="state" ref={stateRef} options={states} defaultValue={states[0]}></Select>

              <label htmlFor="zip-code">Zip Code</label>
              <input className="ring-1 ring-black p-0.5 text-xs" ref={zipCodeRef} type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <Select className="mb-5" name="department" ref={departmentRef} options={departements} defaultValue={departements[0]}></Select>
      </form>
        <ModalText buttonName='Save' text="Employee Created !" onOpen={handleSubmit}></ModalText>
    </div>
    </>
  )
}

export default App
