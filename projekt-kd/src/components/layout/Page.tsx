import { Layout } from "antd";
import PageTitle from "./PageTitle";

type PageProps = {
    title: string,
    children: React.ReactNode;
}

const Page = (props: PageProps) => (
    <>
        <PageTitle>
            {props.title}
        </PageTitle>
        <Layout.Content>
            {props.children}
        </Layout.Content>
    </>
)

export default Page;