//add state to a functional component.
import { useState } from 'react'


// This is a functional component that takes in props and returns a form with an input field and a button.
// It allows the user to enter a zipcode and search for weather data.
// The component uses the useState hook to manage the input state.
// The handleChange function updates the input state when the user types in the input field.
// The handleSearch function is called when the user clicks the search button, and it calls the weatherSearch function passed in as a prop with the input value.
// The component is exported as the default export of the module.
export default function Form(props) {
    const [input, setInput] = useState('')

    function handleChange(e) {
        setInput(e.target.value)
    }

    function handleSearch() {
        props.weatherSearch(input)
    }

    return (
        <div className='zipcode-input'>
        <input onChange={handleChange} type="number" placeholder='Enter your zipcode' />
        <button onClick={handleSearch}>Search</button>
        </div>
    )
}