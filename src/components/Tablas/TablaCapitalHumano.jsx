import * as React from 'react';
import useStore from '../../Zustand/Zustand';
import { DataGrid } from '@mui/x-data-grid';
import TablaEsqueleto from '../Esqueletos/TablaEsqueleto';

const  TablaCapitalHumano =() => {

  const { resultSearch } = useStore();
  const [llave, setLlave] = React.useState([])

React.useEffect(() => {
  if( resultSearch.length > 0){
    
    setLlave(Object.entries(resultSearch[0][0]).map(([key, value]) => ({
      clave: key,
      llave: value.toString().length
    })));

  }
}, [resultSearch])

const mayorWidth = (llave, clave) =>{
  if(llave > clave){
    return llave
  }else{
    return clave
  }
}


//item y reparticion

  return (
    <div style={{ height: 270, width: '100%' }}>
      {
        resultSearch.length > 0 ? 
        <DataGrid
        rows={resultSearch[0].map((rs, index) => ({ ...rs, id: index }))}
        columns={llave.map((ll) => ({
          field: ll.clave,
          headerName: ll.clave.toUpperCase() == "CODI_07" ? "Item" : ll.clave.toUpperCase() == "DETA_07"? "Reparticion": ll.clave ,
          width:mayorWidth(ll.llave,ll.clave.length)< 10 ? 150:mayorWidth(ll.llave,ll.clave.length)< 18? 200 : 400 ,
        }))}
        getRowId={(row) => row.id} // Especifica cómo obtener el id de cada fila
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 15]}
        checkboxSelection
      />
      :
      (
        <TablaEsqueleto/>
      )
      }
    </div>
  );
}

export default TablaCapitalHumano;