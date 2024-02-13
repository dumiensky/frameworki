import { Layout, theme } from "antd";
import { Button } from "antd";
import { Link } from "react-router-dom";

const { Header, Content } = Layout;

const Home = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Header
                style={{
                    padding: 0,
                    background: colorBgContainer,
                    textAlign: "center",
                    fontSize: "3em"
                }}>
                Home
            </Header>
            <Content>
                <div
                    style={{
                        padding: '60px 0',
                        minHeight: 360,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
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
            </Content>
        </>
    );
};

export default Home;
