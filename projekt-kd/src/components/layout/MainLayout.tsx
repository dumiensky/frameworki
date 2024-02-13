import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";
import Menu from "./Menu";

const { Header, Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout hasSider>
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}>
        <Menu />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: '24px 16px', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Kacper Dumieński 12840, WSEI, Frameworki frontendowe
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
