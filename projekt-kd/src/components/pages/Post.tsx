import Page from "../layout/Page";
import { Post as PostType, Comment as CommentType, User } from "../../types/types";
import { useEffect, useState } from "react";
import { getPost, getPostComments, getUser } from "../../api/placeholderApi";
import { List } from "antd";
import { useParams } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';

const Post = () => {

    const { postId } = useParams();
    if (!postId)
        return null;

    const [post, setPost] = useState<PostType>();
    const [user, setUser] = useState<User>();
    const [comments, setComments] = useState<CommentType[]>();

    useEffect(() => {
        getPost(postId).then((e) => {
            setPost(e);
            getUser(e.userId).then(setUser);
        });
        getPostComments(postId).then((e) => setComments(e));
    }, [postId]);

    return (
        post ?
            <Page title={post.title}>
                <h5 style={{textAlign: 'center'}}>by <strong>{user?.name}</strong></h5>
                <p style={{border: '1px solid black', borderRadius: '10px', padding: '20px', background: '#eee'}}>{post.body}</p>
                <List
                    dataSource={comments}
                    renderItem={(comment) => (
                        <List.Item style={{border: '1px solid #888', borderRadius: '10px', padding: '5px 20px', marginTop: '5px', background: '#fafafa'}}>
                            <p>
                                <strong>{comment.name}:</strong> {comment.body}
                            </p>
                        </List.Item>
                    )} />
            </Page>
            : <LoadingOutlined spin />
    );
}


export default Post;