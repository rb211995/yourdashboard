import React, { useState, useEffect } from "react";
import { Typography, Table, Button } from "antd";

export default function Reviews() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    // Load existing feedback from local storage
    const storedFeedback = localStorage.getItem("feedback");
    if (storedFeedback) {
      setFeedbackList(JSON.parse(storedFeedback));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have submitted the form.");

    // Save new feedback to local storage
    const newFeedback = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    const updatedFeedbackList = [...feedbackList, newFeedback];
    // This line creates a new array called updatedFeedbackList.
      // It uses the spread operator (...) to clone all the elements from the existing feedbackList array 
      // and then adds the newFeedback object to the end of the array.
    localStorage.setItem("feedback", JSON.stringify(updatedFeedbackList));
    setFeedbackList(updatedFeedbackList);

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
       
      [name]: value,
    }));
  };

  const handleDelete = (record) => {
    const updatedFeedbackList = feedbackList.filter((item) => item !== record);
    localStorage.setItem("feedback", JSON.stringify(updatedFeedbackList));
    setFeedbackList(updatedFeedbackList);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Review",
      dataIndex: "message",
      key: "message",
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (_, record) => (
        <Button type="link" danger onClick={() => handleDelete(record)}>
          Delete
        </Button>
        // The render function takes two parameters: _ (which is ignored) and record (which represents a single feedback object). 
        // It returns a React component that contains a "Delete" button with an onClick event handler that calls the handleDelete function, passing the record object as an argument. 
        // This allows the user to delete a specific feedback by clicking the "Delete" button associated with that feedback row.
      ),
    },
  ];

  return (
    <div className="titles">
      <Typography.Title level={4}>Reviews</Typography.Title>

      <div className="wrapper">
        <div className="feedback-form">
          <h1>Feel free to give your feedback</h1>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label>
                <p>Name</p>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                <p>Email Address</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                />
              </label>
              <label>
                <p>Your Review</p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  cols="30"
                  placeholder="Type here..."
                />
              </label>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>

      <div className="feedback-list">
        <h1>Feedback List</h1>
        <Table columns={columns} dataSource={feedbackList} />
      </div>
    </div>
    </div>
  );
}

{/* import React, { useState, useEffect } from "react";
import { Typography, Table } from "antd";

export default function Reviews() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    // Load existing feedback from local storage
    const storedFeedback = localStorage.getItem("feedback");
    if (storedFeedback) {
      setFeedbackList(JSON.parse(storedFeedback));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("You have submitted the form.");

    // Save new feedback to local storage
    const newFeedback = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    const updatedFeedbackList = [...feedbackList, newFeedback];
    localStorage.setItem("feedback", JSON.stringify(updatedFeedbackList));
    setFeedbackList(updatedFeedbackList);

    // Reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Review",
      dataIndex: "message",
      key: "message",
    },
  ];
// const removeFormData = ()
  return (
    <div className="titles">
      <Typography.Title level={4}>Reviews</Typography.Title>

      <div className="wrapper">
        <div className="feedback-form">
          <h1>Feel free to give your feedback</h1>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <label>
                <p>Name</p>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </label>
              <label>
                <p>Email Address</p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                />
              </label>
              <label>
                <p>Your Review</p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  cols="30"
                  placeholder="Type here..."
                />
              </label>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="feedback-list">
          <h1>Feedback List</h1>
          <Table columns={columns} dataSource={feedbackList} />
          
          <div className="col">
            {(titles.length!==1)? 
            <button className="btn btn-outline-danger" onClick={removeFormData}>x</button>:''}
          </div>
        </div>
      </div>
    </div>
  );
} */}