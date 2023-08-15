import Layout from '../components/template/Layout';
import useAppData from '../data/hook/useAppData';

export default function Notifications() {
  const contextData = useAppData();

  return (
    <Layout
      title='Notificações'
      subtitle='Aqui você irá gerenciar suas notificações!'>

      <h3>{contextData.name}</h3>
    </Layout>
  );
};
