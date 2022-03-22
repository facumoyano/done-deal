import { Box, Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import ImgHeader from "../assets/header2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const HeaderAbout = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <Box
            as="header"
            backgroundImage={`linear-gradient(to bottom, rgb(0 0 0 / .2), rgb(0 0 0 / .1)), url(${ImgHeader})`}
            backgroundPosition="top"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            maxWidth="100%"
            width="100%"
            marginTop={{ base: "4rem", md: "5rem" }}
        >
            <Box
                bg="rgba(255,255,255, 0.85)"
                color="color.negro"
                height="30vh"
                display="flex"
                justifyContent="center"
                alignItems="center"
                width={{ base: "100%", md: "40%" }}
                margin="0 auto"
            >
                <Heading
                    as="h1"
                    color="color.primario"
                    textAlign="center"
                    fontWeight="700"
                    fontSize={{ base: "4xl", md: "5xl" }}
                    data-aos="fade-left"
                    data-aos-duration="1500"
                >
                    Sobre nosotros
                </Heading>
            </Box>
        </Box>
    );
};

export default HeaderAbout;
