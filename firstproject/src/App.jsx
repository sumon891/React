import React, { useState } from "react";
import Card from "./Components/Card";

function App() {
  const data = [
    { name: "john", profession: "Painter", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false },
    { name: "Amit", profession: "Artist", image: "https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false },
    { name: "Rahul", profession: "Thalua", image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1921&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false },
    { name: "Sumit", profession: "Coder", image: "https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", friends: false },
  ];
 
  const [realdata, setRealData] = useState(data);

  const handleFriendsButton = (index) => {
    setRealData((previous) => {
      return previous.map((item, idx) => {
        if (idx === index) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };
  
  return (
    <div>
      <div className="w-full h-full bg-zinc-300 h-screen flex gap-4 items-center justify-center">
        {realdata.map((item, index) => (
          <Card key={index} handleClick={() => handleFriendsButton(index)} values={item} />
        ))}
      </div>
    </div> 
  );
}

export default App;
