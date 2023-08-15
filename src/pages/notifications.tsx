import Layout from '../components/template/Layout';
import useAppData from '../data/hook/useAppData';

export default function Notifications() {
  const { switchTheme } = useAppData();

  return (
    <Layout
      title='Notificações'
      subtitle='Aqui você irá gerenciar suas notificações!'>

      <button onClick={switchTheme}>Alternar Tema</button>
    </Layout>
  );
};
