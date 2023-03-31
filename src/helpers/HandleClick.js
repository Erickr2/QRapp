
import { PermissionsAndroid } from 'react-native';
import { exportDataToExcel } from '../helpers/CreateExel';


export const handleClick = async (text) => {

    try{
      let isPermitedExternalStorage = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);

      if(!isPermitedExternalStorage){

        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "Se necesita permiso de almacenamiento",
            buttonNeutral: "Preguntame mas tarde",
            buttonNegative: "Cancelar",
            buttonPositive: "De acuerdo"
          }
        );

        
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          exportDataToExcel(text);
          console.log("Permiso concedido");
        } else {
          console.log("Permiso denegado");
        }
      }else{
         exportDataToExcel(text);
      }
    }catch(e){
      console.log('Error al revisar permisos');
      console.log(e);
      return
    }
    
    }