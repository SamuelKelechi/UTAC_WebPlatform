
import React, { useState } from 'react';
import "./style.css";
import { Button, Input } from "antd";
import {
  UserOutlined,
  PhoneOutlined,
  InboxOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import CallOutlinedIcon from '@material-ui/icons/CallOutlined';

import { useHistory, Link } from "react-router-dom";




import { app } from "../Base"
import TextArea from 'antd/lib/input/TextArea';

const db = app.firestore();


function AdminPage() {
  const hist = useHistory();
  
  const [fileUrl, setFileUrl] = useState(null);
  const [title, setTitle] = useState("")
  const [story, setStory] = useState("")
  const [content, setContent] = useState("")

  // const [uploads, setUploads] = useState([])

  const ImageUpload = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    console.log(File);

    await fileRef.put(File);
    setFileUrl(await fileRef.getDownloadURL());
  };


  const PostBlog = async () => {
    await db.collection("utac")
      .doc()
      .set({
        title: title,
        story: story,
        content: content,
        date: Date.now(),
        avatar: await fileUrl
      });
  };



  return (
    <div style={{
      height: "90%",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      // backgroundColor: "blue",
      flexDirection: "column"
    }}>
      <center>
        <div className="card_holder">
          <div
            className="card_body"
            style={{
              marginTop: "-200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "90%"
            }}
          >
            <h4
              className="card_name"
              style={{ marginTop: "200px", backgroundColor: "red", height: 0, marginBottom: "30px" }}
            >
              Fill In to Update Your Blog
          </h4>


            <div>Upload An Image</div>
            <input
              onChange={ImageUpload}
              className="input_file"
              type="file"
              style={{ marginTop: "10px" }}
            />
            <Input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              style={{ marginTop: "10px", zIndex: '9' }}
              size="large"
              placeholder="Title"
              name=" name"
            />

            <TextArea
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              style={{ fontSize: "15px", zIndex: '-999px', marginTop: "10px", height: "60px" }}
              placeholder="Input Short Blog Story"
            />

            <TextArea
              value={story}
              onChange={(e) => {
                setStory(e.target.value);
              }}
              style={{ fontSize: "15px", zIndex: '-999px', marginTop: "10px", height: "100px" }}
              placeholder="Input your full blog story"
            />

            <strong style={{ width: '280px', textAlign: 'center', fontSize: 'small', marginTop: '10px' }}>Please Wait For 5 seconds While Your Information Is Being Processed Before You Click on Upload Blog😏 </strong>

            <Button
              onClick={() => {
                PostBlog();
                hist.push("/utacadmin2021")
              }}
              style={{
                marginTop: "30px",
                width: "100px",
                backgroundColor: "#8D156A",
                color: "white",
              }}
            >
              Upload Blog
          </Button>


          </div>
        </div>
      </center>
    </div>
  )
}

export default AdminPage
