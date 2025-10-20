import { AccommodationSection } from "@/components/AccommodationSection";
import { EventInfoSection } from "@/components/EventInfoSection";
import { FloorPlanSection } from "@/components/FloorPlanSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { MapSection } from "@/components/MapSection";
import React from "react";
import { RegistrationSection } from "@/components/RegistrationSection";
import { SocialSection } from "@/components/SocialSection";
import { TopicsSection } from "@/components/TopicsSection";
import { VenueSection } from "@/components/VenueSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <EventInfoSection />
      <TopicsSection />
      <VenueSection />
      <MapSection />
      <AccommodationSection />
      <FloorPlanSection />
      <SocialSection />
      <RegistrationSection />
      <Footer />
    </main>
  );
}
