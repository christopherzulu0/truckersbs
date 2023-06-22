import React, { useState } from "react";
import ReactQuill from 'react-quill';
import axios from 'axios';

import ImageUploader from 'quill-image-uploader';

const EditorInput = () => {
  const [text, setText] = useState('');

  ReactQuill.Quill.register('modules/imageUploader', ImageUploader);

  const modules = {
    toolbar: [['bold', 'italic', 'image']],
    imageUploader: {
      upload: async (file) => {
        const formData = new FormData();
        formData.append('image', file);

        const response = await axios.post(
          'https://api.imgbb.com/1/upload?key=d36eb6591370ae7f9089d85875e56b22',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );

        return response.data.data.url;
      },
    },
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'imageBlot',
  ];

  const handleChange = (content) => {
    setText(content);
    console.log(content);
  };

  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      value={text}
      onChange={handleChange}
    />
  );
};

export default EditorInput;