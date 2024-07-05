import React, {useState, useEffect} from 'react';
import request from '../services/axios';
import { Link } from 'react-router-dom';

function TopicPage({ title }) {

    
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
      <div>
        <h1>Topics</h1>
        <div>
      
              { topics.length>1 &&  <>
            <div>
            <img src={topics[0].img}/>
            <button>
            <Link to={`/asks/1`}>
                <h1 >{topics[0].title}</h1>
            </Link>
            </button>
        </div>
        <div>
        <img src={topics[1].img}/>
        
        <button>
        <Link to={`/asks/9`}>
            <h1 >{topics[1].title}</h1>
        </Link>
        </button>
    </div>
    </>
        
              }
      
      </div>

        </div>
  );
}

export default TopicPage;


