import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
  <Box>
    <HStack>
      <Image src={imageSrc} borderRadius={8}/>
    </HStack>
    <VStack bg="white" align="baseline" p={4} mt={-3} borderRadius={8}>
      <Heading as="h2" size="sm" color="black"mb={2} mt={2}>
        {title}
        </Heading>
        <Text fontSize="sm" color="blackAlpha.700">
          {description}
          </Text>
          <HStack>
         <Text color="black" align="baseline">
              see more
             </Text>
             <FontAwesomeIcon icon={faArrowRight} size="1x" color="black"/>
             </HStack>
      </VStack>
    </Box>

  
)};

export default Card;
