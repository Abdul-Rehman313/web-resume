"use client";
import React from "react";
import {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Heading,
  Text,
  useDisclosure,
  DrawerBody,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";

import "./navbar.css";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Flex
        position="fixed"
        zIndex="10"
        w="100%"
        top="0"
        h={{ base: "80px", md: "80px" }}
        bgColor="#FFF"
        alignItems="center"
        justifyContent="center"
        padding={{
          base: "0px 16px 0px 16px",
          md: "0px 60px 0px 60px",
          lg: "0px 15px ",
        }}
        borderBottom="1px solid #e3e3e3"
      >
        <Flex w="100%" maxW="1200px" justifyContent="space-between">
          <Flex>
            <Link href="#home">
              <Heading
                color="#000"
                fontSize="32px"
                fontWeight="800"
                _hover={{ color: "#3333ff" }}
              >
              Abdul Rehman<span style={{ color: "#3333ff" }}>.</span>
              </Heading>
            </Link>
          </Flex>
          <Flex gap="20px" display={{ base: "none", lg: "flex" }}>
            <Link href="#home">
              <Text className="zoom">Hello</Text>
            </Link>
            <Link href="#skills">
              <Text className="zoom">Skills</Text>
            </Link>
            <Link href="#experience">
              <Text className="zoom">Experience</Text>
            </Link>
            <Link href="#portfolio">
              <Text className="zoom">Portfolio</Text>
            </Link>
            <Link href="#certificate">
              <Text className="zoom">Certificate</Text>
            </Link>
          </Flex>
        </Flex>

        <Flex display={{ base: "flex", lg: "none" }}>
          <HamburgerIcon color="#000" boxSize="10" onClick={onOpen} />

          <Drawer size="xs" isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                {" "}
                <Flex gap="20px" direction="column">
                  <Link href="#home">
                    <Text onClick={onClose} className="zoom">
                      Hello
                    </Text>
                  </Link>
                  <Link href="#skills">
                    <Text onClick={onClose} className="zoom">
                      Skills
                    </Text>
                  </Link>
                  <Link href="#experience">
                    <Text onClick={onClose} className="zoom">
                      Experience
                    </Text>
                  </Link>
                  <Link href="#portfolio">
                    <Text onClick={onClose} className="zoom">
                      Portfolio
                    </Text>
                  </Link>
                  <Link href="#certificate">
                    <Text onClick={onClose} className="zoom">
                      Certificate
                    </Text>
                  </Link>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </Flex>
    </>
  );
};

export default Navbar;
