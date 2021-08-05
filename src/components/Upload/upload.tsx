import React, { ChangeEvent, useRef, useState } from "react";
import classNames from "classnames";
import axios from 'axios';
import Button from "../Button";
import { map, filter, mergeLeft } from 'ramda';
import { UploadList } from "./uploadList";

export type UploadFileStatus = 'ready' | 'uploading' | 'success' | 'error'
export interface UploadProps {
  action: string;
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onProgress?: (percentage: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (err: any, file: File) => void;
  onChange?: (file: File) => void;
  onRemove?: (file: UploadFile) => void;
}

export interface UploadFile {
  uid: string;
  size: number;
  name: string;
  status?: UploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

const Upload: React.FC<UploadProps> = (props) => {
  const { action, beforeUpload, onProgress, onError, onSuccess, onChange, onRemove } = props
  const [fileList, setFileList] = useState<UploadFile[]>([])

  const fileInput = useRef<HTMLInputElement>(null)

  const updataFileList = (updataFile: UploadFile, updataObj: Partial<UploadFile>) => {
    setFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updataFile.uid) return { ...file, ...updataObj }
        else return file
      })
    })
  }

  const handleClick = () => {
    if (fileInput.current) {
      fileInput.current.click()
    }
  }

  // 按钮触发上传图片
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    uploadFiles(files)
    if (fileInput.current) {
      fileInput.current.value = ''
    }
  }

  // 按钮上传图片
  const uploadFiles = (files: FileList) => {
    const postFiles = Array.from(files)
    postFiles.forEach(file => {
      if (!beforeUpload) post(file)
      else {
        const result = beforeUpload(file)
        if (result && result instanceof Promise) {
          result.then(processedFile => post(processedFile))
        } else if (!!result) post(file)
      }
    })
  }

  //上传图片
  const post = (file: File) => {

    const _file: UploadFile = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    }
    setFileList([_file, ...fileList])

    const formData = new FormData()
    formData.append(file.name, file)
    axios.post(action, formData, {
      headers: { 'Content-type': 'multipart/form-data' },
      onUploadProgress: (e) => {
        const percentage = Math.round((e.loaded * 100) / e.total) || 0;
        if (percentage < 100) {
          updataFileList(_file, { percent: percentage, status: 'uploading' })
          onProgress && onProgress(percentage, file)
        }
      }
    })
      .then((res) => {
        updataFileList(_file, { percent: 100, status: 'success', response: res.data })
        onSuccess && onSuccess(res, file)
        onChange && onChange(file)
      })
      .catch((err) => {
        updataFileList(_file, { percent: 100, status: 'error', response: err })
        onError && onError(err, file)
        onChange && onChange(file)
      })
  }

  // 删除图片
  const handleRemove = (file: UploadFile) => {
    setFileList((prevList) => {
      return filter((item: UploadFile) => item.uid !== file.uid)(prevList)
    })
    onRemove && onRemove(file)
  }

  return (
    <div className='xd-upload-component' >
      <Button btnType='primary' onClick={handleClick}>Upload File</Button>
      <input style={{ display: 'none' }} ref={fileInput} type='file' className='xd-file-input' onChange={handleFileChange} />
      <UploadList fileList={fileList} onRemove={handleRemove} />
    </div>
  )
}
export default Upload