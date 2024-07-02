import RNFetchBlob from 'rn-fetch-blob';

const downloadSizeInBits = 12000000;
const uploadSizeInBits = 5000000; // Adjust as needed

let downloadTask, uploadTask;

const measureConnectionSpeed = (downloadURI, uploadURI) => {
  downloadURI =
    downloadURI ||
    'https://drive.google.com/open?id=1MBHJXeRxMLLwHFpqbgTdEPsFArMM0cz7';
  uploadURI =
    uploadURI ||
    'https://drive.google.com/open?id=1MBHJXeRxMLLwHFpqbgTdEPsFArMM0cz7';

  return new Promise((resolve, reject) => {
    const startDownloadTime = new Date().getTime();
    downloadTask = RNFetchBlob.config({fileCache: false})
      .fetch('GET', downloadURI, {})
      .then(res => {
        const endDownloadTime = new Date().getTime();
        const downloadDuration = (endDownloadTime - startDownloadTime) / 1000;
        let downloadSpeed = (
          downloadSizeInBits /
          (1024 * 1024 * downloadDuration)
        ).toFixed(2);

        if (downloadSpeed >= 1024) {
          downloadSpeed = (downloadSpeed / 1024).toFixed(2) + ' MB/s';
        } else {
          downloadSpeed += ' KB/s';
        }

        const startUploadTime = new Date().getTime();
        uploadTask = RNFetchBlob.config({fileCache: false})
          .fetch('POST', uploadURI, {}, null)
          .then(res => {
            const endUploadTime = new Date().getTime();
            const uploadDuration = (endUploadTime - startUploadTime) / 1000;
            let uploadSpeed = (
              uploadSizeInBits /
              (1024 * 1024 * uploadDuration)
            ).toFixed(2);

            if (uploadSpeed >= 1024) {
              uploadSpeed = (uploadSpeed / 1024).toFixed(2) + ' MB/s';
            } else {
              uploadSpeed += ' KB/s';
            }

            resolve({downloadSpeed, uploadSpeed});
          })
          .catch(err => {
            reject(err);
          });
      })
      .catch(err => {
        reject(err);
      });
  });
};

const stopMeasurement = () => {
  if (downloadTask && downloadTask.cancel) {
    downloadTask.cancel();
  }
  if (uploadTask && uploadTask.cancel) {
    uploadTask.cancel();
  }
  // Reset speeds to 0 KB/s
  const zeroSpeed = '0 KB/s';
  return {downloadSpeed: zeroSpeed, uploadSpeed: zeroSpeed};
};

export {measureConnectionSpeed, stopMeasurement};
