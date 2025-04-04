import React, { useState } from "react";
import { Dimensions, FlatList, Text, TouchableOpacity, View, Alert } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import TouchID from 'react-native-touch-id';
import { StackActions, useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get("window");

const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "del"];
const dialPadSize = width * 0.18;
const pinLength = 4;
const correctPin = [1, 6, 5, 6];

const optionalConfigObject = {
  title: "Login with Touch-ID", 
  imageColor: "#0C727D", 
  imageErrorColor: "#ff0000", 
  sensorDescription: "Touch sensor", 
  sensorErrorDescription: "Помилка ", 
  cancelText: "Cancel", 
  fallbackLabel: "Show Passcode", 
  unifiedErrors: false,
  passcodeFallback: false 
};

export default function App() {
  const [pinCode, setPinCode] = useState([]);
  const navigation = useNavigation();

  const authenticateWithFingerprint = () => {
    TouchID.authenticate("Authenticate with fingerprint", optionalConfigObject)
      .then(success => {
        navigation.dispatch(StackActions.replace('Main'));
      })
      .catch(error => {
        Alert.alert("Authentication Failed", error.message);
      });
  };

  const CheckPinCode = (code) => {
    if (code.length === pinLength) {
      if (code.join('') === correctPin.join('')) {
        navigation.dispatch(StackActions.replace('Main'));
      } else {
        Alert.alert("Incorrect PIN");
        setPinCode([]); 
      }
    }
  };

  const DialPad = ({ onPress }) => {
    return (
      <View style={{ height: 420 }}>
        <FlatList
          data={dialPad}
          numColumns={3}
          style={{ flexGrow: 1 }}
          keyExtractor={(_, index) => index.toString()}
          scrollEnabled={false}
          columnWrapperStyle={{ gap: 30 }}
          contentContainerStyle={{ gap: 30 }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (item === "del") {
                    onPress(item);
                  } else if (item === "") {
                    authenticateWithFingerprint();
                  } else {
                    onPress(item);
                  }
                }}
              >
                <View
                  style={{
                    width: dialPadSize,
                    height: dialPadSize,
                    borderRadius: dialPadSize / 2,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item === "del" ? (
                    <Ionicons
                      name="backspace-outline"
                      size={dialPadSize / 2}
                      color="black"
                    />
                  ) : item === "" ? (
                    <Ionicons
                      name="finger-print"
                      size={dialPadSize / 2}
                      color="black"
                    />
                  ) : (
                    <Text
                      style={{
                        fontSize: dialPadSize / 2,
                        color: "black",
                      }}
                    >
                      {item}
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#9dcabd",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 42,
          color: "#0C727D",
        }}
      >
        Login with Passcode
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: 20,
          marginBottom: 40,
          height: 30,
          alignItems: "flex-end",
        }}
      >
        {[...Array(pinLength).keys()].map((index) => {
          const isSelected = !!pinCode[index];

          return (
            <View
              key={index}
              style={{
                width: 22,
                height: isSelected ? 22 : 2,
                borderRadius: 22,
                backgroundColor: "black",
              }}
            />
          );
        })}
      </View>
      <DialPad
        onPress={(item) => {
          if (item === "del") {
            setPinCode((prevCode) => {
              const newCode = prevCode.slice(0, prevCode.length - 1);
              CheckPinCode(newCode);
              return newCode;
            });
          } else if (typeof item === "number") {
            setPinCode((prevCode) => {
              const newCode = [...prevCode, item];
              CheckPinCode(newCode);
              return newCode;
            });
          }
        }}
      />
    </View>
  );
}
