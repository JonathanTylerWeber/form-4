import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    subscribe: '',
  });

  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
  }

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <>
      <h1>React Form</h1>
      <p>count: {count}</p>
      <button onClick={() => setCount((count) => (count + 1))} >+</button>

      <form onSubmit={handleSubmit}>

        <label htmlFor='name'>Name:</label>
        <input
          type='text'
          id='name'
          name='name'
          onChange={handleChange}
          required
        />

        <br />

        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          name='email'
          onChange={handleChange}
          required
        />

        <br />

        <label>Gender:</label>
        <input
          type='radio'
          id='female'
          name='gender'
          value='female'
          checked={formData.gender === 'female'}
          onChange={handleChange}
          required
        />
        <label htmlFor='female'>Female:</label>
        <input
          type='radio'
          id='male'
          name='gender'
          value='male'
          checked={formData.gender === 'male'}
          onChange={handleChange}
          required
        />
        <label htmlFor='male'>Male:</label>

        <br />

        <label htmlFor='subscribe'>Subscribe:</label>
        <input
          type='checkbox'
          id='subscribe'
          name='subscribe'
          checked={formData.subscribe === true}
          onChange={handleChange}
        />

        <br />

        <button>Submit</button>

      </form>
    </>
  )
}

export default App
