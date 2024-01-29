import { Button } from "../Button/component";
import styles from "./styles.module.scss";
export const Header = () => {
    return (
        <header className={styles.root}>
            <Button onclick={() => console.log("Menu")}>Open Menu</Button>
            <Button onclick={() => console.log("Sign In")}>Sign In</Button>
        </header>
    );
};
