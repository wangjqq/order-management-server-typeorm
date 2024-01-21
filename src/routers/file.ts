import express from 'express'
import { uploadFile, createFolder, getFileDirTree, getFiles, delFolder, download, deleteFile } from '../controller/file'

const fileRoutes = express.Router()

fileRoutes.post('/createFolder', createFolder)
fileRoutes.post('/delFolder', delFolder)
fileRoutes.post('/upload', uploadFile)
fileRoutes.post('/deleteFile', deleteFile)
fileRoutes.get('/fileDirTree', getFileDirTree)
fileRoutes.get('/filesList', getFiles)

fileRoutes.get('/download', download)

export default fileRoutes
