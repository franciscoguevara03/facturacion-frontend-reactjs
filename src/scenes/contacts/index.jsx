import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const localeText = {
    toolbarDensity: 'Tamaño',
    toolbarDensityLabel: 'Tamaño',
    toolbarDensityCompact: 'Pequeño',
    toolbarDensityStandard: 'Mediano',
    toolbarDensityComfortable: 'Grande',
    toolbarColumns: 'Columnas',
    toolbarFilters: 'Filtros',
    toolbarExport: 'Exportar',
    columnsPanelTextFieldLabel: 'Buscar columna',
    columnsPanelTextFieldPlaceholder: 'Título de la columna',
    columnsPanelHideAllButton: "Ocultar Todo",
    columnsPanelShowAllButton: "Mostrar Todo",    
  };

  const sortingOrder = ['asc', 'desc', null];

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "registrarId", headerName: "ID de Registro" },
    {
      field: "name",
      headerName: "Nombre",
      flex: 1,
      cellClassName: "name-column--cell",
      sortable: false,
      filterable: false
    },
    {
      field: "age",
      headerName: "Edad",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "Número Telefónico",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Correo Electrónico",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Dirección",
      flex: 1,
    },
    {
      field: "city",
      headerName: "Ciudad",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "Código Postal",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTOS"
        subtitle="Lista de Contactos"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          localeText={localeText}
          sortingOrder={sortingOrder}
          
        />
      </Box>
    </Box>
  );
};

export default Contacts;
