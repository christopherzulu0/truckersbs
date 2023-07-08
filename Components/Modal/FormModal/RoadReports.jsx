import ModalWrapper from "../ModalWrapper";
import { useState, useEffect } from "react";
import { LoadingWidget } from "../../../pages/Reports.js";
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

// component starts here

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
  const [loading, setLoading] = useState(false);
  const [docRefId, setDocRefId] = useState(null);

  const handleInputChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleLocationClick = () => {
    let googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation(`${latitude}, ${longitude}`);
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsApiKey}`
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

  // automatically set the time

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Process the form data here

    console.log("Company Name:", companyName);
    console.log("Location:", location);

    console.log("Description:", description);
    console.log("Image:", image);

    try {
      console.log(loading);
      // Upload image to Firebase Storage
      const storageRef = ref(getStorage(), "ReportImages/" + image.name);
      const uploadRslt = await uploadBytes(storageRef, image);
      setDocRefId(uploadRslt);

      const downloadUrl = await getDownloadURL(uploadRslt.ref);

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
    }
    // Close the modal

    onClose();
  };

  useEffect(() => {
    if (docRefId) {
      setLoading(!loading);
    }
  }, [docRefId]);

  const clearData = () => {
    setDocRefId(null);
    setLoading((current) => {
      if (current) {
        return false;
      }
      return false;
    });
  };

  return (
    <>
      <Button
        h="55px"
        bg="#6484FB"
        onClick={async () => {
          clearData();
          await handleLocationClick();
          handleTimeSetting();
          onOpen();
        }}
      >
        Make a Report
      </Button>

      <ModalWrapper
        borderRadius="30px"
        p="10px"
        isOpen={isOpen}
        onClose={onClose}
      >
        <>
          <ModalHeader>Give Road Report</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {loading && <LoadingWidget />}
            {!loading && (
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
                  <FormLabel>Description</FormLabel>
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
            )}
          </ModalBody>
        </>
      </ModalWrapper>
    </>
  );
}
