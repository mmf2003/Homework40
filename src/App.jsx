import "./App.css";

import ControlledForm from "./components/ControlledForm";
import UncontrolledForm from "./components/UncontrolledForm";
import UsersList from "./components/UsersList";

function App() {
    return (
        <div className="app">
            <h1>React Forms and API</h1>

            <ControlledForm />

            <UncontrolledForm />

            <UsersList />
        </div>
    );
}

export default App;
