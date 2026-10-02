import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "./Hero";
import { NetworkSection } from "./NetworkSection";
import { AudienceSplit } from "./AudienceSplit";
import { ProfessionalRoles } from "./ProfessionalRoles";
import { HowItWorks } from "./HowItWorks";
import { OperationSection } from "./OperationSection";
import { IntelligentService } from "./IntelligentService";
import { CooperativeSection } from "./CooperativeSection";
import { TrustSection } from "./TrustSection";
import { SocialFeedSection } from "./SocialFeedSection";
import { FinalCTA } from "./FinalCTA";

export function HomePage() {
  return <><Header /><main><Hero /><NetworkSection /><AudienceSplit /><ProfessionalRoles /><HowItWorks /><OperationSection /><IntelligentService /><CooperativeSection /><TrustSection /><SocialFeedSection /><FinalCTA /></main><Footer /></>;
}