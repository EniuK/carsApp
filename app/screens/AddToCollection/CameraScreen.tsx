import { Linking, StyleSheet, TouchableOpacity } from "react-native"
import React, { useEffect, useRef, useState } from "react"
import { Camera, useCameraDevices } from "react-native-vision-camera"
import * as FileSystem from "expo-file-system"
import { Box, View, Text } from "native-base"

const CameraScreen = () => {
  // const devices = useCameraDevices()
  // const device = devices.back
  // console.log(devices)
  // const camera = useRef<Camera>(null)
  // const [photoTaken, setPhotoTaken] = useState(null)
  // const [newCameraPermission, setNewCameraPermission] = useState(null)

  // useEffect(() => {
  //   const fun = async () => {
  //     const help = await Camera.requestCameraPermission()
  //     console.log("camera permision status: " + help)
  //     if (help === "denied") {
  //       await Linking.openSettings()
  //     }
  //     setNewCameraPermission(help)
  //   }
  //   fun()
  // }, [])

  // useEffect(() => {
  //   console.log("hejka")
  // }, [newCameraPermission])

  // const takePhoto = async () => {
  //   console.log("yoyo")
  //   if (camera.current) {
  //     const photo = await camera.current.takePhoto({
  //       qualityPrioritization: "quality",
  //     })
  //     const path = `${FileSystem.cacheDirectory}photo_${Date.now()}.jpg`
  //     await FileSystem.copyAsync({
  //       from: photo.path,
  //       to: path,
  //     })
  //     console.log(path)
  //     const base64Photo = await FileSystem.readAsStringAsync(path, {
  //       encoding: FileSystem.EncodingType.Base64,
  //     })
  //     console.log(base64Photo)
  //     await FileSystem.writeAsStringAsync(path, base64Photo, {
  //       encoding: FileSystem.EncodingType.Base64,
  //     })
  //   }
  // }

  return (
    <View style={{ flex: 1 }}>
      {/* <Camera style={styles.camera} ref={camera} device={device} photo={true} isActive={true} /> */}
      <View
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          opacity: 0.5,
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          position={"absolute"}
          alignItems={"center"}
          justifyContent={"center"}
          backgroundColor={"transparent"}
          w={"30%"}
          h={"60%"}
          bg={"white"}
          alignSelf={"center"}
          opacity={0.7}
        ></Box>
      </View>
      {/* <TouchableOpacity style={styles.button} onPress={takePhoto}> */}
      <Text style={styles.buttonText}>Take Photo</Text>
      {/* </TouchableOpacity> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  button: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
  },
})

export default CameraScreen
