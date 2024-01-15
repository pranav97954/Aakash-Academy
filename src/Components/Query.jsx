import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/query.css'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate,useLocation } from 'react-router-dom'
import { useCookies } from 'react-cookie'

const Query = () => {
  const [queries, setQueries] = useState([]);
  const [newQuery, setNewQuery] = useState('');
  const [replyText, setReplyText] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  
  const navigate = useNavigate();
  const [cookies,setCookie,removeCookie] = useCookies([]);

  const location = useLocation();
  const user = location.state && location.state.user;

  useEffect(() => {
    
    // Fetch past queries from the server
    
      const verifyUser = async () => {
        if(!cookies.jwt){
         navigate("/login");
        }else{
         const { data } = await axios.post(
           "https://aakashserver.onrender.com/query",{},
           { withCredentials:true}
         );
         if(!data.status){
           removeCookie("jwt");
           navigate("/login");
         }else{
          toast(`Hi ${data.user}`);
         }
        }
     };
     verifyUser();
     axios.get('https://aakashserver.onrender.com/get-queries')
      .then(response => {
        setQueries(response.data);
      });
      }, [cookies,navigate,removeCookie]); // Empty dependency array ensures this runs only once on component mount
    
  const logout = () =>{
    removeCookie("jwt");
    navigate("/");
  };
  
  const handleNewQueryChange = (event) => {
    setNewQuery(event.target.value);
  };
  
  const handleReplyTextChange = (event) => {
    setReplyText(event.target.value);
  };

  const handlePostQuery = () => {
    // Post new query to the server
    axios.post('https://aakashserver.onrender.com/post-query', { query: newQuery })
      .then(response => {
        // Update the local state with the new query
        setQueries([...queries, response.data]);
        setNewQuery(''); // Clear the input field
      });
      
  };

  const handlePostReply = (queryId) => {
    // Post reply to the server
    axios.post(`https://aakashserver.onrender.com/post-reply/${queryId}`, { reply: replyText })
      .then(response => {
        // Update the local state with the new reply
        const updatedQueries = queries.map(query => {
          if (query._id === queryId) {
            return { ...query, replies: [...(query.replies || []), response.data] };
          }
          return query;
        });
        setQueries(updatedQueries);
        setReplyText(''); // Clear the reply input field
        setReplyingTo(null); // Clear replyingTo state
      });
  };

  const startReply = (queryId) => {
    setReplyingTo(queryId);
  };

  return (
    <div className='query'>
      
      <h2>Past Queries</h2>
      <button onClick={logout}>Log out</button>
      <h1>Welcome to the Query Page -{user ? user.name : 'User'} !</h1>
      <ToastContainer/>
      <ul>
        {queries.map(query => (
          <li key={query._id}>
            {query.text}
            {query.replies && (
              <ul>
                {query.replies.map(reply => (
                  <li key={reply._id}>{reply.text}</li>
                ))}
              </ul>
            )}
            {replyingTo === query._id ? (
              <div className='postquery'>
                <textarea value={replyText} onChange={handleReplyTextChange} />
                <button onClick={() => handlePostReply(query._id)}>Post Reply</button>
              </div>
            ) : (
              <button onClick={() => startReply(query._id)} className='reply'>Reply</button>
            )}
          </li>
        ))}
      </ul>

     <div className="post">
       <h2>Post a New Query</h2>
       <div className='text'>
         <textarea value={newQuery} onChange={handleNewQueryChange} />
       </div>
       <div>
         <button className='reply' onClick={handlePostQuery}>Post Query</button>
       </div>
     </div>
    </div>
  );
};

export default Query;
