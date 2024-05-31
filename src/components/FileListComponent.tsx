import React, { useEffect, useState } from 'react';
import config from '../config/site.config';

interface Files {
  images: string[];
  documents: string[];
}

const FileListComponent: React.FC = () => {
  const [files, setFiles] = useState<Files>({ images: [], documents: [] });

  useEffect(() => {
    fetch('/files.json')
      .then(response => response.json())
      .then(data => setFiles(data));
  }, []);

  return (
    <div>
      <h2>Images</h2>
      {files.images.map(image => (
        <img key={image} src={`${config.dlBaseUrl}/images/${image}`} alt={image} />
      ))}
      <h2>Documents</h2>
      {files.documents.map(doc => (
        <a key={doc} href={`${config.dlBaseUrl}/documents/${doc}`} target="_blank" rel="noopener noreferrer">{doc}</a>
      ))}
    </div>
  );
};

export default FileListComponent;
