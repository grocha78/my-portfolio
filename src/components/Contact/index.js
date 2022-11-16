import React from "react";

// import { validateEmail } from "../../utils/helpers";

function Contact() {
    // const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // const [errorMessage, setErrorMessage] = useState('');
    // const { name, email, message } = formState;

    // function handleSubmit(e) {
    //     e.preventDefault();
    //     if (!errorMessage) {
    //         setFormState({ [e.target.name]: e.target.value });
    //         console.log('Form', formState);
    //     }
    // };

    // function handleChange(e) {
    //     if(e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         console.log(isValid);
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if (!e.target.value.length) {
    //             setErrorMessage(`${e.target.name} is required.`);
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }
    // };

    return (
        <section>
            <p>Contact me by <a href="mailto:rochalupe@gmail.com">EMAIL</a></p>
            <p>or visit me on my socials below 👇 </p>
        </section>
    );
}

export default Contact;