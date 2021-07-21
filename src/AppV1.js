import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import Logo from './components/Logo'
// import Menu from './components/Menu'
import Menu_without_custom_hook from './components/Menu_without_custom_hook';
import Sidebar from './components/Sidebar'

function AppV1() {
  return (
    <div>
      <Logo />
      <Header />
      <Footer title="Google" website='www.google.com' postcode={70110} isOpen={false} />
      <hr/>
      <Sidebar />
      <hr/>
      {/* <Menu /> */}
      <Menu_without_custom_hook />
    </div>
  );
}

export default AppV1
