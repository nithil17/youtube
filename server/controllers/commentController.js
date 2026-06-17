// Models
import Comment from "../models/Comment.js";
import User from "../models/User.js";
import Video from "../models/Video.js";

// Get comments of a video
const getCommentsByVideo=async(req,res)=>{
try{
const comments=await Comment.find({
videoId:req.params.videoId
}).sort({createdAt:-1});
res.status(200).json(comments);
}catch(error){
res.status(500).json({message:error.message});
}
};

// Add comment using logged-in user
const addComment=async(req,res)=>{
try{

if(!req.body.videoId || !req.body.text?.trim()){
return res.status(400).json({
message:"Video and comment text are required"
});
}

const video=await Video.findById(req.body.videoId);

if(!video){
return res.status(404).json({
message:"Video not found"
});
}

const user=await User.findById(req.user.id);

if(!user){
return res.status(404).json({
message:"User not found"
});
}

const comment=await Comment.create({
videoId:req.body.videoId,
userId:user._id,
user:user.username,
text:req.body.text.trim()
});

await Video.findByIdAndUpdate(
req.body.videoId,
{
$addToSet:{
comments:comment._id
}
}
);

res.status(201).json(comment);

}catch(error){
res.status(500).json({
message:error.message
});
}
};

// Update own comment
const updateComment=async(req,res)=>{
try{

const comment=await Comment.findById(req.params.id);

if(!comment){
return res.status(404).json({
message:"Comment not found"
});
}

if(comment.userId.toString()!==req.user.id){
return res.status(403).json({
message:"Unauthorized"
});
}

if(!req.body.text?.trim()){
return res.status(400).json({
message:"Comment text is required"
});
}

comment.text=req.body.text.trim();

await comment.save();

res.status(200).json(comment);

}catch(error){
res.status(500).json({
message:error.message
});
}
};

// Delete own comment
const deleteComment=async(req,res)=>{
try{

const comment=await Comment.findById(req.params.id);

if(!comment){
return res.status(404).json({
message:"Comment not found"
});
}

if(comment.userId.toString()!==req.user.id){
return res.status(403).json({
message:"Unauthorized"
});
}

await Comment.findByIdAndDelete(req.params.id);

await Video.findByIdAndUpdate(
comment.videoId,
{
$pull:{
comments:comment._id
}
}
);

res.status(200).json({
message:"Comment deleted"
});

}catch(error){
res.status(500).json({
message:error.message
});
}
};

export{
getCommentsByVideo,
addComment,
updateComment,
deleteComment
};
