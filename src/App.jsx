// import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import TaskContainer from './components/tasks/TaskContainer'
import TaskProvider from './context/TaskContext'

function App() {
  return (
    <TaskProvider>
      <Navbar />
      <Header />
      <TaskContainer />
      <Footer />
    </TaskProvider>
  )
}

export default App
