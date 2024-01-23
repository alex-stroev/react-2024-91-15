import { Layout } from "./components/Layout/component";
import { RestaurantsList } from "./components/RestaurantsList/component";
import "./App.scss";

function App() {
    return (
        <Layout>
            <div className="kernel">
                <RestaurantsList />
            </div>
        </Layout>
    );
}

export default App;
