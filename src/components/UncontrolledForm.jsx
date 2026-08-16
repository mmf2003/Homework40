import { useRef } from "react";

function UncontrolledForm() {
    const inputRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();

        alert(`Hello, ${inputRef.current.value}!`);

        inputRef.current.value = "";
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
        </div>
    );
}

export default UncontrolledForm;
