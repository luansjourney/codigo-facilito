import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {
  Provider
} from 'react-redux';

//import redux store
import { store } from './store';

//Import components
import NotImplemented from './components/NotImplemented';
import HolaIndex from './components/HolaIndex';
import HolaVideos from './components/HolaVideos';
import UsuariosOutlet from './components/UsuariosOutlet';
import VideoShow from './components/VideoShow';
import Error404 from './components/Error404';
import SignIn from './users/SignIn';



function App() {


  return (
    <>
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<HolaIndex />} />

            <Route path="/usuarios" element={<UsuariosOutlet />}>
              <Route path="registro" element={<NotImplemented />} />
              <Route path="login" element={<SignIn />} />
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
        </Provider>
      </Router>
    </>
  );
}

export default App;
