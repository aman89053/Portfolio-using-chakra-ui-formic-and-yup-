import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack,VStack } from "@chakra-ui/react";
import { useEffect } from "react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const HeaderRef=useRef();
  useEffect(()=>{
    let prevPosScroll=window.scrollY;
    const handleScroll=()=>{
     const currentPosScroll=window.scrollY;
      const Header=HeaderRef.current;
      if(!Header){
        return;
      }
      if(prevPosScroll>currentPosScroll){
        Header.style.opacity="1";
      }
      else{
        Header.style.opacity="0";
      }
      prevPosScroll=currentPosScroll;

    };
    window.addEventListener("scroll",handleScroll);
    return()=>{
      window.removeEventListener("scroll",handleScroll);
    };

  }
,[]);
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={HeaderRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            <HStack spacing={4}>
              <a href="mailto: hello@example.com">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
              <a href="https://github.com">
              <FontAwesomeIcon icon={faGithub} size="2x"/>
              </a>
              <a href="https://www.linkedin.com">
              <FontAwesomeIcon icon={faLinkedin} size="2x"/>
              </a>
              <a href="https://medium.com">
              <FontAwesomeIcon icon={faMedium} size="2x"/>
              </a>
              <a href="https://stackoverflow.com">
              <FontAwesomeIcon  icon={faStackOverflow} size="2x"/>
              </a>
          
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#contactme-section" onClick= {handleClick}>
                Contact Me
              </a>
              <a href="#projects-section" onClick={handleClick}>
                Projects
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
