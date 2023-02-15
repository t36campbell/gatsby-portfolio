import { SidebarItem } from './sidebar.model';

const linkDecoration = { textDecoration: 'underline' };
const linkStyles = 'text-3xl hover:text-dracula-dark-100';
const childStyles = 'text-xl hover:text-dracula-dark-100';

const postChildren: SidebarItem[] = [
  {
    activeStyles: linkDecoration,
    classNames: childStyles,
    text: 'Baking',
    to: '/blog/baking',
    child: true,
  },
  {
    activeStyles: linkDecoration,
    classNames: childStyles,
    text: 'Coding',
    to: '/blog/coding',
    child: true,
  },
  {
    activeStyles: linkDecoration,
    classNames: childStyles,
    text: 'Cooking',
    to: '/blog/cooking',
    child: true,
  },
];

const projectChildren: SidebarItem[] = [
  {
    activeStyles: linkDecoration,
    classNames: childStyles,
    text: 'Backend',
    to: '/projects/backend',
    child: true,
  },
  {
    activeStyles: linkDecoration,
    classNames: childStyles,
    text: 'Devops',
    to: '/projects/devops',
    child: true,
  },
  {
    activeStyles: linkDecoration,
    classNames: childStyles,
    text: 'Frontend',
    to: '/projects/frontend',
    child: true,
  },
];

const shopChildren: SidebarItem[] = [
  {
    activeStyles: linkDecoration,
    classNames: childStyles,
    text: 'Models',
    to: '/shop/models',
    child: true,
  },
  {
    activeStyles: linkDecoration,
    classNames: childStyles,
    text: 'Services',
    to: '/shop/services',
    child: true,
  },
  {
    activeStyles: linkDecoration,
    classNames: childStyles,
    text: 'Templates',
    to: '/shop/templates',
    child: true,
  },
];

export const sidebarItems: SidebarItem[] = [
  {
    activeStyles: linkDecoration,
    classNames: linkStyles,
    text: 'Home',
    to: '/',
    child: false,
  },
  {
    activeStyles: linkDecoration,
    classNames: linkStyles,
    text: 'Posts',
    to: '/blog/',
    child: false,
  },
  ...postChildren,
  {
    activeStyles: linkDecoration,
    classNames: linkStyles,
    text: 'Projects',
    to: '/projects/',
    child: false,
  },
  ...projectChildren,
  {
    activeStyles: linkDecoration,
    classNames: linkStyles,
    text: 'Shop',
    to: '/shop/',
    child: false,
  },
  ...shopChildren,
];
