import React from'react';


function Topics({ topics,setTopics }) {


  return (
      <div>
        <h1>Категории</h1>
        <div>
            {topics&&topics.map((topic)=>(
                < topic={topic} key={topic.id} setTopics={setTopics} />
            ))}
        </div>
        </div>
  );
}

export default Topics;