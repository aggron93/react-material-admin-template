import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { grey900,orange500} from 'material-ui/styles/colors';

const themeDefault = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: orange500
  },
  drawer: {
    width: 230,
    color: grey900
  },
  raisedButton: {
    primaryColor: orange500,
  }
});


export default themeDefault;