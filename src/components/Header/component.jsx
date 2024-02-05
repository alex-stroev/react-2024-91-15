import { useContext } from "react";
import { Button } from "../Button/component";
import { UserContext } from "../../contexts/user";
import styles from "./styles.module.scss";
export const Header = () => {
    const { user, setUser } = useContext(UserContext);

    const mockUser = {
        name: "Вася",
        email: "mr.vasya@mail.ru",
    };

    return (
        <header className={styles.root}>
            {user?.name ? (
                <span>
                    Hello, {user.name}{" "}
                    <Button
                        onclick={() => {
                            setUser(null);
                        }}
                    >
                        Sign Out
                    </Button>
                </span>
            ) : (
                <Button
                    onclick={() => {
                        setUser(mockUser);
                    }}
                >
                    Sign In
                </Button>
            )}
        </header>
    );
};
