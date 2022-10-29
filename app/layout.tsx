import { FC, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
}

const HomeLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        padding: '20px',
        background: '#ddd',
      }}
    >
      {children}
    </div>
  );
};

export default HomeLayout;