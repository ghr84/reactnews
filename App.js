import React from 'react';
import React from './News';

function App() {

    const [data, setData] = useState({});
  
    useEffect(()=>{
      if(!data.length){
        fetch("http://localhost:5000")
        .then(r=>r.json())
        .then((json)=>{
          console.log(json);
          setData(json);
        });
      }
    })
     
    return (
       
      <div>

        {data.map(news=>{
          console.log(news);
          return <News event={news}/>;
        })} 
      </div>
    );
  }

export default App;
