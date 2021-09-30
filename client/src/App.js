import Login from "./components/login/Login";
import Main from "./components/main/Main";
import { Route, Switch } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import api from "./api/axiosBase";
import { useAuth } from "./context/AuthContext";

function App() {
  const { currentUser } = useAuth();

  api.interceptors.request.use(
    async (config) => {
      const token = await currentUser.getIdToken();
      config.headers.token = token;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <div className='min-h-screen w-full flex pl-4 pt-8 pr-4 pb-8 bg-gradient-to-br from-gray-100 via-purple-200 to-gray-50'>
      <Switch>
        <Route path='/login' component={Login} />
        <ProtectedRoute exact path='/' component={Main} />
      </Switch>
    </div>
  );
}

export default App;
