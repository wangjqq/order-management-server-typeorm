import { Request, Response } from 'express'
import { FileService } from '../services/file'

const fileService = new FileService()

export const uploadFile = (req: any, res: Response) => {
  fileService.uploadFile(req, res, async (err) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ message: 'File upload failed' })
    }

    const file = req.file
    if (!file) {
      return res.status(400).json({ message: 'No file provided' })
    }

    try {
      await fileService.saveFile(file, req.body.userId, req.body.fileName, req.body.dirId)
      res.status(201).json({ message: 'File uploaded successfully' })
    } catch (error) {
      console.error(error)
      res.status(500).json({ message: 'Internal Server Error' })
    }
  })
}

export const getFileDirTree = async (req: any, res: Response) => {
  try {
    const fileTree = await fileService.getFileDirTree(req.query.userId)
    res.status(200).json({ message: 'File tree retrieved successfully', data: fileTree })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}

export const createFolder = async (req: any, res: Response) => {
  try {
    const fileTree = await fileService.createFolder(req.body)
    res.status(200).json({ message: 'File tree retrieved successfully', data: fileTree })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
export const delFolder = async (req: any, res: Response) => {
  try {
    const fileTree = await fileService.delFolder(req.body)
    res.status(200).json({ message: 'File tree retrieved successfully', data: fileTree })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
export const getFiles = async (req: any, res: Response) => {
  try {
    const files = await fileService.getFiles(req.query)
    res.status(200).json({ message: 'File tree retrieved successfully', data: files })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
export const download = async (req: any, res: Response) => {
  try {
    const fileStream = await fileService.download(req.query)
    res.setHeader('Content-Disposition', `attachment; filename=${encodeURIComponent(req.query.filename)}`)
    res.setHeader('Content-Type', 'application/octet-stream')
    fileStream.pipe(res)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
export const deleteFile = async (req: any, res: Response) => {
  try {
    await fileService.deleteFile(req.body, res)
    res.status(200).json({ message: 'File tree retrieved successfully' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Internal Server Error' })
  }
}
