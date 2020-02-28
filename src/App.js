import React, { useState, useEffect } from 'react';

function App() {
  const [file, setFile] = useState(null);
  const [blobs, setBlobs] = useState([]);

  function onChangeFile(e) {
    const f = Array.from(e.target.files)[0];
    setFile(f);
  }

  function getBlobs() {
    if (window.blobService) {
      window.blobService.listBlobsSegmented('images', null, function(
        error,
        results
      ) {
        if (error) {
          // List blobs error
        } else {
          setBlobs(results.entries);
        }
      });
    }
  }

  useEffect(() => {
    getBlobs();
  }, []);

  function handleUpload() {
    if (!file) {
      alert('File is empty!');
      return;
    }

    if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
      alert('File is not an image!');
      return;
    }

    if (file.size >= 1024 * 1024) {
      alert('File size must not smaller than 1MB!');
      return;
    }

    const customBlockSize =
      file.size > 1024 * 1024 * 32 ? 1024 * 1024 * 4 : 1024 * 512;
    window.blobService.singleBlobPutThresholdInBytes = customBlockSize;

    window.blobService.createBlockBlobFromBrowserFile(
      'images',
      file.name,
      file,
      { blockSize: customBlockSize },
      function(error, result, response) {
        if (error) {
          // Upload blob failed
        } else {
          getBlobs();
        }
      }
    );
  }

  function handleDelete(blobName) {
    return function() {
      window.blobService.deleteBlobIfExists('images', blobName, function(
        error,
        result
      ) {
        if (error) {
          // Delete blob failed
        } else {
          getBlobs();
        }
      });
      console.log(blobName);
    };
  }

  console.log(blobs);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      }}
    >
      <h1>Upload Image</h1>
      <input type="file" onChange={onChangeFile} />
      <br />
      <button type="button" onClick={handleUpload}>
        Upload
      </button>
      <br />
      {blobs.map((image, i) => (
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
          <img
            key={i}
            alt={i}
            style={{ width: 300, display: 'block' }}
            src={`${window.blobUri}/images/${image.name}`}
          />
          <button type="button" onClick={handleDelete(image.name)}>
            Delete
          </button>
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;
