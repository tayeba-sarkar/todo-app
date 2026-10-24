// Daily task with add/delete, June calendar logic
import { useState } from "react";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([
    { title: "Create Visual Style Guide", time: "12:00", tag: "Research" },
    { title: "Create Wireframe", time: "1:00", tag: "Design" },
    { title: "Need to Review Components", time: "1:30", tag: "Review" }
  ]);
  
  const [newTitle, setNewTitle] = useState('');
  const [filter, setFilter] = useState('All');

  const addTask = () => {
    if(!newTitle.trim()) return;
    setTasks([...tasks, { title: newTitle, time: "Now", tag: "New" }]);
    setNewTitle('');
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const filteredTasks = filter === 'All' ? tasks : tasks.filter(t => t.tag === filter);

  return (
    <div style={{ padding: '24px', background: '#f8f9fa', minHeight: '100vh' }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>TaskElite - June Calendar</h1>
      
      <div style={{ background: 'white', padding: '20px', borderRadius: '16px', marginTop: '20px' }}>
        <h3>Daily Tasks - June 5</h3>
        <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
          <input value={newTitle} onChange={e=>setNewTitle(e.target.value)} placeholder="Add new task..." style={{ flex: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }} />
          <button onClick={addTask} style={{ padding: '10px 20px', background: 'black', color: 'white', borderRadius: '8px' }}>+ Add</button>
        </div>

        <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
          {['All', 'Research', 'Design'].map(f => (
            <button key={f} onClick={()=>setFilter(f)} style={{ padding: '6px 12px', background: filter===f?'#2563eb':'#eee', color: filter===f?'white':'black', borderRadius: '20px' }}>{f}</button>
          ))}
        </div>

        <div style={{ marginTop: '20px' }}>
          {filteredTasks.map((t, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px', background: '#f5f5f5', borderRadius: '8px', marginBottom: '8px' }}>
              <div>
                <b>{t.title}</b> <small style={{ background: '#e0e7ff', padding: '2px 6px', borderRadius: '4px', marginLeft: '8px' }}>{t.tag}</small>
                <div style={{ color: '#888', fontSize: '12px' }}>{t.time}</div>
              </div>
              <button onClick={()=>deleteTask(i)} style={{ color: 'red' }}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}