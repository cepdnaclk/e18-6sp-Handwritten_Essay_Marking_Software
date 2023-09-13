const express = require('express');
const multer = require('multer');
const File = require("../models/File");
const router = express();
const fs = require('fs');

const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('file'), (req, res) => {
    try {
        const { originalname, path } = req.file;
        let content = '';

        // Determine the content type based on file extension
        const fileExtension = originalname.split('.').pop().toLowerCase();

        if (fileExtension === 'txt' || fileExtension === 'json') {
            // For text or JSON files, read as UTF-8 text
            content =  fs.promises.readFile(path, 'utf8');
        } else {
            // For binary files like PDFs, read as binary data
            content =  fs.promises.readFile(path);
        }
        console.log(content);

        // Save the file information to your MongoDB database
        const file = new File({
            filename: originalname,
            path: path,
            size: req.file.size,
            content: content,
        });

         file.save();

        // Delete the temporary file
        fs.unlinkSync(path);

        res.status(201).json({ message: 'File uploaded successfully!', file });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while processing the file.' });
    }
});

router.get('/', (req, res) => {
    File.find().then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).json(err);
    });
}
);


module.exports = router;


// const express = require('express');
// const multer = require('multer');
// const fs = require('fs');

// const app = express();

// const upload = multer({ dest: 'uploads/' });

// app.post('/', upload.single('file'), (req, res) => {
//     const { originalname, filename, path } = req.file;

//     // Read the content of the file
//     fs.readFile(path, 'utf8', (err, data) => {
//         if (err) {
//             return res.status(500).send(err);
//         }

//         // Assuming you want to save the content and file info to MongoDB
//         const content = data;
//         // Save the content and file information to your MongoDB database
//         // ...
        
//         fs.unlinkSync(path); // Delete the temporary file

//         res.json({ message: 'File uploaded successfully!' });
//     });
// });

// module.exports = app;

// app.listen(5000, () => {
//     console.log('Server is running on http://localhost:5000');
// });
