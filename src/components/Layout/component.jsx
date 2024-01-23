import { Header } from "../Header/component";
import { Footer } from "../Footer/component";
export const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};
