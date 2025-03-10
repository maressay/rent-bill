import { Pressable, Text } from "react-native";

type Props = {
    content: string;
    onPress: () => void;
}

export default function CustomButton({ content, onPress } : Props) {

    return (
        <>
            <Pressable
                onPress={onPress}
            >
                <Text>{content}</Text>
            </Pressable>
        </>
    )

}