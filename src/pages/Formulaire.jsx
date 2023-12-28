import React, { useState } from 'react';
import axios from 'axios';
import DefaultLayout from '../layout/DefaultLayout.jsx';
import '../layout/Formulaire.css'; // Assurez-vous d'avoir le fichier de style

const Formulaire = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        role: 'participant',
        message: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/send-email', formData);
            alert('Form submitted successfully');
            // Handle successful response
        } catch (error) {
            console.error('Error sending form data', error);
            alert('Failed to submit the form: ' + error.message); // Include the error message
            // Optionally update state here to indicate error to the user
        }
    };
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <DefaultLayout>
            <div className="formulaire-container">
                <form onSubmit={handleSubmit} className="formulaire">
                    <h1>Congress Registration</h1>
                    <div className="input-group">
                        <input 
                            type="text" 
                            name="fullName" 
                            placeholder="Full Name" 
                            required 
                            value={formData.fullName} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="input-group">
                        <input 
                            type="email" 
                            name="email" 
                            placeholder="Email Address" 
                            required 
                            value={formData.email} 
                            onChange={handleChange} 
                        />
                    </div>
                    <div className="input-group">
                        <select name="role" value={formData.role} onChange={handleChange}>
                            <option value="participant">Participant</option>
                            <option value="exhibitor">Exhibitor</option>
                            <option value="speaker">Speaker</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <textarea 
                            name="message" 
                            placeholder="Your Message" 
                            value={formData.message} 
                            onChange={handleChange} 
                        />
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </DefaultLayout>
    );
};

export default Formulaire;
