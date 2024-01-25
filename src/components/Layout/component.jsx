import { Header } from "../Header/component";
import { Footer } from "../Footer/component";
export const Layout = ({ children }) => {
    return (
        <div className="kernel">
            <Header />
            {children}
            <Footer />
        </div>
    );
};
