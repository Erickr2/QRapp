
const xlsx = require('xlsx')

const students = [
    {name: 'erick', age: 21, num: 5534504494},
    {name: 'karen', age: 22, num: 5621250903 }
]

 const CreateFileExcel = () => {

   
    
    const WorkSheet = xlsx.utils.json_to_sheet(students);
    const WorkBook = xlsx.utils.book_new();

    xlsx.utils.book_append_sheet(WorkBook, WorkSheet, "students")
    xlsx.write(WorkBook,{bookType:"xlsx", type: "buffer"});

  xlsx.write(WorkBook, {bookType:'xlsx', type:'binary'});
  xlsx.writeFile(WorkBook, "AsistenciaDATA.xlsx")

}

CreateFileExcel();
