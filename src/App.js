import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import './App.css'
import { DarkModeProvider } from "./contexts/DarkMode";


const filters = ["all", "active", "completed"];
function App() {
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
     <DarkModeProvider>
      <Header
        filters={filters}
        filter={filter}
        onFilterChange={(filter) => setFilter(filter)}
      />
      <TodoList  filter={filter}/>
      </DarkModeProvider>
    </>
  );
}

export default App;
