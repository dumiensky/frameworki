import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";
import { useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Menu from "./Menu";

const { Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [userId = 1, setUserId] = useState<number>();

  return (
    <Layout hasSider>
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}>
        <Menu />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <p>Simulate login by userId:</p>
        <input type='number' value={userId} onChange={e => setUserId(e.currentTarget.valueAsNumber)} min={0} />
        <hr/>
        <CurrentUserContext.Provider value={{userId: userId}}>
          <Content style={{ margin: '24px 16px', overflow: 'initial' }}>
            <div
              style={{
                padding: 24,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}>
              <Outlet />
            </div>
          </Content>
        </CurrentUserContext.Provider>
        <Footer style={{ textAlign: 'center' }}>
          Kacper Dumieński 12840, WSEI, Frameworki frontendowe
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
