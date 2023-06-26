import Note from '../Models/Note.js'


// ........................... All Notes Get Method ...............................

export const Notes = async (req, res) => {
    const userID=req.user.id
    console.log(userID)
    try {
        const notes = await Note.findById({_id:userID})
        res.status(200).json(notes)
    } catch (err) {
        console.log(err)
    }
}


// .................................. Note Create method ..... .........................

export const CreateNote = async(req,res)=>{
    const userID=req.user.id
    const {title,note,category} = req.body
    try{    
        const new_note = new Note({
            title,
            note,
            category,
            userID
        })
        await new_note.save()
        res.status(200).send({'msg':"New Note Created Successfully"})
    }   
    catch(err){
        console.log(err)
        res.status(400).send({"err":"Something went wrong"})
    }
}


// ...................................... Delete Note Method ......... ............................

export const deleteNote=async(req,res)=>{
    const userID=req.user.id
    const noteID = req.params.noteID
    const note = await Note.findOne({_id:noteID})
    if(userID !== note.userID){
        res.status(400).send({"msg":"User is not Authorized"})
    }else{
        await NoteModel.findByIdAndDelete({_id:noteID})
        res.status(200).send({"msg":"Note Deleted successfully"})
    }
}

export const updateNote=async(req,res)=>{
    const noteID  = req.params.noteID
    const userID = req.user.id
    const notes = await NoteModel.findOne({_id:noteID})
    if(userID !==notes.userID){
        res.status(400).send({"msg":"User is not Authorized"})
    }
    try{
         await NoteModel.findByIdAndUpdate({_id:noteID},req.body)
         res.status(200).send({"msg":"Note Updated successfully"})
    }
    catch(err){
        console.log(err)
        res.status(400).send({"err":"Something went wrong"})
    }
}