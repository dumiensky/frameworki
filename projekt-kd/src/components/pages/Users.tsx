import Page from "../layout/Page";
import { User as UserType } from "../../types/types";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/placeholderApi";
import { List } from "antd";
import { Link } from "react-router-dom";

const Users = () => {

    const [users, setUsers] = useState<UserType[]>([]);

    useEffect(() => {
        getUsers().then((e) => setUsers(e));
    }, []);

    return (
        <Page title='Users'>
            <List
                style={{ textAlign: "left" }}
                bordered
                dataSource={users}
                renderItem={(user) => (
                    <List.Item>
                        <Link to={`/users/${user.id}`}>
                            <strong>{user.name}</strong><br/>
                            <small>{user.email}</small>
                        </Link>
                    </List.Item>
                )}
            />
        </Page>
    );
}


export default Users;