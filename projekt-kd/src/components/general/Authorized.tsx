import { CurrentUserContext, CurrentUserContextType } from "../../contexts/CurrentUserContext";
import { useContext } from "react";

type AuthorizedProps = {
    userId: number,
    children: React.ReactNode
}

const Authorized = ({userId, children} : AuthorizedProps) => {

    const { userId: currentUserId } = useContext(CurrentUserContext) as CurrentUserContextType;

    if (userId !== currentUserId)
        return null;

    return children;
};

export default Authorized;