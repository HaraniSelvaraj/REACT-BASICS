import React, { useState } from 'react';
import './Form.css';

function Form() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [courses, setCourses] = useState([]);
    const [comments, setComments] = useState("");
    const [errors, setErrors] = useState({
        firstName: false,
        lastName: false,
        gender: false,
        courses: false,
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = {
            firstName: firstName.length === 0,
            lastName: lastName.length === 0,
            gender: gender.length === 0,
            courses: courses.length === 0,
        };

        setErrors(newErrors);

        if (!Object.values(newErrors).some((error) => error)) {
            console.log("Form submitted:", {
                firstName,
                lastName,
                gender,
                courses,
                comments,
            });
        }
    };

    const handleCourseChange = (course) => {
        const updatedCourses = [...courses];

        if (updatedCourses.includes(course)) {
            // If course is already selected, remove it
            updatedCourses.splice(updatedCourses.indexOf(course), 1);
        } else {
            // Otherwise, add the course
            updatedCourses.push(course);
        }

        setCourses(updatedCourses);
    };

    return (
        <div>
            <h1>LoginForm</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input
                        type='text'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    {errors.firstName && <p>Please enter first name.</p>}
                </div>

                <div>
                    <label>Last Name:</label>
                    <input
                        type='text'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    {errors.lastName && <p>Please enter last name.</p>}
                </div>

                <div>
                    <label>Gender:</label>
                    <label>
                        <input
                            type='radio'
                            value='female'
                            checked={gender === 'female'}
                            onChange={() => setGender('female')}
                        />
                        Female
                    </label>
                    <label>
                        <input
                            type='radio'
                            value='male'
                            checked={gender === 'male'}
                            onChange={() => setGender('male')}
                        />
                        Male
                    </label>
                    {errors.gender && <p>Please select gender.</p>}
                </div>

                <div>
                    <label>Courses:</label>
                    <label>
                        <input
                            type='checkbox'
                            value='Java'
                            checked={courses.includes('Java')}
                            onChange={() => handleCourseChange('Java')}
                        />
                        Java
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            value='C++'
                            checked={courses.includes('C++')}
                            onChange={() => handleCourseChange('C++')}
                        />
                        C++
                    </label>
                    <label>
                        <input
                            type='checkbox'
                            value='React'
                            checked={courses.includes('React')}
                            onChange={() => handleCourseChange('React')}
                        />
                        React
                    </label>
                    {errors.courses && <p>Please select at least one course.</p>}
                </div>

                <div>
                    <label>Additional Comments:</label>
                    <textarea
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Form;