import Contact from "./Contact.jsx";
export const metadata = {
  title: 'Contact Us - SkillzRevo',
  description:
    'For any questions, concerns, or assistance related to our services, policies, or the delivery of your certificate, please reach out to us using the following',
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
  alternates: {
    canonical: 'https://skillzrevo.com/contact-us/',
  },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    siteName: 'SkillzRevo',
    url: 'https://skillzrevo.com/contact-us/',
    title: 'Contact Us - SkillzRevo',
    description:
      'For any questions, concerns, or assistance related to our services, policies, or the delivery of your certificate, please reach out to us using the following',
    images: [
      {
        url: '/logo.webp',
        width: 512,
        height: 512,
        alt: 'Contact Us',
        type: 'image/webp',
      },
    ],
  },
  
};

export default function Page(){
    return(
        <>
       <Contact/>
       </>
    )
}