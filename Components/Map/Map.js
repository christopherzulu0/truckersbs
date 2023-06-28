import React, { useRef, useState } from "react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  HStack,
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  SkeletonText,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import ReactDatePicker from "react-datepicker";
import { useFormik } from "formik";
// import { firebase } from "firebase/firestore";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { firebase } from "../../firebase/clientApp";
import { getFirestore } from "firebase/firestore";


// import { DatePicker, DatePickerInput } from "chakra-datetime-picker";

import { mapSchema, mapValues } from "../validationSchema/map";
import {
  planRouteValues,
  planRouteSchema,
} from "../validationSchema/planRoute";

const center = { lat: 48.8584, lng: 2.2945 };
const libraries = ["places"];

export default function Map() {

const db = getFirestore(firebase)

  const formik = useFormik({
    initialValues: mapValues,
    validationSchema: mapSchema,
    onSubmit: async (values) => {
      try {
        const directions = await addDoc(collection(db, "directions"), {
          from: values.from,
          destination: values.destination,
          startTime: values.startTime,
          firstStop: values.firstStop,
        });
        console.log("values directions", directions);
        alert(JSON.stringify(values, null, 2));
      } catch (error) {
        console.log("error", error);
      }
    },
  });

  const formikPlanRoute = useFormik({
    initialValues: planRouteValues,
    validationSchema: planRouteSchema,
    onSubmit: async (values) => {
      try {
        console.log("values", values);
        alert(JSON.stringify(values, null, 2));
      } catch (error) {
        console.log("error", error);
      }
    },
  });

  const time = formik.values.startTime;
  const end = Date.now();

  console.log("time", end);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCxF5mBRVIcJmmnpnvfzlejI2N79H7PZf4",
    libraries: libraries,
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");

  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  if (!isLoaded) {
    return <SkeletonText />;
  }

  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }
  return (
    <>
      <Flex
        position="relative"
        flexDirection="column"
        alignItems="center"
        h="40vh"
        w="47vw"
        // ml="-1.5vw"
      >
        <Box position="absolute" left={0} top={0} h="100%" w="100%">
          {/* Google Map Box */}
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "40%", height: "100%" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
          >
            <Marker position={center} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </Box>
      </Flex>
      <Box
        p={4}
        borderRadius="lg"
        m={4}
        bgColor="white"
        shadow="base"
        zIndex="1"
        maxW={"30rem"}
      >
        <HStack spacing={2} justifyContent="space-between">
          <Box flexGrow={1}>
            <FormControl
              isInvalid={!!formik.errors.from && formik.touched.from}
            >
              <Autocomplete>
                <FormLabel htmlFor="From">
                  From
                  <Input
                    type="text"
                    name="from"
                    onChange={formik.handleChange}
                    value={formik.values.from}
                    placeholder="From"
                  />
                  <FormErrorMessage>{formik.errors.from}</FormErrorMessage>
                </FormLabel>
              </Autocomplete>
            </FormControl>
          </Box>
          <Box flexGrow={1}>
            <FormControl
              isInvalid={!!formik.errors.startTime && formik.touched.startTime}
            >
              <Autocomplete>
                <FormLabel htmlFor="Start off time">
                  Start off time
                  <Input
                    name="startTime"
                    type="time"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.startTime}
                    placeholder="Start off time"
                  />
                  <FormErrorMessage>{formik.errors.startTime}</FormErrorMessage>
                </FormLabel>
              </Autocomplete>
            </FormControl>
          </Box>
        </HStack>
        <br />
        <HStack spacing={2} justifyContent="space-between">
          <Box flexGrow={1}>
            <FormControl
              isInvalid={
                !!formik.errors.destination && formik.touched.destination
              }
            >
              <Autocomplete>
                <FormLabel htmlFor="Destination">
                  Destination
                  <Input
                    name="destination"
                    type="text"
                    placeholder="Destination"
                    onChange={formik.handleChange}
                    value={formik.values.destination}
                  />
                  <FormErrorMessage>
                    {formik.errors.destination}
                  </FormErrorMessage>
                </FormLabel>
              </Autocomplete>
            </FormControl>
          </Box>
          <Box flexGrow={1}>
            <FormControl
              isInvalid={!!formik.errors.firstStop && formik.touched.firstStop}
            >
              <Autocomplete>
                <FormLabel htmlFor="First stop">
                  First stop
                  <Input
                    name="firstStop"
                    type="time"
                    placeholder="First stop"
                    onChange={formik.handleChange}
                    value={formik.values.firstStop}
                  />
                  <FormErrorMessage>{formik.errors.firstStop}</FormErrorMessage>
                </FormLabel>
              </Autocomplete>
            </FormControl>
          </Box>
        </HStack>
        <HStack spacing={4} mt={4} justifyContent="space-between">
          <Text>Distance: {distance} </Text>
          <Text>Duration: {duration} </Text>
          <IconButton
            aria-label="center back"
            icon={<FaLocationArrow />}
            isRound
            onClick={() => {
              map.panTo(center);
              map.setZoom(15);
            }}
          />
        </HStack>
      </Box>
      <ButtonGroup ml={4}>
        <Button onClick={formik.handleSubmit} colorScheme="blue" type="submit">
          Calculate Route
        </Button>
        <IconButton
          aria-label="center back"
          icon={<FaTimes />}
          onClick={clearRoute}
        />
      </ButtonGroup>

      {/* Plan route model */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Route Plan</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl
              isInvalid={
                !!formikPlanRoute.errors.hours && formikPlanRoute.touched.hours
              }
            >
              <FormLabel htmlFor="Hours of Driving">
                Hours of Driving
                <Select
                  name="hours"
                  onChange={formikPlanRoute.handleChange}
                  value={formikPlanRoute.values.hours}
                  // placeholder="Hours of Driving"
                >
                  <option value="option1">3 hours</option>
                  <option value="option2">4 hours</option>
                  <option value="option3">5 hours</option>
                </Select>
                <FormErrorMessage>
                  {formikPlanRoute.errors.hours}
                </FormErrorMessage>
              </FormLabel>
            </FormControl>
            <FormControl
              isInvalid={
                !!formikPlanRoute.errors.intermediateStop &&
                formikPlanRoute.touched.intermediateStop
              }
            >
              <FormLabel htmlFor="Intermediate Stops">
                Intermediate Stops
                <Select
                  onChange={formikPlanRoute.handleChange}
                  value={formikPlanRoute.values.intermediateStop}
                  placeholder="Intermediate Stops"
                >
                  <option value="option1">
                    Quebec Station, 3rd Street, Down Street
                  </option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <FormErrorMessage>
                  {formikPlanRoute.errors.intermediateStop}
                </FormErrorMessage>
              </FormLabel>
            </FormControl>
            <br />
            <p style={{ fontWeight: "bold" }}>Plot Stops on the Map</p>
            <Flex
              position="relative"
              flexDirection="column"
              alignItems="center"
              h="40vh"
              w="47vw"
              // ml="-1.5vw"
            >
              <Box position="absolute" left={0} top={0} h="100%" w="100%">
                {/* Google Map Box */}
                <GoogleMap
                  center={center}
                  zoom={15}
                  mapContainerStyle={{ width: "40%", height: "100%" }}
                  options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                  }}
                  onLoad={(map) => setMap(map)}
                >
                  <Marker position={center} />
                  {directionsResponse && (
                    <DirectionsRenderer directions={directionsResponse} />
                  )}
                </GoogleMap>
              </Box>
            </Flex>
          </ModalBody>
          <Center>
            <Button
              onClick={formikPlanRoute.handleSubmit}
              mt={4}
              colorScheme="blue"
              mr={3}
            >
              Schedule Route
            </Button>
          </Center>
          <br />
        </ModalContent>
      </Modal>

      <Box mt={8}>
        <Center>
          <ButtonGroup ml={4}>
            <Button onClick={onOpen} colorScheme="blue" type="submit">
              Plan Route
            </Button>
            <Button colorScheme="blue" type="submit">
              Check Analytics
            </Button>
          </ButtonGroup>
        </Center>
      </Box>
    </>
  );
}
