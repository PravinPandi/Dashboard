import './App.css';
import SiderDemo from '../src/admin/AntLayout';
import Sam from './admin/Sam';
import DemoColumn from './admin/Graph';
import DemoPie from './admin/Chart';

const App=()=> {
  return (
    <div className="App">
        {/* <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Login/Home' element={<Home/>}/>
        </Routes> */}
        {/* <SiderDemo/> */}
        <Sam />
        {/* <Menu/> */}
    </div>
  );
}

export default App;
