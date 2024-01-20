import express from 'express'
import { uploadFile, createFolder, getFileDirTree, getFiles, delFolder } from '../controller/file'

const fileRoutes = express.Router()

fileRoutes.post('/createFolder', createFolder)
fileRoutes.post('/delFolder', delFolder)
fileRoutes.post('/upload', uploadFile)
fileRoutes.get('/fileDirTree', getFileDirTree)
fileRoutes.get('/filesList', getFiles)

export default fileRoutes
