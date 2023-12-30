import { SidebarItem } from './sidebar.model';

const textColor = 'hover:text-dracula-purple-300';
const transitionStyles = 'transition-all ease-in-out duration-600';
const activeStyles =
  'text-dracula-purple-300 -ml-4 border-l-4 border-dracula-purple-400 z-100000';
const childStyles = `${transitionStyles} text-lg ${textColor} -ml-4 border-l-4 border-transparent hover:border-dracula-purple-400 z-100000`;
const linkStyles = `${transitionStyles} text-2xl ${textColor}`;

const postChildren: SidebarItem[] = [
  {
    activeStyles,
    classNames: childStyles,
    text: 'Baking',
    to: '/blog/baking',
    child: true,
  },
  {
    activeStyles,
    classNames: childStyles,
    text: 'Bread',
    to: '/blog/bread',
    child: true,
  },
  {
    activeStyles,
    classNames: childStyles,
    text: 'Cooking',
    to: '/blog/cooking',
    child: true,
  },
  {
    activeStyles,
    classNames: childStyles,
    text: 'Dev',
    to: '/blog/dev',
    child: true,
  },
  {
    activeStyles,
    classNames: childStyles,
    text: 'Fermentation',
    to: '/blog/fermentation',
    child: true,
  },
];

const projectChildren: SidebarItem[] = [
  {
    activeStyles,
    classNames: childStyles,
    text: 'Backend',
    to: '/projects/backend',
    child: true,
  },
  {
    activeStyles,
    classNames: childStyles,
    text: 'DevOps',
    to: '/projects/devops',
    child: true,
  },
  {
    activeStyles,
    classNames: childStyles,
    text: 'Frontend',
    to: '/projects/frontend',
    child: true,
  },
];

const shopChildren: SidebarItem[] = [
  {
    activeStyles,
    classNames: childStyles,
    text: 'Models',
    to: '/shop/models',
    child: true,
  },
  {
    activeStyles,
    classNames: childStyles,
    text: 'Services',
    to: '/shop/services',
    child: true,
  },
  {
    activeStyles,
    classNames: childStyles,
    text: 'Templates',
    to: '/shop/templates',
    child: true,
  },
];

export const sidebarItems: SidebarItem[] = [
  {
    activeStyles: 'text-dracula-purple-300',
    classNames: linkStyles,
    text: 'Home',
    to: '/',
    children: [],
  },
  {
    activeStyles: 'text-dracula-purple-300',
    classNames: linkStyles,
    text: 'Posts',
    to: '/blog/',
    children: postChildren,
  },
  {
    activeStyles: 'text-dracula-purple-300',
    classNames: linkStyles,
    text: 'Projects',
    to: '/projects/',
    children: projectChildren,
  },
  {
    activeStyles: 'text-dracula-purple-300',
    classNames: linkStyles,
    text: 'Shop',
    to: '/shop/',
    children: shopChildren,
  },
];
