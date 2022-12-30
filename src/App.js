import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS,Title,Tooltip,LineElement,Legend, CategoryScale,LinearScale,PointElement } from 'chart.js';
 ChartJS.register(
  Title, Tooltip,LineElement,Legend,CategoryScale
  ,LinearScale,PointElement
 )

function App(){
  const[data]=useState({
    labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
    datasets:[
      {
      label:"COVID cases",
      backgroundColor:"purple",
      data:[10,20,30,40,50,43,35,83,61,73,22,58],
    }
    ]
  })
 return (
    <div className="App" style={{width:'600px',height:'300px',backgroundColor:"antiquewhite"}}>
      <Line data={data} style={{color:"yellow"}}>Hi</Line>
               
     </div>
 );
};
export default App;
