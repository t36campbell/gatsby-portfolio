import { SidebarItem } from './sidebar.model';

const transitionStyles = 'transition-all ease-in-out duration-600';
const activeStyles = `${transitionStyles} text-lg text-dracula-purple-300 -ml-4 border-l-4 border-dracula-purple-400`;
const childStyles = `${transitionStyles} text-lg hover:text-dracula-purple-300 -ml-4 border-l-4 border-transparent hover:border-dracula-purple-400`;

const postChildren: SidebarItem[] = [
  {
    text: 'Baking',
    to: '/blog/baking',
    child: true,
  },
  {
    text: 'Bread',
    to: '/blog/bread',
    child: true,
  },
  {
    text: 'Cooking',
    to: '/blog/cooking',
    child: true,
  },
  {
    text: 'Dev',
    to: '/blog/dev',
    child: true,
  },
  {
    text: 'Fermentation',
    to: '/blog/fermentation',
    child: true,
  },
];

const shopChildren: SidebarItem[] = [
  {
    text: 'Models',
    to: '/shop/models',
    child: true,
  },
  {
    text: 'Services',
    to: '/shop/services',
    child: true,
  },
  {
    text: 'Templates',
    to: '/shop/templates',
    child: true,
  },
];

export const sidebarItems: SidebarItem[] = [
  {
    text: 'Home',
    to: '/',
    children: [],
  },
  {
    text: 'Posts',
    to: '/blog/',
    children: postChildren,
  },
  {
    text: 'Projects',
    to: '/projects/',
  },
  {
    text: 'Shop',
    to: '/shop/',
    children: shopChildren,
  },
];

interface GetPropsProps {
  isPartiallyCurrent: boolean;
}

export const partiallyActive = ({ isPartiallyCurrent }: GetPropsProps) => {
  return isPartiallyCurrent
    ? { className: activeStyles }
    : { className: `w-full ${childStyles}` };
};
