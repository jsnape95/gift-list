import * as React from "react";
import { Button } from "react-native";

const HomeHeader = () => {
  const onPressMyLists = () => null;
  const onPressFriendsLists = () => null;

  return (
    <>
      <Button
        onPress={onPressMyLists}
        title="My Lists"
        color="#afc1d0"
        accessibilityLabel="Show my lists"
      />
      <Button
        onPress={onPressFriendsLists}
        title="Friends List"
        color="#afc1d0"
        accessibilityLabel="Show friend's lists"
      />
    </>
  );
};

export default HomeHeader;
