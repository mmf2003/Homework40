import { useRef, useState } from "react";

function UncontrolledForm() {
    const inputRef = useRef(null);
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const value = inputRef.current.value.trim();

        if (!value) {
            setMessage("Please enter your name.");
            return;
        }

        setMessage(`Hello, ${value}!`);

        inputRef.current.value = "";
        inputRef.current.focus();
    };

    return (
        <div className="card">
            <h2>Uncontrolled Form</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    ref={inputRef}
                />

                <button type="submit">Submit</button>
            </form>

            {message && <p className="success-message">{message}</p>}
        </div>
    );
}

export default UncontrolledForm;
