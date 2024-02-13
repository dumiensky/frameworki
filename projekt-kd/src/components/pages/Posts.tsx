import Page from "../layout/Page";
import { Post as PostType } from "../../types/types";
import { useEffect, useState } from "react";
import { getPosts } from "../../api/placeholderApi";
import { List } from "antd";
import { Link } from "react-router-dom";

const Posts = () => {

    const [posts, setPosts] = useState<PostType[]>([]);

    useEffect(() => {
        getPosts().then((e) => setPosts(e));
    }, []);

    return (
        <Page title='Posts'>
            <List
                style={{ textAlign: "left" }}
                bordered
                dataSource={posts}
                renderItem={(post) => (
                    <List.Item>
                        <Link to={`/posts/${post.id}`}>
                            <strong>{post.title}</strong><br/>
                            <small>{post.body}</small>
                        </Link>
                    </List.Item>
                )}
            />
        </Page>
    );
}


export default Posts;