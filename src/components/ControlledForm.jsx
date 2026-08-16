import { useState } from "react";

function ControlledForm() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Hello, ${name}!`);
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
        </div>
    );
}

export default ControlledForm;
