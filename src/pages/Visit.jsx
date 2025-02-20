import React from "react";
import { Box, Heading, Text, Image, VStack, HStack, Icon, Link, Divider } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaClock, FaPhone, FaEnvelope } from "react-icons/fa";

const Visit = () => {
  return (
    <Box maxW="800px" mx="auto" p={6}>
      {/* Hero Section */}
      <VStack spacing={4} textAlign="center">
        <Heading as="h1" size="2xl">Visit Hot Dog House</Heading>
        <Text fontSize="lg" color="gray.600">
          Family-owned and serving homemade favorites since day one.
        </Text>
        <Image
          borderRadius="md"
          src="http://stock.calucid.com/fetch/calucid/hotdoghouse_exterior/restaurant exterior"
          alt="Hot Dog House Exterior"
        />
      </VStack>

      <Divider my={6} />

      {/* Location Section */}
      <VStack spacing={4} align="start">
        <Heading as="h2" size="lg">Our Location</Heading>
        <HStack>
          <Icon as={FaMapMarkerAlt} color="red.500" />
          <Text fontSize="md">123 Main Street, YourCity, YourState</Text>
        </HStack>
        <Image
          borderRadius="md"
          src="http://stock.calucid.com/fetch/calucid/hotdoghouse_map/location map"
          alt="Location Map"
        />
      </VStack>

      <Divider my={6} />

      {/* Hours Section */}
      <VStack spacing={4} align="start">
        <Heading as="h2" size="lg">Hours of Operation</Heading>
        <HStack>
          <Icon as={FaClock} color="blue.500" />
          <VStack align="start">
            <Text>Monday - Friday: 5:00 AM - 9:00 PM</Text>
            <Text>Saturday - Sunday: 6:00 AM - 10:00 PM</Text>
          </VStack>
        </HStack>
      </VStack>

      <Divider my={6} />

      {/* Contact Section */}
      <VStack spacing={4} align="start">
        <Heading as="h2" size="lg">Contact Us</Heading>
        <HStack>
          <Icon as={FaPhone} color="green.500" />
          <Text>(123) 456-7890</Text>
        </HStack>
        <HStack>
          <Icon as={FaEnvelope} color="purple.500" />
          <Link href="mailto:info@hotdoghouse.com" color="blue.500">info@hotdoghouse.com</Link>
        </HStack>
      </VStack>

      <Divider my={6} />

      {/* Call to Action */}
      <VStack spacing={4} textAlign="center">
        <Heading as="h2" size="lg">Come and Taste the Best!</Heading>
        <Text fontSize="md" color="gray.600">
          Enjoy our homemade soups, Texas hot dogs, and full breakfast, lunch, and dinner menu. 
          We can't wait to serve you!
        </Text>
        <Image
          borderRadius="md"
          src="http://stock.calucid.com/fetch/calucid/hotdoghouse_food/delicious hot dog and meal"
          alt="Delicious Meal at Hot Dog House"
        />
      </VStack>
    </Box>
  );
};

export default Visit;