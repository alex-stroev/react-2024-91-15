import { Layout } from "./components/Layout/component";
import { Restaurants } from "./components/Restaurants/component";
import { UserContext } from "./contexts/user";
import { useState } from "react";
import { Provider } from "react-redux";
import { store } from "./redux";
import "./App.scss";

function App() {
    const [user, setUser] = useState(null);
    return (
        <Provider store={store}>
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
        </Provider>
    );
}

export default App;
