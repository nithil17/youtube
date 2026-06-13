import React from "react";

import "./AdminTable.css";

const AdminTable = ({

    videos,

    onDelete

}) => {

    return (

        <table className="admin-table">

            <thead>

                <tr>

                    <th>Thumbnail</th>

                    <th>Title</th>

                    <th>Channel</th>

                    <th>Category</th>

                    <th>Views</th>

                    <th>Actions</th>

                </tr>

            </thead>

            <tbody>

                {

                    videos.map((video) => {

                        return (

                            <tr key={video._id}>

                                <td>

                                    <img

                                        src={video.thumbnail}

                                        alt={video.title}

                                        className="table-thumbnail"

                                    />

                                </td>

                                <td>

                                    {video.title}

                                </td>

                                <td>

                                    {video.channel}

                                </td>

                                <td>

                                    {video.category}

                                </td>

                                <td>

                                    {video.views}

                                </td>

                                <td>

                                    <button

                                        className="edit-btn"

                                    >

                                        Edit

                                    </button>

                                    <button

                                        className="delete-btn"

                                        onClick={() => {

                                            onDelete(video._id);

                                        }}

                                    >

                                        Delete

                                    </button>

                                </td>

                            </tr>

                        );

                    })

                }

            </tbody>

        </table>

    );

};

export default AdminTable;