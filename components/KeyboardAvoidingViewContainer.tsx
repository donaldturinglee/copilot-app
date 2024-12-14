import {KeyboardAvoidingView, Platform} from "react-native";

export default function KeyboardAvoidingViewContainer(props) {
    const { children } = props;
    if (Platform.OS === "android") {
        return children;
    }
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior="padding"
            keyboardVerticalOffset={138}>
            { children }
        </KeyboardAvoidingView>
    )
}