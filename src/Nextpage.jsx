import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Nextpage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state: { data: { food } } } = location;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/nextpage?food=' + encodeURIComponent(food), {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await response.json();
        console.log('Data from /nextpage endpoint:', data);
        // Do something with the data, e.g., update state or render it in the component
      } catch (error) {
        console.log('Error fetching data from /nextpage endpoint:', error);
      }
    };

    fetchData();
  }, []); // Ensure the effect runs only once when the component mounts

  return (
    <div>
      {/* Render your component content here using the fetched data */}
    </div>
  );
};

export default Nextpage;


