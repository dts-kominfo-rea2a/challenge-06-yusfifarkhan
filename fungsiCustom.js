// TODO: import module bila dibutuhkan di sini
const fs = require('fs');

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallback) => {
  const result = []; // Array of Result

  // Read First JSON File
  fs.readFile(file1, 'utf-8', (err, data) => {
    if(err){
      return fnCallback(err, null);
    }

    const parseData1 = JSON.parse(data);
    result.push(parseData1.message.split(" ")[1]);

    // Read Second JSON File
    fs.readFile(file2, 'utf-8', (err, data)=>{
      if (err) {
        return fnCallback(err, null);
      }

      const parseData2 = JSON.parse(data);
      result.push(parseData2[0].message.split(" ")[1]);

      // Read Third JSON File
      fs.readFile(file3, 'utf-8', (err, data)=>{
        if(err){
          return fnCallback(err, null);
        }

        const parseData3 = JSON.parse(data);
        result.push(parseData3[0]['data'].message.split(" ")[1]);
        fnCallback(null, result);
      });
    })
  })

};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
