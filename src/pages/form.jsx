import { useState } from 'react'


// This is a functional component that takes in props and returns a form with an input field and a button.
// It allows the user to enter a zipcode and search for weather data.

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