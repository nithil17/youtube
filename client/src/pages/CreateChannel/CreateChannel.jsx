import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createChannel } from "../../services/channelService";
import "./CreateChannel.css";

function CreateChannel(){

  const navigate=useNavigate();

  const [formData,setFormData]=useState({
    channelName:"",
    description:"",
    channelBanner:""
  });

  // Update form values
  const handleChange=(event)=>{

    setFormData({
      ...formData,
      [event.target.name]:event.target.value
    });

  };

  // Create channel
  const handleSubmit=async(event)=>{

    event.preventDefault();

    try{

      await createChannel(formData);

      alert("Channel Created Successfully");

      navigate("/");

    }catch(error){

      alert(error.message);

    }

  };

  return(

    <div className="create-channel-container">

      <h2>Create Channel</h2>

      <form
        className="create-channel-form"
        onSubmit={handleSubmit}
      >

        <input
          name="channelName"
          placeholder="Channel Name"
          value={formData.channelName}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />

        <input
          name="channelBanner"
          placeholder="Banner URL"
          value={formData.channelBanner}
          onChange={handleChange}
        />

        <button type="submit">
          Create Channel
        </button>

      </form>

    </div>

  );

}

export default CreateChannel;