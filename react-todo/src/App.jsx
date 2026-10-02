import Header from './components/Headers/Header.jsx'
import "./App.css"
import UserInfo from './components/UserInfo/Userinfo.jsx';
import TodoForm from './components/TodoForm/TodoForm.jsx';
import TodoList from './components/TodoList/TodoList.jsx';
function App() {
      return (
            <div>
          <Header/>
          <UserInfo/>
          <TodoList/>
          <TodoForm/>
          </div>
              );
}


export default App;
