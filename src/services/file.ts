import multer from 'multer'
import { AppDataSource } from '../data-source'
import { File } from '../entity/File'
import { User } from '../entity/User'
import { Like } from 'typeorm'
import { FileDir } from '../entity/FileDir'
import { randomUUID } from 'crypto'
import { convertToTreeData } from '../utils'

export class FileService {
  private FileRepository = AppDataSource.getRepository(File)
  private FileDirRepository = AppDataSource.getRepository(FileDir)
  private userRepository = AppDataSource.getRepository(User)

  // 配置 Multer
  private storage = multer.memoryStorage()
  private upload = multer({ storage: this.storage })

  // 处理文件上传
  uploadFile = this.upload.single('file')

  async saveFile(newFile, userId, parentFolderId?): Promise<void> {
    const user = await this.userRepository.findOne({ where: { user_id: userId } })
    console.log(user)

    const file = new File()
    file.id = randomUUID()
    file.userId = user.user_id
    file.name = newFile.originalname
    file.mimeType = newFile.mimetype
    file.size = newFile.size
    const userFolder = `../uploads/${user.username}/`
    const date = new Date().toLocaleString().replace(/[\s:/]/g, '-')
    file.path = `${userFolder}${file.id}` // 请确保在项目中有一个 "uploads" 文件夹用于保存上传的文件
    file.dirId = parentFolderId
    await this.FileRepository.save(file)

    const fs = require('fs')
    if (!fs.existsSync(userFolder)) {
      fs.mkdirSync(userFolder, { recursive: true })
    }
    fs.writeFileSync(file.path, newFile.buffer)
  }

  async getFileDirTree(userId): Promise<FileDir[]> {
    const user = await this.userRepository.findOne({ where: { user_id: userId } })
    // console.log(user)

    if (!user) {
      throw new Error('User not found')
    }
    const dirs = await this.FileDirRepository.find({ where: { userId } })
    return convertToTreeData(dirs)
    // return await
  }

  async createFolder({ userId, folderName, parentFolderId }) {
    const parentFolder = await this.FileDirRepository.findOne({ where: { id: parentFolderId } })
    const fileDir = new FileDir()
    fileDir.id = randomUUID()
    fileDir.name = folderName
    fileDir.userId = userId
    fileDir.parentId = parentFolderId
    fileDir.parentIds = (parentFolder.parentIds || '根目录') + '/' + folderName
    await this.FileDirRepository.save(fileDir)
  }

  async getFiles({ userId, dirId, page, pageSize }) {
    const files = await this.FileRepository.find({
      where: {
        dirId,
        userId,
      },
      // order: {
      //   id: 'DESC',
      // },
      skip: (page - 1) * pageSize,
      take: pageSize,
    })
    return files
  }
}
