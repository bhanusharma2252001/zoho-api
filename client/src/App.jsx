import BasicTable from "./table"
fetch(`https://jsonplaceholder.typicode.com/posts`)
   .then((response) => console.log(response))
   .catch((err) => console.log(err))

const App = () => {
  return <div>
    <BasicTable/>
  </div>;
};

export default App;