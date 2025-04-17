import * as React from "react";
import { Stack } from "expo-router";

import { AuthProvider } from "@/context/AuthContext";
import HeaderTitle from "@/components/Header";

const StackLayout = () => {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="(tabs)"
          options={{
            header: () => <HeaderTitle />,
            headerStyle: {
              backgroundColor: "#afc1d0",
            },
          }}
        />
      </Stack>
    </AuthProvider>
  );
};

export default StackLayout;
