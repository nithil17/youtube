import { useState } from "react";
import { addVideo } from "../../services/videoServices";




function AddVideo(params) {

    const [formData, setFormData] = useState({

        title: "",

        thumbnail: "",

        channel: "",

        views: "",

        category: ""
    })

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await addVideo(formData);

            alert("Video Added Successfully");

            setFormData({

                title: "",

                thumbnail: "",

                channel: "",

                views: "",

                category: ""

            });

        } catch (error) {
            alert(error.message);
        }
    }

    return(
        <div className="addvideo-container">
            <h2>
            Add New Video
            </h2>
            <form onSubmit={handleSubmit}>
                    <input
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                />

                <input
                    name="thumbnail"
                    placeholder="Thumbnail URL"
                    value={formData.thumbnail}
                    onChange={handleChange}
                />

                <input
                    name="channel"
                    placeholder="Channel"
                    value={formData.channel}
                    onChange={handleChange}
                />

                <input
                    name="views"
                    placeholder="Views"
                    value={formData.views}
                    onChange={handleChange}
                />

                <input
                    name="category"
                    placeholder="Category"
                    value={formData.category}
                    onChange={handleChange}
                />

                <button type="submit">

                    Add Video

                </button>
            </form>

        </div>
    )

}

export default AddVideo;

