import XLSX from 'xlsx';
const RNFS = require('react-native-fs');

<<<<<<< HEAD
export const exportDataToExcel = (data, grupo) => {

  const date = new Date().toDateString();
  
=======
export const exportDataToExcel = (text) => {
      
        
    // Created Sample data
    let sample_data_to_export = [{nombre: 'marcus', tel: 5050505},{nombre:'mimosa', tel: 56987567}]; //aqui vamos a recibir la dat del lector de QRs
>>>>>>> 28c12b38334f560780e4944df9f8a89d0c0f8384

    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet([data])    
    XLSX.utils.book_append_sheet(wb,ws, date)
    const wbout = XLSX.write(wb, {type:'binary', bookType:"xlsx"});


    // Write generated excel to Storage
    RNFS.writeFile(RNFS.DownloadDirectoryPath + `/${grupo+'_'+date}.xlsx`, wbout, 'ascii')
    .then((r)=>{
     console.log('Asistencia tomada, su archivo se descargo correctamente');
    }).catch((e)=>{
      console.log('Error', e);
    });

  }