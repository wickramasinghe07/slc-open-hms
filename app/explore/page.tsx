"use client";
import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import HotelRooms from "@/components/explore/HotelRooms"; // Importing HotelRooms component from the 'explore' folder
import SearchBar from "@/components/explore/SearchBar"; // Importing SearchBar component from the 'explore' folder
import HeroSection from "@/components/explore/HeroSection"; // Importing HeroSection component from the 'explore' folder

/**
 * ExploreScreen component represents the explore screen of the website.
 * It includes sections like Hero section, Search bar, and Hotel rooms.
 */

const ExploreScreen = ({
  searchParams,
}: {
  searchParams?: {
    query: string; //declear the query as a prop related to search bar query
    roomType: string; //declear the value as a prop related to drop down list value
    beds: string;
    guest: string;
    //page: number;
  };
}) => {
  const query = searchParams?.query || " "; //destructuring the query from searchParams
  const roomType = searchParams?.roomType || ""; //destructuring the value from searchParams
  const bedSizes = searchParams?.beds || " "; //destructuring the bedSize from searchParams
  const guest = searchParams?.guest || " "; //destructuring the guest from searchParams

  console.log("Search Params:", searchParams);
  console.log("query:", query);
  console.log("roomType:", roomType);
  console.log("bedSizes:", bedSizes);
  console.log("guest:", guest);
  return (
    <>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#0C111F",
          color: "white",
          height: "600px",
          width: "100%",
          display: "inline-block",
        }}
      >
        <Container>
          <HeroSection />
        </Container>
      </Box>

      {/* Search Bar Section */}
      <Box
        sx={{
          backgroundColor: "#FFF",
          width: "100%",
        }}
      >
        <Container>
          <SearchBar />
        </Container>
      </Box>

      {/* Hotel Rooms Section */}
      <Box sx={{ backgroundColor: "#FFF", padding: "40px 0", width: "100%" }}>
        <Container>
          <HotelRooms
            query={query}
            roomType={roomType}
            //page={page}
            bedSizes={bedSizes}
            guest={guest}
          />
          {/* pass the query to Hotel room component*/}
        </Container>
      </Box>
    </>
  );
};

export default ExploreScreen;
