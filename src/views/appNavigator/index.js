import { createStackNavigator } from 'react-navigation-stack';
import NewRecordView from "../newRecord";
import RecordListView from '../recordList';
import EditRecordView from '../editRecord';

const AppNavigator = createStackNavigator({
    HomeScreen: { screen: RecordListView },
    NewRecordView: { screen: NewRecordView },
    EditRecordView: { screen: EditRecordView }
});

export default AppNavigator;