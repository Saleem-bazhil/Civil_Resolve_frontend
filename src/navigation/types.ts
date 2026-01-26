import { NavigatorScreenParams } from '@react-navigation/native';

export type BottomTabParamList = {
    Home: undefined;
    Issues: undefined;
    "Report a Problem": undefined;
    Alerts: undefined;
    Profile: undefined;
};

export type RootStackParamList = {
    login: undefined;
    signup: undefined;
    MainTabs: NavigatorScreenParams<BottomTabParamList>;
    Screen: undefined;
    IssueDetail: undefined;
    DescribeForm: undefined;
    AddressForm: undefined;
    ReviewPage: undefined;
    EditProfile: undefined;
    OfficerHome: undefined;
};
