import React, { FC } from 'react';
import { GatsbyImage, GatsbyImageProps } from 'gatsby-plugin-image';

interface TileProps {
  frontmatter: {
    path: string;
    category: string;
    title: string;
    published: string;
    image: string;
  };
  image?: GatsbyImageProps;
}
const borderStyles =
  'border border-transparent hover:border-dracula-darker-500';
const transitionStyles = 'transition-all ease-in-out duration-600';
const styles = `group/card bg-dracula-darker rounded-lg shadow-md ${transitionStyles} ${borderStyles}`;

const Tile: FC<TileProps> = ({ frontmatter, image }) => (
  <div className={styles}>
    {image ? (
      <GatsbyImage
        className={`rounded-t-lg opacity-60 group-hover/card:opacity-100 ${transitionStyles}`}
        {...image}
      />
    ) : null}
    <div className='p-6'>
      <h1 className={`group-hover/card:underline ${transitionStyles}`}>
        {frontmatter.title}
      </h1>
      <h3>{frontmatter.published}</h3>
    </div>
  </div>
);

export default Tile;
