import { VStack } from "@/components/ui/vstack";
import React from "react";

import { Card } from "@/components/ui/card";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import "@/global.css";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    const [isInvalid, setIsInvalid] = React.useState(false);
    const [inputValue, setInputValue] = React.useState('12345');
    const handleSubmit = () => {
        if (inputValue.length < 6) {
            setIsInvalid(true);
        } else {
            setIsInvalid(false);
        }
    };
    return (
        <GluestackUIProvider mode="light">
            <SafeAreaView style={{ flex: 1 }}>
                <View >
                    <VStack >

                        <Card size="md" variant="elevated" className="m-3">
                            <Heading size="md" className="mb-1">
                                Quick Start
                            </Heading>
                            <Text size="sm">Start building your next project in minutes</Text>
                        </Card>
                    </VStack>
                </View>
            </SafeAreaView>
        </GluestackUIProvider>


    );
};
