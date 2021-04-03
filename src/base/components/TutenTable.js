import { isEmpty } from 'lodash-es';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Visibility from '@material-ui/icons/Visibility';

import { ON_WHITE } from '../constants/colors';

const tableIcons = {
  Visibility: forwardRef((props, ref) => <Visibility {...props} ref={ref} />),
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

function TutenTable(props) {
  const {
    title,
    columns,
    dataPreFetch,
    actions,
    exportPdf,
    exportCsv,
    exportAllData,
    exportFileName,
    search,
    sorting,
    selection,
    tableRef,
    paging,
    selectionProps,
    isLoading,
    onSelectionChange,
    handleExportCsv,
    style,
  } = props;
  return (
    <MaterialTable
      title={title}
      tableRef={tableRef}
      icons={tableIcons}
      style={style}
      isLoading={isLoading}
      options={{
        debounceInterval: 500,
        search,
        sorting,
        exportButton:
          exportCsv || exportPdf
            ? {
              csv: exportCsv,
              pdf: exportPdf,
            }
            : null,
        exportCsv: handleExportCsv,
        exportAllData,
        exportFileName,
        actionsColumnIndex: !isEmpty(actions) ? -1 : 0,
        rowStyle: {
          backgroundColor: ON_WHITE,
        },
        actions: !isEmpty(actions),
        selection,
        showTextRowsSelected: false,
        paging,
        selectionProps,
      }}
      onSelectionChange={onSelectionChange}
      columns={columns}
      localization={{
        header: {
          actions: 'Acciones',
        },
        body: {
          emptyDataSourceMessage: 'No hay datos para visualizar',
        },
        toolbar: {
          exportTitle: 'Exportar',
          exportCSVName: 'Exportar a Csv',
          exportPDFName: 'Exportar datos actuales a pdf',
        },
      }}
      data={dataPreFetch}
      actions={actions}
    />
  );
}
TutenTable.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.shape()),
  actions: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape(), PropTypes.func])),
  title: PropTypes.string,
  dataPreFetch: PropTypes.arrayOf(PropTypes.shape()),
  exportCsv: PropTypes.bool,
  exportPdf: PropTypes.bool,
  exportAllData: PropTypes.bool,
  search: PropTypes.bool,
  sorting: PropTypes.bool,
  exportFileName: PropTypes.string,
  selection: PropTypes.bool,
  tableRef: PropTypes.shape(),
  paging: PropTypes.bool,
  selectionProps: PropTypes.func,
  isLoading: PropTypes.bool,
  onSelectionChange: PropTypes.func,
  style: PropTypes.shape(),
  handleExportCsv: PropTypes.func,
};
TutenTable.defaultProps = {
  columns: [],
  title: '',
  dataPreFetch: [],
  actions: [],
  exportCsv: false,
  exportPdf: false,
  exportAllData: false,
  exportFileName: null,
  search: true,
  sorting: true,
  selection: false,
  tableRef: null,
  paging: false,
  selectionProps: null,
  isLoading: false,
  onSelectionChange: null,
  style: {},
  handleExportCsv: null,
};
export default TutenTable;
