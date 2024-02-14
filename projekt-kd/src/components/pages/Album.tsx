import Page from "../layout/Page";
import { Album as AlbumType, Photo as PhotoType } from "../../types/types";
import { useEffect, useState } from "react";
import { getAlbum, getAlbumPhotos } from "../../api/placeholderApi";
import { List } from "antd";
import { useParams } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons';

const Album = () => {

    const { albumId } = useParams();
    if (!albumId)
        return null;

    const [album, setAlbum] = useState<AlbumType>();
    const [photos, setPhotos] = useState<PhotoType[]>();

    useEffect(() => {
        getAlbum(albumId).then((e) => setAlbum(e));
        getAlbumPhotos(albumId).then((e) => setPhotos(e));
    }, [albumId]);

    return (
        album ?
            <Page title={album.title}>
                <List
                    grid={{ gutter: 16, column: 4 }}
                    dataSource={photos}
                    renderItem={(photo) => (
                        <List.Item>
                            <img
                                src={photo.thumbnailUrl}
                                alt={photo.title}
                                style={{ width: "100%" }} />
                        </List.Item>
                    )} />
            </Page>
            : <LoadingOutlined spin />
    );
}


export default Album;