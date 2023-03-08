import React, { useState, useEffect } from "react";
import "../Styles/Feed.css";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "../firebase";
import {
  onSnapshot,
  collection,
  query,
  serverTimestamp,
  addDoc,
  orderBy,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice.js";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  // getPosts
  const postRef = collection(db, "posts");
  const q = query(postRef, orderBy("timestamp", "desc"));

  useEffect(() => {
    const getPost = onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    }); 
    return () => {
      getPost();
    };
  }, [q]);

  // Add Post
  const addPost = (e) => {
    e.preventDefault();
    // alert(input)

    // Add Data to Firebase
    addDoc(postRef, {
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoURL || "",
      timestamp: serverTimestamp(),
      // likes: 0,
      // comments: 0,
      // shares: 0,
      // sent: 0,
      // received: 0,
    });
    // .then(() => {
    //   setInput("");
    //   console.log();
    // })
    // .catch((error) => {
    //   console.log(error);
    // });
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form action="Post" onSubmit={addPost}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              name=""
              id=""
              placeholder="Start a Post"
            />
            <button type="submit" onClick={addPost}>
              Post
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Article"
            color="#7fc15e"
          />
        </div>
      </div>
      {/* Posts */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
      <Post
        name="Akhmim Abdelilah"
        description="This is my bio"
        message="Code & you will be Good"
        photoUrl=""
      />
    </div>
  );
}

export default Feed;
