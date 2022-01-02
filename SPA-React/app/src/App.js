import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';


//Import components
import NotImplemented from './components/NotImplemented';
import HolaIndex from './components/HolaIndex';
import HolaVideos from './components/HolaVideos';
import UsuariosOutlet from './components/UsuariosOutlet';
import VideoShow from './components/VideoShow';
import Error404 from './components/Error404';



function App() {

  const isAuth = false;

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HolaIndex />} />

          <Route path="/usuarios" element={isAuth ? <Navigate to="/" /> : <UsuariosOutlet />}>
            <Route path="registro" element={<NotImplemented />} />
            <Route path="login" element={<NotImplemented />} />
            <Route path=":id" element={<NotImplemented />} />
            <Route path=":id/videos" element={<NotImplemented />} />
          </Route>

          <Route path="/videos"> 
            <Route path="videos" element={ <HolaVideos />} />
            <Route path="nuevo" element={<NotImplemented />} />
            <Route path=":id" element={<VideoShow />} />
          </Route>

          <Route path="*" element={ <Error404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
