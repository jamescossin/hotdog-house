import React from "react";
import { Box, Container, Heading, Text, Image, VStack, HStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={6} align="center">
        <Heading as="h1" size="2xl" textAlign="center">
          About Hot Dog House
        </Heading>

        <Image
          src="http://stock.calucid.com/fetch/calucid/restaurant_exterior/Hot%20Dog%20House%20restaurant%20exterior"
          alt="Hot Dog House Exterior"
          borderRadius="md"
        />

        <Text fontSize="lg" textAlign="center" maxW="800px">
          We are a family-owned restaurant dedicated to serving delicious homemade meals. Our kitchen crafts fresh soups, 
          daily specials, and our famous Hot Dog Sauce. Whether you’re stopping by for an early breakfast, a satisfying 
          lunch, or a hearty dinner, we have something for everyone.
        </Text>

        <Box w="full" textAlign="center">
          <Heading as="h2" size="xl" my={4}>
            Our Menu
          </Heading>
          <HStack spacing={8} wrap="wrap" justify="center">
            <VStack>
              <Image
                src="http://stock.calucid.com/fetch/calucid/breakfast_platter/delicious%20breakfast%20platter"
                alt="Breakfast Platter"
                borderRadius="md"
              />
              <Text fontSize="md">Start your day with eggs, bacon, sausage, homefries, pancakes, and more.</Text>
            </VStack>
            <VStack>
              <Image
                src="http://stock.calucid.com/fetch/calucid/hot_dog/famous%20Texas%20hot%20dog"
                alt="Texas Hot Dog"
                borderRadius="md"
              />
              <Text fontSize="md">Enjoy our famous Texas hot dogs, hamburgers, and cheesesteaks.</Text>
            </VStack>
            <VStack>
              <Image
                src="http://stock.calucid.com/fetch/calucid/dinner_plate/full%20dinner%20plate%20chicken%20fish%20shrimp"
                alt="Dinner Plate"
                borderRadius="md"
              />
              <Text fontSize="md">Sit down to a full dinner with chicken, fish, shrimp, and more.</Text>
            </VStack>
          </HStack>
        </Box>

        <Box w="full" textAlign="center">
          <Heading as="h2" size="xl" my={4}>
            Why Choose Us?
          </Heading>
          <Text fontSize="lg" maxW="800px">
            At Hot Dog House, we pride ourselves on quality ingredients, homemade recipes, and a welcoming atmosphere. 
            Whether you're grabbing a quick bite or enjoying a family meal, you'll always feel at home.
          </Text>
        </Box>

        <Button as={Link} to="/menu" colorScheme="yellow" size="lg">
          View Full Menu
        </Button>
      </VStack>
    </Container>
  );
};

export default About;