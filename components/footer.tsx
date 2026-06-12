"use client";

import Link from "next/link";
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  Linkedin,
  Github,
} from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { motion } from "framer-motion";
import Logo from "./logo";
import useDisableRightClick from "./useDisableRightClick"; // Adjust the import path as necessary

export default function Footer() {
  useDisableRightClick(); // Apply the hook to disable right-click on images

  return (
    <motion.footer
      className="bg-background border-t border-border py-12 px-4 md:px-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-4">
            {/* <Logo /> */}
            <Link
              href="/"
              className="font-old-london text-2xl font-bold inline-block text-foreground"
            >
              EliteHomes
            </Link>
          </div>
          <p className="text-muted-foreground max-w-md mb-6 max-w-xs">
            Helping you find your dream home. Premium real estate services for
            luxury apartments and modern living spaces.
          </p>
          <div className="flex space-x-4 items-center">
            <motion.a
              href="https://www.instagram.com/alinumaan35/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </motion.a>
            {/* <motion.a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </motion.a> */}
            <motion.a
              href="https://www.linkedin.com/in/im-numaan-ali/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={20} />
              <span className="sr-only">Linkedin</span>
            </motion.a>
            <motion.a
              href="https://github.com/numaan750"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
              <span className="sr-only">Github</span>
            </motion.a>
            <ThemeToggle />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="section-title text-2xl mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/showcase"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Showcase
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="section-title text-2xl mb-4">Contact</h3>
          <ul className="space-y-2 text-muted-foreground">
            <h4 className="text-primary">Email</h4>
            <a href="mailto:alinumaan35@gmail.com">
              <li>alinumaan35@gmail.com</li>
            </a>
            {/* <li>Phone: +1 (555) 123-4567</li> */}
            <h4 className="text-primary">Location</h4>
            <li>lahore Pakistan</li>
          </ul>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border">
        <motion.p
          className="text-center text-muted-foreground text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()}{" "}
          <Link
            href="https://numaan-ali-portfolio.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary text-white transition-colors font-bold"
          >
            EliteHomes
          </Link>
          . Premium Apartments & Farm Houses. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
}
