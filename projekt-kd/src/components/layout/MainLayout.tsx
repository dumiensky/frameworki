import { Outlet } from "react-router-dom";
import { InputNumber, Layout, theme } from "antd";
import { useState } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Menu from "./Menu";

const { Content, Footer, Sider } = Layout;

const MainLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [userId = 1, setUserId] = useState<number | null>();

  return (
    <Layout hasSider>
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}>
        <Menu />
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'end', gap: '10px'}}>
          <p>Simulate login by userId:</p>
          <InputNumber value={userId} onChange={e => setUserId(e)} min={0} />
        </div>
        <CurrentUserContext.Provider value={{userId: userId ?? 1}}>
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
