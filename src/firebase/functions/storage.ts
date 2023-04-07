import { getDownloadURL, ref, uploadBytesResumable, listAll, deleteObject } from "firebase/storage";
import { storage } from "../index";

interface UploadFileProps {
  title: string;
  file: File;
  progressPercentage?: (totalBytes: number, bytesTransferred: number) => void;
  load?: (downloadURL: string) => void;
  errorInfo?: (error: Error) => void;
  path?: string;
}

export async function uploadFile({title, file, path="logs"}: UploadFileProps) {
  if (!file) return;
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `${path}/${file.name}`);  
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // progressPercentage !== null && progressPercentage(snapshot.totalBytes, snapshot.bytesTransferred);
            console.log('Upload is ' + progress + '% done');
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('File available at', downloadURL);
            resolve(downloadURL);
          });
        }
      );
    });
}

export async function getFile(ID : string, path="logs") {
  try {
    const storageRef = ref(storage, `${path}/${ID}`);
    const url = await getDownloadURL(storageRef);
    // getDownloadURL(ref(storage, 'logs/log.txt'))
    return url;
  }
  catch (error) {
    console.log(error);
  }
}

export async function listFiles(path="logs") {
  try {
    const listRef = ref(storage, path);
    const { items } = await listAll(listRef);
    // for all items return name
    const itemsName = items.map((item) => item.name);
    return itemsName;
  }
  catch (error) {
    console.log(error);
  }
}

export async function deleteFile(ID : string, path="logs") {
  try {
    const storageRef = ref(storage, `${path}/${ID}`);
    await deleteObject(storageRef);
    return true;
  }
  catch (error) {
    console.log(error);
    return false;
  }
}