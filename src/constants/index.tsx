import { RadioTower } from "lucide-react";
import { GraduationCap } from "lucide-react";
import { CalendarX2 } from "lucide-react";
import { Music } from "lucide-react";
import { MicVocal } from "lucide-react";
import { Guitar } from "lucide-react";
export const navItems = [
  { label: "About", href: "#" },
  { label: "Events", href: "#" },
  { label: "Executive Team", href: "#" },
  { label: "Workshops", href: "#" },
  { label: "Radio", href: "#" },
  { label: "Sponsors", href: "#" },
  { label: "Gallery", href: "#" },
  { label: "Merch", href: "#" },
  { label: "Hire us!", href: "#" },
];

export const hostItems = [
  {
    label: "Radio",
    description:
      "Its your sound, on your stage, on Soundstage Off‑Stage. This CJSW segment is broadcast Calgary-wide from 10-11 am on Thursdays.",
    icon: <RadioTower />,
  },
  {
    label: "Workshops",
    description:
      "We teach weekly lessons on music design and performance, providing both students and faculty with opportunities to learn and refine musical skills.",
    icon: <GraduationCap />,
  },
  {
    label: "Music Night Out",
    description:
      "In addition to our regularly scheduled open mics, we organize group events such as Karaoke Nights and Jam Sessions.",
    icon: <MicVocal />,
  },
  {
    label: "Year End Festival",
    description:
      "This festival aims to celebrate local musical talent, promote student musicianship, foster community among artists, provide an immersive audience experience, and support our mission to create an inclusive and dynamic platform for Calgary’s vibrant music scene.",
    icon: <CalendarX2 />,
  },
  {
    label: "Open Mics!",
    description:
      "Our open mics attract audiences of 100+ people, estimated to be one of the largest open mics in Calgary.",
    icon: <Music />,
  },
  {
    label: "Gigs",
    description:
      "Whether it's a campus event, local venue, or community gathering, our gigs offer exposure and networking opportunities for spiring artists.",
    icon: <Guitar />,
  },
];
