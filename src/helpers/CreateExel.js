import XLSX from 'xlsx';
const RNFS = require('react-native-fs');

export const exportDataToExcel = (data, grupo) => {

  const date = new Date().toDateString();
  

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