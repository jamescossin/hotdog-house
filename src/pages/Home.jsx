import React from "react";
import { Box, Button, Container, Flex, Heading, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="gray.900" color="white" py={20}>
        <Container maxW="container.xl">
          <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
            <VStack align="start" spacing={5} maxW="lg">
              <Heading as="h1" size="2xl">
                Welcome to Hot Dog House
              </Heading>
              <Text fontSize="lg">
                Family-owned and serving delicious breakfast, lunch, and dinner with homemade soups and our famous hot dog
                sauce!
              </Text>
              <Button colorScheme="yellow" size="lg" as={Link} to="/menu">
                View Menu
              </Button>
            </VStack>
            <Image
              src="http://stock.calucid.com/fetch/calucid/restaurant-interior/diner"
              alt="Restaurant Interior"
              maxW="500px"
              borderRadius="md"
            />
          </Flex>
        </Container>
      </Box>

      {/* About Section */}
      <Container maxW="container.xl" py={16}>
        <Stack direction={{ base: "column", md: "row" }} spacing={10} align="center">
          <Image
            src="http://stock.calucid.com/fetch/calucid/delicious-hot-dog/hotdog"
            alt="Hot Dog"
            maxW="400px"
            borderRadius="md"
          />
          <VStack align="start" spacing={4} maxW="lg">
            <Heading as="h2" size="xl">
              Our Story
            </Heading>
            <Text fontSize="md">
              We are a family-owned restaurant passionate about serving homemade meals. From our breakfast starting at
              5:00 AM to our famous Texas hot dogs and full dinner menu, we have something for everyone!
            </Text>
            <Button colorScheme="yellow" as={Link} to="/about">
              Learn More
            </Button>
          </VStack>
        </Stack>
      </Container>

      {/* Menu Highlights */}
      <Box bg="gray.100" py={16}>
        <Container maxW="container.xl">
          <Heading as="h2" size="xl" textAlign="center" mb={10}>
            Customer Favorites
          </Heading>
          <Flex wrap="wrap" justify="center" gap={8}>
            <VStack>
              <Image src="http://stock.calucid.com/fetch/calucid/breakfast-platter/breakfast" alt="Breakfast" width="250px" borderRadius="md" />
              <Text fontSize="lg" fontWeight="bold">
                Hearty Breakfast
              </Text>
            </VStack>
            <VStack>
              <Image src="http://stock.calucid.com/fetch/calucid/cheesesteak-sub/cheesesteak" alt="Cheesesteak" width="250px" borderRadius="md" />
              <Text fontSize="lg" fontWeight="bold">
                Cheesesteak Sub
              </Text>
            </VStack>
            <VStack>
              <Image src="http://stock.calucid.com/fetch/calucid/fried-onion-rings/onionrings" alt="Onion Rings" width="250px" borderRadius="md" />
              <Text fontSize="lg" fontWeight="bold">
                Crispy Onion Rings
              </Text>
            </VStack>
            <VStack>
              <Image src="http://stock.calucid.com/fetch/calucid/fresh-chef-salad/salad" alt="Chef Salad" width="250px" borderRadius="md" />
              <Text fontSize="lg" fontWeight="bold">
                Fresh Chef Salad
              </Text>
            </VStack>
          </Flex>
        </Container>
      </Box>

      {/* Call to Action */}
      <Box bg="gray.900" color="white" py={16} textAlign="center">
        <Heading as="h2" size="xl" mb={4}>
          Visit Us Today!
        </Heading>
        <Text fontSize="lg" mb={6}>
          Stop by and enjoy delicious homemade meals with us. We can't wait to serve you!
        </Text>
        <Button colorScheme="yellow" size="lg" as={Link} to="/contact">
          Get Directions
        </Button>
      </Box>
    </Box>
  );
};

export default Home;