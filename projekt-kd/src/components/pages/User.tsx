import Page from "../layout/Page";
import { Album, User as UserType, Todo, Post } from "../../types/types";
import { useEffect, useState, useContext } from "react";
import { getUser, getUserAlbums, getUserPosts, getUserTodos } from "../../api/placeholderApi";
import { List } from "antd";
import { useParams, Link } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';
import Authorized from "../general/Authorized";
import FakeDeleteButton from "../general/FakeDeleteButton";

const User = () => {

    const { userId } = useParams();
    if (!userId)
        return null;

    const [user, setUser] = useState<UserType>();
    const [albums, setAlbums] = useState<Album[]>();
    const [posts, setPosts] = useState<Post[]>();
    const [todos, setTodos] = useState<Todo[]>();

    useEffect(() => {
        getUser(userId).then(e => {
            setUser(e);
            getUserAlbums(e.id).then(setAlbums);
            getUserPosts(e.id).then(setPosts);
            getUserTodos(e.id).then(setTodos);
        });
    }, [userId]);

    return (
        user ?
            <Page title={user.name}>
                <Authorized userId={user.id}>
                    <div style={{display: 'flex', justifyContent: 'end'}}>
                        <FakeDeleteButton>
                            Delete your account
                        </FakeDeleteButton>
                    </div>
                </Authorized>
                <ul>
                    <li><strong>Address</strong>: {user.address.zipcode} {user.address.city}, {user.address.street} {user.address.suite}</li>
                    <li><strong>Company</strong>: {user.company.name}</li>
                    <li><strong>Website</strong>: {user.website}</li>
                </ul>
                
                <h3>Albums</h3>
                <List
                    dataSource={albums}
                    renderItem={(album) => (
                        <List.Item>
                            <Link to={`/albums/${album.id}`}>
                                {album.title}
                            </Link>
                        </List.Item>
                    )} />

                <h3>Posts</h3>
                <List
                    dataSource={posts}
                    renderItem={(post) => (
                        <List.Item>
                            <Link to={`/posts/${post.id}`}>
                                {post.title}
                            </Link>
                        </List.Item>
                    )} />

                <h3>Todos</h3>
                <List
                    dataSource={todos}
                    renderItem={(todo) => (
                        <List.Item>
                            {
                                todo.completed
                                    ? <span style={{color: 'green'}}><strong>[DONE]</strong> {todo.title}</span>
                                    : <span>{todo.title}</span>
                            }
                        </List.Item>
                    )} />
            </Page>
            : <LoadingOutlined spin />
    );
}


export default User;