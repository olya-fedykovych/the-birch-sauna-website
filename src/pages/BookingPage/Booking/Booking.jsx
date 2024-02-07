import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Booking.css';
import Input from './Form/Input';
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

const Booking = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        phoneNumber: "",
        dateAndTime: "",
        });

        const inputs = [
            {
                id: 1,
                name: "name",
                type: "text",
                placeholder: "Name Surname",
                errorMessage:
                    "Please, enter your full name",
                label: "Full Name",
                required: true,
            },
            {
                id: 2,
                name: "email",
                type: "email",
                placeholder: "email@emal.com",
                errorMessage: "Please, enter a valid email address",
                label: "Email",
                required: true,
            },
            {
                id: 4,
                name: "phoneNumber",
                type: "tel",
                placeholder: "XXX XXX XXX",
                errorMessage:
                    "Please, enter a valid phone number",
                label: "Phone Number",
                pattern: `^(?=.*[0-9]){9}$`,
                required: true,
            },
            {
                id: 3,
                name: "dateAndTime",
                type: "date",
                placeholder: "dd/mm/yyyy",
                errorMessage:
                    "Please, choose a booking date",
                label: "Date of Booking",
                required: true,
            },
        ];

        const navigateToConfirmation = useNavigate();
    
        const handleSubmit = (e) => {
            e.preventDefault();
            navigateToConfirmation('/confirmation');
        };
    
        const onChange = (e) => {
            setValues({ ...values, [e.target.name]: e.target.value })
        };
    

    return (
        <>
            <Header />
            <div className="booking">
                <form onSubmit={handleSubmit}>
                    <h2>Book</h2>

                    <div className="choiceContainer">
                    <input type="radio" className="choice" name="choice" checked/>
                    <label className="choiceLabelSauna">Sauna</label>
                        
                    <input type="radio" className="choice" name="choice"/>
                    <label className="choiceLabelPavilion">Pavilion</label>
                    </div>

                    {inputs.map((input) => (
                    <Input
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                        required
                        
                        />
                    ))}
                    <button className="bookNow">book now</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Booking;

