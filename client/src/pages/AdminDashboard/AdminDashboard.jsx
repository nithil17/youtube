import { useState } from "react";
import { deleteVideo, getVideos } from "../../services/videoServices";

import { Link } from "react-router-dom";

const AdminDashboard = () => {

    const [videos, setVideos] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        const fetchVideos = async () => {

            try {
                const data = await getVideos();

                setVideos(data);

            } catch (error) {

                setError(error);

            } finally {

                setLoading(false);
            }

            return fetchVideos;
        }
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteVideo(id);

            setVideos(
                videos.filter((video) => video._id !== id)
            );
        } catch (error) {
            alert(error.message);

        }
    }

    if (loading) {

        return <h2>Loading...</h2>;

    }

    if (error) {

        return <h2>{error}</h2>;

    }

    return (

        <div className="admin-dashboard">

            <h1>Admin Dashboard</h1>

            <Link to={`/edit-video/${video._id}`}>
                <button>Edit</button>
            </Link>

            <AdminTable

                videos={videos}

                onDelete={handleDelete}

            />

        </div>

    );
}

export default AdminDashboard;


