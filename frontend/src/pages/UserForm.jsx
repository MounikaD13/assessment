import React, { useState } from 'react'

export default function UserForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
    })
    const [submit, setSubmit] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        setSubmit(formData)
        setIsSubmitted(true)
    }

    function handleReset(e) {
        e.preventDefault()
        setFormData({
            name: "",
            email: "",
            age: "",
        })
        setSubmit(null)
        setIsSubmitted(false)
    }

    return (
        <div>
            <h2 className='text-center'><strong>User Form</strong></h2>
            <form onSubmit={handleSubmit} className='border text-center'>
                <div>
                    Name:
                    <input type="text" name="name" value={formData.name}
                        onChange={handleChange}
                        className='border' />
                </div>
                <div>
                    Email:
                    <input type="email" name='email' value={formData.email}
                        onChange={handleChange}
                        className='border' />
                </div>
                <div>
                    Age:
                    <input type="text" name='age' value={formData.age}
                        onChange={handleChange}
                        className='border' />
                </div>
                <div className='flex gap-2'>
                    <button className='border' type='submit'>Submit</button>
                    <button onClick={handleReset} className='border'>
                        Reset
                    </button>
                </div>
            </form>
            {isSubmitted ? (
                <div className='text-center'>
                    <h1>User Submitted details</h1>
                    <p>Name: {submit.name}</p>
                    <p>Age: {submit.age}</p>
                    <p>Email:{submit.email}</p>
                </div>
            ) : (
                <p> No details</p>
            )}
        </div>
    )
}
