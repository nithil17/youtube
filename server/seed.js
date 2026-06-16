
// Seed database from JSON files

import dotenv from "dotenv";
import mongoose from "mongoose";

import User from "./models/User.js";
import Channel from "./models/Channel.js";
import Video from "./models/Video.js";
import Comment from "./models/Comment.js";

import users from "./data/users.json" with { type: "json" };
import channels from "./data/channels.json" with { type: "json" };
import videos from "./data/videos.json" with { type: "json" };
import comments from "./data/comments.json" with { type: "json" };

dotenv.config();

// Connect Database

await mongoose.connect(
  process.env.MONGO_URI || process.env.MONGO_URL
);

// Clear Existing Data

await Comment.deleteMany({});
await Video.deleteMany({});
await Channel.deleteMany({});
await User.deleteMany({});

// Insert Users

const insertedUsers = await User.insertMany(users);

const john = insertedUsers.find(
  (user) => user.username === "john"
);

const admin = insertedUsers.find(
  (user) => user.username === "admin"
);

// Insert Channels

const channelData = channels.map((channel) => {

  if (channel.channelName === "Code with John") {

    return {
      ...channel,
      owner: john._id
    };

  }

  return {
    ...channel,
    owner: admin._id
  };

});

const insertedChannels = await Channel.insertMany(channelData);

// Update User Channels

for (const channel of insertedChannels) {

  await User.findByIdAndUpdate(
    channel.owner,
    {
      $addToSet: {
        channels: channel._id
      }
    }
  );

}

const reactChannel = insertedChannels.find(
  (channel) => channel.channelName === "Code with John"
);

const nodeChannel = insertedChannels.find(
  (channel) => channel.channelName === "Backend Master"
);

// Insert Videos

const videoData = videos.map((video) => {

  if (video.channel === "Code with John") {

    return {
      ...video,
      channelId: reactChannel._id,
      owner: reactChannel.owner
    };

  }

  return {
    ...video,
    channelId: nodeChannel._id,
    owner: nodeChannel.owner
  };

});

const insertedVideos = await Video.insertMany(videoData);

const reactVideo = insertedVideos.find(
  (video) => video.channel === "Code with John"
);

// Update Channel Videos

if (reactChannel && reactVideo) {

  await Channel.findByIdAndUpdate(
    reactChannel._id,
    {
      $addToSet: {
        videos: reactVideo._id
      }
    }
  );

}

// Insert Comments

const commentData = comments.map((comment) => {

  const user =
    comment.user === "john"
      ? john
      : admin;

  return {
    ...comment,
    userId: user._id,
    videoId: reactVideo._id
  };

});

await Comment.insertMany(commentData);

console.log("✅ Database Seeded Successfully");

await mongoose.connection.close();

process.exit(0);

