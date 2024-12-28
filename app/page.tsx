import Image from 'next/image'
import { Nav } from '../components/ui/Nav'
import { motion } from "framer-motion";
import { Orbitron } from 'next/font/google'
import { Logo } from '../features/home/Logo';
import { Description } from '../features/home/Description';
import {Home} from '../features/home'
const orbitron = Orbitron({ subsets: ['latin'] })


export default function index() {
  return (
    <Home/>
  )
}
