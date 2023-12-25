import express from 'express'
import { uploadFile, createFolder, getFileDirTree, getFiles } from '../controller/file'

const fileRoutes = express.Router()

fileRoutes.post('/createFolder', createFolder)
fileRoutes.post('/upload', uploadFile)
fileRoutes.get('/fileDirTree', getFileDirTree)
fileRoutes.get('/files', getFiles)

export default fileRoutes
