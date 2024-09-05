// utils/fetchData.js
export const fetchData = async (timeWindow) => {
    // Example of dummy API with a time query
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?time=${timeWindow}`);
    const data = await response.json();
    return data;
  };
  