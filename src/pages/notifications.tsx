import Layout from '../components/template/Layout';
import { AppConsumer } from '../data/context/AppContext';
import useAppData from '../data/hook/useAppData';

export default function Notifications() {
  const context = useAppData();

  return (
    <Layout
      title='Notificações'
      subtitle='Aqui você irá gerenciar suas notificações!'>

      <AppConsumer>
        {data => <h3>{data.name}</h3>}
      </AppConsumer>

      <h3>{context.name}</h3>

    </Layout>
  );
};
