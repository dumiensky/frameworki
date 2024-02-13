import { Button } from "antd";
import { Link } from "react-router-dom";
import Page from "../layout/Page";

const Home = () => (
    <Page title='Home'>
        <div
            style={{
                padding: '60px 0',
                minHeight: 360,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <p>
                JSONPlaceholder-consuming UI built in:<br />
                <strong>React + React-Router + TS + Vite + AntDesign</strong>
            </p>
            <div style={{
                margin: '60px 0',
                display: 'flex',
                gap: '12px',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <Link to="/posts">
                    <Button type="primary">
                        Posts
                    </Button>
                </Link>

                <Link to="/albums">
                    <Button type="primary">
                        Albums
                    </Button>
                </Link>

                <Link to="/users">
                    <Button type="primary">
                        Users
                    </Button>
                </Link>
            </div>
        </div>
    </Page>
);

export default Home;
