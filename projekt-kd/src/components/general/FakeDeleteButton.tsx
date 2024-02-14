import { Button, message } from "antd";
import type { ConfigProviderProps } from 'antd';

type SizeType = ConfigProviderProps['componentSize'];

type FakeDeleteButtonProps = {
    small?: boolean
    children: React.ReactNode
}

const FakeDeleteButton = ({small, children} : FakeDeleteButtonProps) => {

    const [messageApi, context] = message.useMessage();

    const info = () => {
        messageApi.success('This would be a successfull DELETE api-call when working with a non-readonly api')
    };

    return (
        <>
            {context}
            <Button 
                size={(small ? 'small' : 'default') as SizeType}
                type="primary" 
                danger 
                onClick={info}>
                {children}
            </Button>
        </>
    );
};

export default FakeDeleteButton;