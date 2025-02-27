"use client";
import React from "react";
import {
  Divider,
  Flex,
  Text,
  Image,
  Avatar,
  Box,
  List,
  ListItem,
  ListIcon,
  UnorderedList,
  Button,
} from "@chakra-ui/react";
import Link from "next/link.js";

import { SKILLS, EXPERIENCE, PORTFOLIOS } from "./constant.js";

import "./homepage.css";
import { CheckCircleIcon } from "@chakra-ui/icons";

const HomePage = () => {
  return (
    <>
      {/* Intro Section */}
      <Flex
        id="home"
        direction="column"
        alignItems="center"
        w="100%"
        padding={{
          base: "0px 20px 0px 20px",
          md: "0px 60px 0px 60px",
          lg: "0px 15px 0px 15px ",
        }}
      >
        <Flex
          pt="30px"
          w="100%"
          gap="15px"
          maxW="1200px"
          justify="center"
          padding="15px 0px"
          direction={{ base: "column", md: "row" }}
        >
          <Flex direction="column" w={{ base: "full", md: "30%" }}>
            <Avatar
              height={{ md: "211px", lg: "330px" }}
              width={{ md: "211px", lg: "330px" }}
              name="Abdul Rehman"
              src="https://bit.ly/sage-adebayo"
            />
            {/* <Image
              src="/me.jpg"
              alt="pic"
              height={{ md: "211px", lg: "330px" }}
              width={{ md: "211px", lg: "330px" }}
              borderRadius="100%"
            /> */}
          </Flex>
          <Flex direction="column" w={{ base: "full", md: "70%" }}>
            <Text fontSize="36px" fontWeight="700">
              About me<span style={{ color: "#3333ff" }}>.</span>
            </Text>
            <Text p="16px 0px" fontSize="16px" textAlign="justify">
              {` 
Welcome to the forefront of software innovation! As an Associate Software Engineer, I bring a fresh perspective, a problem-solving mindset, and a passion for continuous learning. With over a year of hands-on experience in frontend development, particularly with Next.js and React.js, I have honed my skills in building sleek, user-friendly interfaces that enhance digital experiences. My journey has also expanded into full-stack MERN development, allowing me to work seamlessly across both frontend and backend technologies. I thrive in dynamic environments, tackling challenges with precision and dedication, and I am committed to contributing to our team's success by turning ideas into impactful software solutions.`}
            </Text>
            <Flex gap="70px">
              <Flex direction="column" gap="11px">
                <Text className="info">Phone:</Text>
                <Text className="info">Email:</Text>
                <Text className="info">Address:</Text>
                <Text className="info">LinkedIn:</Text>
              </Flex>
              <Flex direction="column" gap="5px">
                <Text className="info-contact">0303-5232873</Text>
                <Text className="info-contact">abdulrm99@gmail.com</Text>
                <Text className="info-contact">Lahore, Pakistan</Text>
                <Text className="info-contact">
                  linkedin.com/in/abdul-rehman-a27a1719a/
                </Text>
              </Flex>
            </Flex>
            <Flex gap="5px" p="16px 0px">
              <Button w="170px" fontSize="12px">
                DOWNLOAD CV
              </Button>
              <Button
                w="170px"
                bg="#3333ff"
                color="#FFF"
                fontSize="12px"
                _hover={{ bg: "#3333ff", color: "#FFF" }}
                // onClick={() => emailSend()}
              >
                CONTACT
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Divider border="soild 1px #e3e3e3" w="100%" />
      {/* Skills */}
      <Flex
        id="skills"
        direction="column"
        alignItems="center"
        w="100%"
        padding={{
          base: "0px 16px 0px 16px",
          md: "0px 60px 0px 60px",
          lg: "0px 15px ",
        }}
      >
        <Flex
          w="100%"
          maxW="1200px"
          justify="center"
          padding="15px 0px"
          gap="15px"
          direction={{ base: "column", md: "row" }}
        >
          <Flex direction="column" w={{ base: "full", md: "30%" }}>
            <Text fontSize="30px" fontWeight="600" color="#000">
              Skills<span style={{ color: "#3333ff" }}>.</span>
            </Text>
            <Text fontSize="16px" color="#252525" lineHeight="1.56">
              With over a year of dedicated experience in frontend development,
              I specialize in crafting intuitive, visually appealing, and
              responsive user interfaces. My expertise lies in designing and
              implementing elegant solutions that enhance user experiences while
              ensuring seamless functionality across various platforms and
              devices. I have honed my skills in leveraging modern frameworks
              like Next.js and React.js to build dynamic, high-performance web
              applications that align with the evolving demands of the digital
              landscape. With a strong focus on innovation and user-centric
              design, I am committed to delivering high-quality solutions that
              drive engagement and efficiency
            </Text>
          </Flex>
          <Flex
            direction="column"
            w={{ base: "full", md: "70%" }}
            gap="12px"
            pt="15px"
          >
            {SKILLS.map((data, i) => {
              return (
                <Flex direction="column" key={i}>
                  <Text fontSize="16px" color="#000" fontWeight="700">
                    {data.title}
                  </Text>
                  <Text
                    as="i"
                    fontSize="16px"
                    color="#252525"
                    lineHeight="1.56"
                  >
                    {data.subTitle}
                  </Text>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
      <Divider border="soild 1px #e3e3e3" w="100%" />
      {/* Experience */}
      <Flex
        id="experience"
        direction="column"
        alignItems="center"
        w="100%"
        padding={{
          base: "0px 16px 0px 16px",
          md: "0px 60px 0px 60px",
          lg: "0px 15px ",
        }}
      >
        <Flex
          w="100%"
          maxW="1200px"
          justify="center"
          padding="15px 0px"
          gap="15px"
          direction={{ base: "column", md: "row" }}
        >
          <Flex direction="column" w={{ base: "full", md: "30%" }}>
            <Text fontSize="30px" fontWeight="600" color="#000">
              Experience<span style={{ color: "#3333ff" }}>.</span>
            </Text>
            <Text fontSize="16px" color="#252525" lineHeight="1.56">
              With over a year of dedicated service at GeekyBugs, I have
              fostered a positive work environment while continuously refining
              my skills. I have actively pursued opportunities for growth,
              engaging in training programs and certifications to expand my
              expertise and contribute effectively to the team.
            </Text>
          </Flex>
          <Flex
            direction="column"
            w={{ base: "full", md: "70%" }}
            gap="12px"
            pt="15px"
          >
            {EXPERIENCE.map((data, i) => {
              return (
                <Flex direction="column" key={i}>
                  <Text fontSize="16px" color="#000" fontWeight="700">
                    {data.position}
                  </Text>
                  <Text
                    fontSize="16px"
                    color="#252525"
                    lineHeight="1.56"
                    fontWeight="400"
                  >
                    {data.company}
                  </Text>
                  <Text fontSize="13px" color="#252525" lineHeight="1.56">
                    {data.duration}
                  </Text>
                  <Text
                    as="i"
                    fontSize="16px"
                    color="#252525"
                    lineHeight="1.56"
                  >
                    {data.description}
                  </Text>
                </Flex>
              );
            })}
            <UnorderedList spacing={3}>
              <ListItem>
                Collaborated with design teams to refine UI/UX flows and
                effectively communicate client requirements.
              </ListItem>
              <ListItem>
                Orchestrated old frontend view of applications into a
                pixel-perfect web app using modern frameworks React.js and
                Next.js.
              </ListItem>
              <ListItem>
                Collaborated with the backend team to design and integrate APIs
                with the frontend.
              </ListItem>
              <ListItem>
                Reviewing codes, debugging errors in legacy systems,
                implementing best practices, and ensuring optimized solutions.
              </ListItem>
            </UnorderedList>
          </Flex>
        </Flex>
      </Flex>
      <Divider border="soild 1px #e3e3e3" w="100%" />
      {/* Portfolio */}
      <Flex
        id="portfolio"
        direction="column"
        alignItems="center"
        w="100%"
        padding={{
          base: "0px 16px 0px 16px",
          md: "0px 60px 0px 60px",
          lg: "0px 15px ",
        }}
      >
        <Flex
          w="100%"
          maxW="1200px"
          justify="center"
          padding="15px 0px"
          gap="15px"
          direction={{ base: "column", md: "row" }}
        >
          <Flex direction="column" w={{ base: "full", md: "30%" }}>
            <Text fontSize="30px" fontWeight="600" color="#000">
              Portfolio<span style={{ color: "#3333ff" }}>.</span>
            </Text>
            <Text fontSize="16px" color="#252525" lineHeight="1.56">
              {` As an experienced frontend developer, I specialize in crafting dynamic user interfaces across a range of projects. Proficient in HTML, CSS, and JavaScript, I have consistently delivered polished frontend solutions that prioritize both aesthetics and functionality. With a portfolio showcasing responsive design and seamless integration with backend systems, I excel in creating user-centric experiences. My collaborative approach ensures alignment with project goals while adhering to industry best practices.`}
            </Text>
          </Flex>
          <Flex
            direction="column"
            w={{ base: "full", md: "70%" }}
            gap="12px"
            pt="15px"
          >
            {PORTFOLIOS.map((data, i) => {
              return (
                <Flex direction="column" key={i}>
                  <Link href={data.bioLink} target="_blank">
                    <Text
                      fontSize="16px"
                      color="#000"
                      fontWeight="700"
                      _hover={{ color: "#3333ff" }}
                    >
                      {data.title}
                    </Text>
                  </Link>
                  <Text
                    fontSize="16px"
                    color="#252525"
                    lineHeight="1.56"
                    fontWeight="400"
                  >
                    {data.stack}
                  </Text>

                  <Text
                    as="i"
                    fontSize="16px"
                    color="#252525"
                    lineHeight="1.56"
                  >
                    {data.description}
                  </Text>
                  <UnorderedList spacing={3}>
                    <ListItem>{data.about}</ListItem>
                  </UnorderedList>
                </Flex>
              );
            })}
          </Flex>
        </Flex>
      </Flex>
      <Divider border="soild 1px #e3e3e3" w="100%" />
      {/* Certificate */}
      <Flex
        id="certificate"
        direction="column"
        alignItems="center"
        w="100%"
        padding={{
          base: "0px 16px 0px 16px",
          md: "0px 60px 0px 60px",
          lg: "0px 15px ",
        }}
      >
        <Flex
          w="100%"
          maxW="1200px"
          justify="center"
          padding="15px 0px"
          gap="15px"
          direction={{ base: "column", md: "row" }}
        >
          <Flex direction="column" w={{ base: "full", md: "30%" }}>
            <Text fontSize="30px" fontWeight="600" color="#000">
              Certificate<span style={{ color: "#3333ff" }}>.</span>
            </Text>
          </Flex>
          <Flex
            direction="column"
            w={{ base: "full", md: "70%" }}
            gap="12px"
            pt="10px"
          >
            <Flex direction="column">
              <Text fontSize="16px" color="#000" fontWeight="700">
                ReactJS for Beginners{" "}
              </Text>
              <Text
                fontSize="16px"
                color="#252525"
                lineHeight="1.56"
                fontWeight="400"
              >
                Simplilearn
              </Text>
              <Text
                fontSize="14px"
                color="#252525"
                lineHeight="1.56"
                fontWeight="400"
              >
                Issue 15th Jan 2024
              </Text>
              <Text fontSize="14px" color="#252525" lineHeight="1.56">
                Certificate code : 4785390
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fontSize="16px" color="#000" fontWeight="700">
                Introduction to MERN Stack{" "}
              </Text>
              <Text
                fontSize="16px"
                color="#252525"
                lineHeight="1.56"
                fontWeight="400"
              >
                Simplilearn
              </Text>
              <Text
                fontSize="14px"
                color="#252525"
                lineHeight="1.56"
                fontWeight="400"
              >
                Issue 16th Jan 2024
              </Text>
              <Text fontSize="14px" color="#252525" lineHeight="1.56">
                Certificate code : 4786861
              </Text>
            </Flex>
            <Flex direction="column">
              <Text fontSize="16px" color="#000" fontWeight="700">
                Web Design & Development
              </Text>
              <Text
                fontSize="16px"
                color="#252525"
                lineHeight="1.56"
                fontWeight="400"
              >
                PSDF,Goverment of Punjab
              </Text>
              <Text
                fontSize="14px"
                color="#252525"
                lineHeight="1.56"
                fontWeight="400"
              >
                Issue April 30,2021
              </Text>
              <Text fontSize="14px" color="#252525" lineHeight="1.56">
                Regestration no: P061-S0321E-005589
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Divider border="soild 1px #e3e3e3" w="100%" />
    </>
  );
};

export default HomePage;
