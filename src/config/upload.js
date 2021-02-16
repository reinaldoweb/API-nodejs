import multer from 'multer';
import path from 'path';
export default{
storage: multer.diskStorage({
  destination: path.resolve(__dirname, '..', '..','uploads'),
  filename:(req, file, cb)=>{
    const ext = path.extname(file.originalname);//Armazena a extenção da imagem na variavael ext
    const name = path.basename(file.originalname, ext); // Pega o nome original da imagem

    cb(null, `${name}-${Date.now()}${ext}`);

  },
})
};