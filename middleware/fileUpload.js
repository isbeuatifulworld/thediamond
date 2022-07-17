const multer = require('multer');

module.exports = fileStorageEngine = multer.diskStorage({
    destination:(req, file, ch) => {
        cb(null, '../uploads/user')
    },
    filename:(req, file, ch)=>{
        cb(null, Date.now()+'_'+file.originalname)
    }
})

const upload = multer({storage: fileStorageEngine})