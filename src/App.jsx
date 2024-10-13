import React, { useState } from "react";  
import Select from 'react-select'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'  
import { faUser, faUserSlash } from '@fortawesome/free-solid-svg-icons' 
import './App.css';
import SadhanaTable from "./components/SadhanaTable"
import ImageDisplay from "./components/ImageDisplay"

const reports = { "1":[
  {  
    name: 'Slept at',  
    values: ['10 PM', '10 PM', '10 PM', '10 PM', '10 PM', '10 PM', '10 PM']  
  },  
  {  
    name: 'Woke up at',  
    values: ["4 AM", "4 AM", "4 AM", "4 AM", "4 AM", "4 AM", "4 AM"]  
  },  
  {  
    name: '16 rounds completed at',  
    values: ["7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM"]   
  },
  {  
    name: 'Total Rounds Chanted',  
    values: ['16', '16', '16', '16', '16', '16', '16']  
  },
  {  
    name: 'Reading (minutes)',  
    values: ['30', '30', '30', '30', '30', '30', '30']  
  },
  {  
    name: 'Hearing (minutes)',  
    values: ['30', '30', '30', '30', '30', '30', '30']  
  },
  {  
    name: 'Day Sleep (minutes)',  
    values: ['30', '30', '30', '30', '30', '30', '30']  
  } 
],
"2":[
  {  
    name: 'Slept at',  
    values: ['9 PM', '9 PM', '9 PM', '9 PM', '9 PM', '9 PM', '9 PM']  
  },  
  {  
    name: 'Woke up at',  
    values: ["1 AM", "1 AM", "1 AM", "1 AM", "1 AM", "1 AM", "1 AM"]  
  },  
  {  
    name: '16 rounds completed at',  
    values: ["4 AM", "4 AM", "4 AM", "4 AM", "4 AM", "4 AM", "4 AM"]   
  },
  {  
    name: 'Total Rounds Chanted',  
    values: ['24', '24', '24', '24', '24', '24', '24']  
  },
  {  
    name: 'Reading (minutes)',  
    values: ['60', '60', '60', '60', '60', '60', '60']  
  },
  {  
    name: 'Hearing (minutes)',  
    values: ['60', '60', '60', '60', '60', '60', '60']   
  },
  {  
    name: 'Day Sleep (minutes)',  
    values: ['0', '0', '0', '0', '0', '0', '0']    
  } 
],
"3":[
  {  
    name: 'Slept at',  
    values: ['8 PM', '8 PM', '8 PM', '8 PM', '8 PM', '8 PM', '8 PM']  
  },  
  {  
    name: 'Woke up at',  
    values: ["3 AM", "3 AM", "3 AM", "3 AM", "3 AM", "3 AM", "3 AM"]  
  },  
  {  
    name: '16 rounds completed at',  
    values: ["7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM", "7:30 AM"]   
  },
  {  
    name: 'Total Rounds Chanted',  
    values: ['16', '16', '16', '16', '16', '16', '16']  
  },
  {  
    name: 'Reading (minutes)',  
    values: ['30', '30', '30', '30', '30', '30', '30']  
  },
  {  
    name: 'Hearing (minutes)',  
    values: ['30', '30', '30', '30', '30', '30', '30']  
  },
  {  
    name: 'Day Sleep (minutes)',  
    values: ['30', '30', '30', '30', '30', '30', '30']  
  } 
]
};  

const profileData = {"1":"Himank P", "2": "Radha Madhav P", "3": "Anurag P"}
const options = [  
  { value: "1", label: "Himank P" },  
  { value: "2", label: "Radha Madhav P" },
  { value: "3", label: "Anurag P" },
];

  
function App() {  
  const [selectedValue, setSelectedValue] = useState({ value: "1", label: "Himank P" }); 
  const [isImageVisible, setIsImageVisible] = useState(true);  
  
  const handleChange = (event) => {  
    setSelectedValue(event);  
  };  

  const toggleImage = () => {  
    setIsImageVisible(!isImageVisible);  
  };  
  
  return (  
    <>
    <div className="flex p-5">  
      {isImageVisible && <ImageDisplay imageName={selectedValue.value} userName ={profileData[selectedValue.value]}/> }
      <SadhanaTable data={reports[selectedValue.value]}/>  
    </div>  
    

    <div className="flex justify-center mt-20">
    <Select   
        value={selectedValue}  
        onChange={handleChange}  
        options={options}  
        className="w-1/4" // adjust width as needed  
        isSearchable  
      /> 
    
    <button onClick={toggleImage} className="ml-2 p-2">  
        <FontAwesomeIcon icon={isImageVisible ? faUserSlash : faUser} /> 
      </button>
    
      {/* <button onClick={toggleComponent} className="ml-2 p-2 bg-green-500 text-white">  
        <FontAwesomeIcon icon={isComponentVisible ? faUserSlash : faUser} />  
      </button>  */}
    </div>

      
    </>
  );  
}  
  
export default App;  

