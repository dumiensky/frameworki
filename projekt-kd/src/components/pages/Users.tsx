import Page from "../layout/Page";
import { User as UserType } from "../../types/types";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/placeholderApi";
import { Input, List } from "antd";
import { Link } from "react-router-dom";

const Users = () => {

    const [users, setUsers] = useState<UserType[]>([]);
    const [searchName, setSearchName] = useState<string>('');

    useEffect(() => {
        getUsers().then((e) => setUsers(e));
    }, []);

    return (
        <Page title='Users'>
            <Input 
                placeholder="Search users..." 
                value={searchName}
                onChange={e => setSearchName(e.currentTarget.value)} style={{marginBottom: '10px'}} />
            <List
                style={{ textAlign: "left" }}
                bordered
                dataSource={users.filter(e => searchName == '' ? true : e.name.toLowerCase().includes(searchName.toLowerCase()))}
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