import React, {useState} from "react";
import AWS from "aws-sdk";


const ImageUpload = () => {
    let [file, setFile] = useState (null);
    let [imgLink, setImgLink] = useState(null);

    console.log(process.env.REACT_APP_AWS_ACCESS_KEY);
    console.log(process.env.REACT_APP_AWS_SECRET_ACCESS_KEY);

    AWS.config.update ({
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY, 
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
        region: "ap-south-1"
    })

    async function uploadFile() {
        const s3 = new AWS.S3() 
        let filename = `${Date.now()}-${file.name}`
        try {
            const response = await s3.putObject({
                Bucket: "insta-accio-dark-coder",
                Key: filename,
                Body: file,
                ContentType: file.type,
            }).promise()
            setImgLink(`https://insta-accio-dark-coder.s3.ap-south-1.amazonaws.com/${filename}`)
        }
        catch(error) {
            console.log(error.message);
        }

    }

    return ( 
        <div>
            <input type="file" onChange={e => setFile(e.target.files[0])} /> 
            <button onClick={uploadFile}>Upload</button>
            {
                imgLink && <img src={imgLink} alt="uploaded" />
            }
        </div>
    )
}

export default ImageUpload;