import XLSX from 'xlsx';
const RNFS = require('react-native-fs');



export const exportDataToExcel = (text) => {
      
        
    // Created Sample data
    let sample_data_to_export = [{nombre: 'marin', tel: 1111111},{nombre:'mario', tel: 467456780}]; //aqui vamos a recibir la dat del lector de QRs

    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(sample_data_to_export)    
    XLSX.utils.book_append_sheet(wb,ws,"Users")
    const wbout = XLSX.write(wb, {type:'binary', bookType:"xlsx"});


    // Write generated excel to Storage
    RNFS.writeFile(RNFS.DownloadDirectoryPath + `/${text}.csv`, wbout, 'ascii')
    .then((r)=>{
     console.log('Success');
    }).catch((e)=>{
      console.log('Error', e);
    });

  }