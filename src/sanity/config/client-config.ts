import { ClientPerspective } from "next-sanity";
import dotenv from 'dotenv';
dotenv.config();


const config = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
	dataset: "production",
	apiVersion: "2023-03-09",
	useCdn: false,
	token: process.env.SANITY_ACCESS_TOKEN as string,
	perspective: 'published' as ClientPerspective,
};

export default config;