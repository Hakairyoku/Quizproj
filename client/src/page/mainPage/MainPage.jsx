import React, {useState, useEffect} from 'react';
import request from '../services/axios';
import { Link } from 'react-router-dom';

function MainPage() {
    const [topics, setTopics] = useState([])
    const axiosTopics = async () => {
      const { data } = await request.get('/topics');
      console.log(data);
      if (data.message === 'success') {
        setTopics(data.topics);
      }
    };
      useEffect(() => {
        axiosTopics();
      }, []);
    return (
        <>
       
        <div>
        <h2>Quiz</h2>
      <div>
      
              { topics.length>1 &&  <>
            <div>
            <img src={topics[0].img}/>
            
            <Link to={`/asks/1`}>
                <h1 >{topics[0].title}</h1>
            </Link>
        </div>
        <div>
        <img src={topics[1].img}/>
        
        <Link to={`/asks/8`}>
            <h1 >{topics[1].title}</h1>
        </Link>
    </div>
    </>
        
              }
      
      </div>
        </div>
      </>
    );
  }
 
export default MainPage;