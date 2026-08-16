import { useState } from "react";

function ControlledForm() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!name.trim()) {
            setMessage("Please enter your name.");
            return;
        }

        setMessage(`Hello, ${name}!`);
        setName("");
    };

    return (
        <div className="card">
            <h2>Controlled Form</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <button type="submit">Submit</button>
            </form>

            <p>Current value: {name}</p>

            {message && <p className="success-message">{message}</p>}
        </div>
    );
}

export default ControlledForm;
