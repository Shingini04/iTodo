import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TaskList from './pages/TaskList';
import Calendar from './pages/Calendar';
import Settings from './pages/Settings';
import { TaskProvider } from './pages/TaskContext';

function App() {
  return (
    <TaskProvider>
      <Router>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
              <Routes>
                <Route path="/" element={<TaskList />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </TaskProvider>
  );
}

export default App;
