import ModalWrapper from "../ModalWrapper";
import { useState } from "react";

import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, getDownloadURL, ref, uploadBytes } from "firebase/storage";

//for google maps real location
import { LoadScript, Marker, GoogleMap } from "@react-google-maps/api";

import {
  Box,
  Flex,
  //modal starts here
  Modal,
  Button,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  //form stuff starts here
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";

export default function FormTriggerBtn({ getReports }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [companyName, setCompanyName] = useState("");
  // for geolocation functionality
  const [mapCoordinates, setMapCoordinates] = useState(null);
  const [location, setLocation] = useState("");
  const [time, setTime] = useState({});
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState(null);
  const [driverName, setDriverName] = useState(null);
  const [plateNumber, setPlateNumber] = useState(null);

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleLocationClick = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`${latitude}, ${longitude}`);
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDtgjIl85v3STNcvO9InTMy_4XfDp_VoL8`
        );
        const data = await response.json();
        const { results } = data;
        if (results && results.length > 0) {
          const { formatted_address } = results[0];
          // const { location } = geometry;
          console.log(formatted_address);
          setLocation(formatted_address);
          setMapCoordinates(location);
        }
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  };

  const handleTimeSetting = () => {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var timeNow =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = today;

    const timeObj = {
      date,
      timeNow,
      dateTime,
    };
    console.log(timeObj);
    setTime((time) => ({ ...time, ...timeObj }));
  };

  // pic the

  // automatically set the time

  const handleSubmit = async (e) => {
    e.preventDefault();

    // let [hours, minutes] = [currentTime.getHours(), currentTime.getMinutes()];
    // Process the form data here\

    // handleTimeSetting();

    console.log("Company Name:", companyName);
    console.log("Location:", location);

    console.log("Description:", description);
    console.log("Image:", image);

    try {
      // Upload image to Firebase Storage
      const storageRef = ref(getStorage(), "ReportImages/" + image.name);
      const uploadRslt = await uploadBytes(storageRef, image);
      const downloadUrl = await getDownloadURL(uploadRslt.ref);
      console.log(downloadUrl);

      // Create document in Firestore
      const db = getFirestore();
      const docRef = await addDoc(collection(db, "report"), {
        attachment: downloadUrl,
        caption,
        companyName,
        location,
        timeNow: time.timeNow,
        dateTime: time.dateTime,
        date: time.date,
        description,
      });

      console.log("Document created with ID:", docRef.id);
      getReports(3);
    } catch (error) {
      console.error("Error creating document:", error);
    } finally {
      //make sure that every field is reset
      setImage("");
      setLocation("");
      setCompanyName("");
      setTime("");
    }
    // Close the modal

    onClose();
  };


  return (
    <>
      <Button
        h="55px"
        bg="#6484FB"
        onClick={async () => {
          await handleLocationClick();
          handleTimeSetting();
          onOpen();
        }}
      >
        Report Driver
      </Button>
      <ModalWrapper
        borderRadius="30px"
        p="10px"
        isOpen={isOpen}
        onClose={onClose}
      >
        <>
          <ModalHeader>Form</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl mb={4}>
                <FormLabel>Image Attachment</FormLabel>
                <Input
                  type="file"
                  outline="none"
                  onChange={handleInputChange}
                  accept="image/*"
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Caption</FormLabel>
                <Input
                  value={caption}
                  onChange={(e) => setCaption(e.target.value)}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Company Name</FormLabel>
                <Input
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Location</FormLabel>
                <Box display="flex">
                  <Input
                    value={location}
                    placeholder="Enter your location or use current"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </Box>
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Time</FormLabel>
                <Input readOnly={true} value={time.dateTime} />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>Driver Name</FormLabel>
                <Input value={driverName} />
              </FormControl>

              <FormControl mb={4}>
                <FormLabel>License Plate Number </FormLabel>
                <Input value={plateNumber} />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Incident Description</FormLabel>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormControl>
              <Flex justify="center">
                <Button type="submit" colorScheme="blue" mr={3}>
                  Report
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </>
      </ModalWrapper>
    </>
  );
}
