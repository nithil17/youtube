export const updateVideo = async (id, video) => {
  const response = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(video)
  });

  if (!response.ok) {
    throw new Error("Failed to update video");
  }

  return await response.json();
};