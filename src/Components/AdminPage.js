
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
      width: "90%",
      display: "flex",
      justifyContent: "center",
      // backgroundColor: "blue",
      flexDirection: "column"
    }}>
      This is Me
      <center>
        <div className="card_holder">
          <div
            className="card_body"
            style={{
              marginTop: "-200px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h4
              className="card_name"
              style={{ marginTop: "200px", backgroundColor: "red", height: 0, marginBottom: "30px" }}
            >
              Please Fill In Your Details
          </h4>

            <Input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              // style={{ backgroundColor: "red", zIndex: "" }}
              style={{ marginTop: "10px", zIndex: '9' }}
              size="large"
              placeholder="Title"
              name=" name"
              prefix={<UserOutlined />}
            />

            <Input
              value={story}
              onChange={(e) => {
                setStory(e.target.value);
              }}
              style={{ backgroundColor: "red", fontSize: "5px", zIndex: '-999px' }}
              // style={{ marginTop: "15px" }}
              size="large"
              placeholder="Story"
              prefix={<InboxOutlined />}
            />
            <Input
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              style={{ backgroundColor: "red", fontSize: "5px", zIndex: '-999px' }}
              // style={{ marginTop: "15px" }}
              size="large"
              placeholder="Gender"
              prefix={<UserSwitchOutlined />}
            />

            {/* <Input
            value={num}
            onChange={(e) => {
              setNum(e.target.value);
            }}
            style={{ backgroundColor: "red", zIndex: '-999px' }}
            style={{ marginTop: "15px" }}
            size="large"
            placeholder="+234 565 75646"
            prefix={<CallOutlinedIcon />}
          /> */}
            <div>Upload An Image</div>
            <input
              onChange={ImageUpload}
              className="input_file"
              type="file"
              style={{ marginTop: "50px" }}
            />

            <strong style={{ width: '280px', textAlign: 'center', fontSize: 'small', marginTop: '10px' }}>Please Wait For 5 seconds While Your Information Is Been Processed Before You Click Summit😏 </strong>

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
