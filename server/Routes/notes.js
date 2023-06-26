import express from "express"
import Authenticate from "../Middelwares/Authenticate.js"
import { CreateNote, Notes } from "../Controllers/Notes.js"

const router = express.Router()

router.get("/userNotes",Authenticate,Notes)
router.post("/createNote",Authenticate,CreateNote)


export default router