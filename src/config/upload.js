import multer from 'multer';//biblioteca para importação de imagem
import path from 'path';
export default{
storage: multer.diskStorage({
  destination: path.resolve(__dirname, '..', '..','uploads'),//SAber a rai do projeto
  filename:(req, file, cb)=>{
    const ext = path.extname(file.originalname);//Armazena a extenção da imagem na variavael ext
    const name = path.basename(file.originalname, ext); // Pega o nome original da imagem

    cb(null, `${name}-${Date.now()}${ext}`)

  },
})
};