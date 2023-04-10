import { useContext } from 'react';
import { AppContext } from './components/context';
import Search from './components/SearchBox/Search';
import Pagination from './components/Pagination/Pagination';
import NewsList from './components/NewsList/NewsList';
function App() {
  const data = useContext(AppContext);
  return (
    <>
      <Search />
      <Pagination />
      <NewsList />
    </>
  );
}

export default App;
