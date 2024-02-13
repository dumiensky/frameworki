import { Layout, theme } from "antd";

type PageTitleProps = {
    children: React.ReactNode;
}

const PageTitle = (props: PageTitleProps) => {
    const {
        token: { colorBgContainer, colorPrimary },
    } = theme.useToken();

    return (
        <Layout.Header
            style={{
                padding: 0,
                background: colorBgContainer,
                color: colorPrimary,
                textAlign: "center",
                fontSize: "3em"
            }}>
            {props.children}
        </Layout.Header>
    )
}

export default PageTitle;