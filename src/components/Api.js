import React, { useEffect, useState } from 'react';

function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white p-4 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4">JSONPlaceholder Data</h1>
        <div className="space-y-4">
          {data.map(item => (
            <div key={item.id} className="p-4 bg-gray-200 rounded-md">
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Api;
