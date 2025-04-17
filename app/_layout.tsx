import HeaderTitle from "@/components/Header";
import { Stack } from "expo-router";
import * as React from "react";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          header: () => <HeaderTitle />,
          headerStyle: {
            backgroundColor: "#afc1d0",
          },
          // headerTintColor: "#fff",
          // headerTitleStyle: {
          //   color: "#2e2d2d",
          //   fontWeight: "bold",
          // },
        }}
      />
    </Stack>
  );
};

export default StackLayout;
