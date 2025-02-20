import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, Input, Stack, Text, Textarea, Link, Icon } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <Flex direction={{ base: "column", md: "row" }} justify="space-between">
        <Box flex="1" mr={{ md: 10 }}>
          <Heading as="h1" size="xl" mb={4}>
            Contact Us
          </Heading>
          <Text fontSize="lg" mb={6}>
            We’d love to hear from you! Feel free to reach out with any questions or feedback.
          </Text>
          <Box mb={4}>
            <Text fontSize="md" fontWeight="bold">Location:</Text>
            <Text>123 Main St, YourTown, USA</Text>
          </Box>
          <Box mb={4}>
            <Text fontSize="md" fontWeight="bold">Email:</Text>
            <Link href="mailto:contact@hotdoghouse.com">contact@hotdoghouse.com</Link>
          </Box>
          <Box mb={4}>
            <Text fontSize="md" fontWeight="bold">Follow Us:</Text>
            <Flex mt={2}>
              <Link href="https://facebook.com" isExternal>
                <Icon as={FaFacebook} boxSize={6} mx={2} />
              </Link>
              <Link href="https://instagram.com" isExternal>
                <Icon as={FaInstagram} boxSize={6} mx={2} />
              </Link>
              <Link href="https://twitter.com" isExternal>
                <Icon as={FaTwitter} boxSize={6} mx={2} />
              </Link>
            </Flex>
          </Box>
        </Box>
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4}>Send us a message</Heading>
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your Name" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your Email" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your Message" />
            </FormControl>
            <Button colorScheme="orange" size="lg">Send Message</Button>
          </Stack>
        </Box>
      </Flex>
      <Box mt={10}>
        <img src="http://stock.calucid.com/fetch/calucid/contact_restaurant/restaurant" alt="Contact Hot Dog House" width="100%" />
      </Box>
    </Container>
  );
};

export default Contact;