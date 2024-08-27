import AddBox from '@material-ui/icons/AddBox'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'

import MaterialTable from 'material-table'
import { forwardRef } from 'react'

const icons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref as React.Ref<SVGSVGElement>} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref as React.Ref<SVGSVGElement>} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref as React.Ref<SVGSVGElement>} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref as React.Ref<SVGSVGElement>} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref as React.Ref<SVGSVGElement>} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref as React.Ref<SVGSVGElement>} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref as React.Ref<SVGSVGElement>} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref as React.Ref<SVGSVGElement>} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref as React.Ref<SVGSVGElement>} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref as React.Ref<SVGSVGElement>} />),
  NextPage: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref as React.Ref<SVGSVGElement>} />
  )),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref as React.Ref<SVGSVGElement>} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref as React.Ref<SVGSVGElement>} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref as React.Ref<SVGSVGElement>} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref as React.Ref<SVGSVGElement>} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref as React.Ref<SVGSVGElement>} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref as React.Ref<SVGSVGElement>} />),
}

const MUITable = (props: any) => <MaterialTable icons={icons} {...props} />

export default MUITable
