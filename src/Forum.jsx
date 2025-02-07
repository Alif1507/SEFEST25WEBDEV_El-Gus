import { useEffect, useState } from "react";
import Fcard from "./components/Fcard.jsx";
import Navbar from "./Navbar.jsx";
import axios from "axios";

function Forum() {
  const [post, setPost] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    getAllData();
  }, []);

  async function getAllData() {
    const response = await axios.get(API_URL);
    setPost(response.data);
  }

  //tambah data

  async function addPost(e) {
    e.preventDefault;
    if (!title || !body) {
      return;
    }

    const response = await axios.post(API_URL, { title, body });
    setTitle('')
    setBody('')
    getAllData()
  
  
  }

  return (
    <>
      <nav className="fixed top-0 z-50">
        <Navbar />
      </nav>
      <div className="mt-40">
        <form className="input-box" type="submit" onSubmit={addPost}>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Body"
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <main className="mt-40 flex flex-col justify-center items-center">
        <div className="grid grid-cols-3 gap-y-20 gap-x-40">
          {post.map((p) => (
            <Fcard head={p.title} subhead={p.body} limit={20} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Forum;
