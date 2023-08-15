import Layout from '../components/template/Layout';
import useAppData from '../data/hook/useAppData';

export default function Notifications() {
  const { changeTheme } = useAppData();

  return (
    <Layout
      title='Notificações'
      subtitle='Aqui você irá gerenciar suas notificações!'>

      <button onClick={changeTheme}>Alternar Tema</button>
    </Layout>
  );
};
