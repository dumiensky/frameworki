import Page from "../layout/Page";
import { Album as AlbumType } from "../../types/types";
import { useEffect, useState } from "react";
import { getAlbums } from "../../api/placeholderApi";
import { List } from "antd";
import { Link } from "react-router-dom";

const Albums = () => {

    const [albums, setAlbums] = useState<AlbumType[]>([]);

    useEffect(() => {
        getAlbums().then((e) => setAlbums(e));
    }, []);

    return (
        <Page title='Albums'>
            <List
                style={{ textAlign: "left" }}
                bordered
                dataSource={albums}
                renderItem={(album) => (
                    <List.Item>
                        <Link to={`/albums/${album.id}`}>{album.title}</Link>
                    </List.Item>
                )}
            />
        </Page>
    );
}


export default Albums;