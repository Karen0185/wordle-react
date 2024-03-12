import Game from './components/game/game';
import Search from "./components/pages/search/Search";
import Settings from "./components/pages/settings";
import Notifiactions from "./components/pages/Notifiactions";
import Login from "./components/pages/auth/login";
import Registration from "./components/pages/auth/registration";
import Guest from "./components/pages/auth/guest";
import SendWord from './components/pages/SendWord';

import './components/pages/pages.scss'
import './components/navigation/Navigation.scss'
import './App.scss'
import { Routes, Route } from "react-router-dom";
import Navigation from './components/navigation/Navigation';

const App = () => {


  const routes = [
    { path: '/', Component: Game },
    { path: '/send_word', Component: SendWord },
    { path: '/notifications', Component: Notifiactions },
    { path: '/search', Component: Search },
    { path: '/settings', Component: Settings },
    { path: '/login', Component: Login },
    { path: '/registration', Component: Registration },
    { path: '/guest', Component: Guest },
  ]

  window.addEventListener('load', () => {
  })

  return (
    <div className="App">
      <div className="container">
        <h1 className="logoText">Wordle</h1>
        <Navigation />
        <Routes>
          {routes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </div>
    </div>
  );
}

export default App;
