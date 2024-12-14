import {KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import colors from "@/constants/colors";
import Feather from '@expo/vector-icons/Feather';
import KeyboardAvoidingViewContainer from "@/components/KeyboardAvoidingViewContainer";

export default function ChatScreen() {
    return (
        <KeyboardAvoidingViewContainer>
            <View style={styles.container}>
                <View style={styles.messageContainer}>

                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Type a message..."
                    />
                    <TouchableOpacity
                        style={styles.sendButton}
                    >
                        <Feather name="send" size={18} color={colors.white} />
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingViewContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bg,
    },
    inputContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 10,
    },
    textInput: {
        flex: 1
    },
    sendButton: {
        backgroundColor: colors.primary,
        width: 35,
        height: 35,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,

    },
    messageContainer: {
        flex: 1,

    }
});
