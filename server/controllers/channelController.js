// Imports
import Video from "../models/Video.js";
import User from "../models/User.js";
import Channel from "../models/Channel.js";

// Create Channel

export const createChannel = async (req, res) => {

    try {

        const {
            channelName,
            description,
            channelBanner
        } = req.body;

        if (!channelName?.trim() || !description?.trim()) {
            return res.status(400).json({
                message: "Channel name and description are required"
            });
        }

        const existingChannel = await Channel.findOne({
            owner: req.user.id
        });

        if (existingChannel) {

            return res.status(400).json({
                message: "User already has a channel"
            });

        }

        const channel = await Channel.create({

            channelName: channelName.trim(),
            description: description.trim(),
            channelBanner: channelBanner?.trim() || "",
            owner: req.user.id

        });

        await User.findByIdAndUpdate(

            req.user.id,

            {
                $push: {
                    channels: channel._id
                }
            }

        );

        res.status(201).json(channel);

    }

    catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};

// Get All Channels
const getAllChannels=async(req,res)=>{
try{

const channels=await Channel.find().populate(
"owner",
"username email"
);

res.status(200).json(channels);

}catch(error){
res.status(500).json({
message:error.message
});
}
};

// Get Channel By Id
const getChannelById=async(req,res)=>{
try{

const channel=await Channel.findById(
req.params.id
).populate(
"owner",
"username email"
);

if(!channel){
return res.status(404).json({
message:"Channel not found"
});
}

res.status(200).json(channel);

}catch(error){
res.status(500).json({
message:error.message
});
}
};

// Update Channel
const updateChannel=async(req,res)=>{
try{

const channel=await Channel.findById(
req.params.id
);

if(!channel){
return res.status(404).json({
message:"Channel not found"
});
}

if(channel.owner.toString()!==req.user.id){
return res.status(403).json({
message:"Unauthorized"
});
}

channel.channelName=req.body.channelName?.trim()||channel.channelName;
channel.description=req.body.description?.trim()||channel.description;
channel.channelBanner=req.body.channelBanner?.trim()||channel.channelBanner;

await channel.save();

res.status(200).json(channel);

}catch(error){
res.status(500).json({
message:error.message
});
}
};

// Delete Channel
const deleteChannel=async(req,res)=>{
try{

const channel=await Channel.findById(
req.params.id
);

if(!channel){
return res.status(404).json({
message:"Channel not found"
});
}

if(channel.owner.toString()!==req.user.id){
return res.status(403).json({
message:"Unauthorized"
});
}

await Video.deleteMany({
channelId:req.params.id
});

await Channel.findByIdAndDelete(
req.params.id
);

res.status(200).json({
message:"Channel deleted successfully"
});

}catch(error){
res.status(500).json({
message:error.message
});
}
};

// Get Videos Of Channel
const getChannelVideos=async(req,res)=>{
try{

const videos=await Video.find({
channelId:req.params.id
}).sort({
createdAt:-1
});

res.status(200).json(videos);

}catch(error){
res.status(500).json({
message:error.message
});
}
};

// Exports
export{

getAllChannels,
getChannelById,
updateChannel,
deleteChannel,
getChannelVideos
};
