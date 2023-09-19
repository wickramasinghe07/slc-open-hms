import React from 'react'
import { Box, Container } from "@mui/material";
import HeroBanner from '@/components/guestRoomDetails/HeroBanner';
import AboutRoom from '@/components/guestRoomDetails/AboutRoom';
import Facilities from '@/components/guestRoomDetails/Facilities';
import AdditionalInfo from '@/components/guestRoomDetails/AdditionalInfo';
import SimilarRooms from '@/components/guestRoomDetails/SimilarRooms';
import Gallery from '@/components/guestRoomDetails/Gallery';

/**
 * RoomDetailsScreen component represents the each hotel room details of the website.
 * It includes sections like Hero banner, About room, Facilities, Gallery, Additional Info, and Similar Rooms.
 */

/* Style class for the box component of each section component */
const sectionStyles = {
  backgroundColor: "#FFF",
  padding: "40px 0",
  width: "100%",
};

const RoomDetailsScreen = () => {
  return (
    <>
      <Box sx={sectionStyles}>
        <Container>
          <HeroBanner />
        </Container>
      </Box>

      <Box sx={sectionStyles}>
        <Container>
          <AboutRoom />
        </Container>
      </Box>

      <Box sx={sectionStyles}>
        <Container>
          <Facilities />
        </Container>
      </Box>

      <Box sx={sectionStyles}>
        <Container>
          <Gallery />
        </Container>
      </Box>

      <Box sx={sectionStyles}>
        <Container>
          <AdditionalInfo />
        </Container>
      </Box>

      <Box sx={sectionStyles}>
        <Container>
          <SimilarRooms />
        </Container>
      </Box>
    </>
  );
}

export default RoomDetailsScreen
