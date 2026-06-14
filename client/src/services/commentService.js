const API = "http://localhost:5000/api/comments";

// GET COMMENTS

export const getComments = async (videoId) => {

    const response = await fetch(

        `${API}/video/${videoId}`

    );

    if (!response.ok) {

        throw new Error(

            "Failed to fetch comments"

        );

    }

    return await response.json();

};

// ADD COMMENT

export const addComment = async (comment) => {

    const response = await fetch(

        API,

        {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(comment)

        }

    );

    if (!response.ok) {

        throw new Error(

            "Failed to add comment"

        );

    }

    return await response.json();

};

// UPDATE COMMENT

export const updateComment = async (

    id,

    comment

) => {

    const response = await fetch(

        `${API}/${id}`,

        {

            method: "PUT",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify(comment)

        }

    );

    if (!response.ok) {

        throw new Error(

            "Failed to update comment"

        );

    }

    return await response.json();

};

// DELETE COMMENT

export const deleteComment = async (id) => {

    const response = await fetch(

        `${API}/${id}`,

        {

            method: "DELETE"

        }

    );

    if (!response.ok) {

        throw new Error(

            "Failed to delete comment"

        );

    }

    return await response.json();

};