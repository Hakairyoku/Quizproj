import React, { useState, useEffect } from 'react'; 
import request from '../services/axios'; 
import { Link } from 'react-router-dom'; 
import './TopicPage.css'; 
 
function TopicPage({ title }) { 
  const [topics, setTopics] = useState([]); 
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
    <div className="topicpage-container"> 
      <h1 style={{
        fontSize: '100px',
        color: 'white',
        padding: '15px 30px',
      //   backgroundColor: '#4caf50',
        borderRadius: '5px',
        textAlign: 'center',
        animation: 'color-change 5s infinite alternate',
      }}>Категория</h1> 
      <div className="topics-container"> 
        {topics.length > 1 && ( 
          <> 
            <div className="topic-item"> 
              <img src={topics[0].img} alt={topics[0].title} className="topic-image" /> 
              <button className="topic-button"> 
                <Link to={`/asks/1`} className="topic-link"> 
                  <h1>{topics[0].title}</h1> 
                </Link> 
              </button> 
            </div> 
            <div className="topic-item"> 
              <img src={topics[1].img} alt={topics[1].title} className="topic-image" /> 
              <button className="topic-button"> 
                <Link to={`/asks/9`} className="topic-link"> 
                  <h1>{topics[1].title}</h1> 
                </Link> 
              </button> 
            </div> 
          </> 
        )} 
      </div> 
    </div> 
  ); 
} 
 
export default TopicPage;
