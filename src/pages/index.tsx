import { motion } from 'framer-motion';
import { GetStaticProps } from 'next';
import React from 'react';

import { getHomePage, parseHomepage } from '@/lib/api';
import Seo from '@/components/Seo';

interface IHomeProps {
  homePage: HomepageViewModel | null;
}

const Wrapper: React.FC = ({ children, ...rest }) => (
  <motion.div
    className="relative flex items-center bg-black"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    {...rest}
  >
    {children}
  </motion.div>
);

const BackgroundImage: React.FC<{ image: string }> = ({ image, ...rest }) => {
  const variants: [number, number][] = [
    // width : aspect ratio
    [400, 1],
    [800, 1],
    [1200, 1],
    [1600, 1],
    [2000, 1],
  ];

  const dv = variants[Math.floor(variants.length / 2)];

  return (
    <picture>
      <source sizes="100vw" srcSet={variants.map((v) => `${getUrl(v)} ${v[0]}w`).join(', ')} />
      <img
        className="absolute top-0 left-0 w-full h-full object-cover object-center z-0"
        sizes="100vw"
        src={getUrl(dv)}
        alt=""
        {...rest}
      />
    </picture>
  );

  function getUrl([width, ratio]: [number, number]): string {
    return `${image}?w=${width}&h=${width * ratio}&fit=crop&auto=format`;
  }
};

const Content: React.FC = () => (
  <div className="relative site-wide mb-32 z-10">
    <div className="flex flex-col items-start justify-start w-auto">
      <h1 className="font-heading text-5xl leading-tight mb-4">
        <span className="bg-white">Richard Shackleton</span>
      </h1>
      <h2 className="font-heading text-2xl leading-tight">
        <span className="bg-white">Full-Stack Web Developer</span>
      </h2>
    </div>
  </div>
);

const Home: React.FC<IHomeProps> = ({ homePage }) => {
  if (!homePage) {
    return null;
  }

  return (
    <Wrapper data-kontent-item-id={homePage.id}>
      <Seo {...homePage.seo} />
      <BackgroundImage image={homePage.image} data-kontent-element-codename="background_image" />
      <Content />
    </Wrapper>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<IHomeProps> = async ({ preview = false }) => {
  const homePageResponse = await getHomePage(preview);
  const homePage = parseHomepage(homePageResponse.firstItem);

  return {
    props: { homePage, preview },
    // revalidate once per 5 minutes
    revalidate: 300,
  };
};
