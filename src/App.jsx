import { Layout } from "./components/Layout/component";
import { Restaurants } from "./components/Restaurants/component";
import { UserContext } from "./contexts/user";
import { useState } from "react";
import "./App.scss";

function App() {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
            }}
        >
            <Layout>
                <Restaurants />
            </Layout>
        </UserContext.Provider>
    );
}

export default App;
