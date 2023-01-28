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
  },
  {
    activeStyles: linkDecoration,
    classNames: childStyles,
    text: 'Coding',
    to: '/blog/coding',
  },
  {
    activeStyles: linkDecoration,
    classNames: childStyles,
    text: 'Cooking',
    to: '/blog/cooking',
  },
];

const projectChildren: SidebarItem[] = [
  {
    activeStyles: linkDecoration,
    classNames: childStyles,
    text: 'Backend',
    to: '/projects/backend',
  },
  {
    activeStyles: linkDecoration,
    classNames: childStyles,
    text: 'Devops',
    to: '/projects/devops',
  },
  {
    activeStyles: linkDecoration,
    classNames: childStyles,
    text: 'Frontend',
    to: '/projects/frontend',
  },
];

const shopChildren: SidebarItem[] = [
  {
    activeStyles: linkDecoration,
    classNames: childStyles,
    text: 'Models',
    to: '/shop/models',
  },
  {
    activeStyles: linkDecoration,
    classNames: childStyles,
    text: 'Services',
    to: '/shop/services',
  },
  {
    activeStyles: linkDecoration,
    classNames: childStyles,
    text: 'Templates',
    to: '/shop/templates',
  },
];

export const sidebarItems: SidebarItem[] = [
  {
    activeStyles: linkDecoration,
    classNames: linkStyles,
    text: 'Home',
    to: '/',
  },
  {
    activeStyles: linkDecoration,
    classNames: linkStyles,
    children: postChildren,
    text: 'Posts',
    to: '/blog/',
  },
  {
    activeStyles: linkDecoration,
    classNames: linkStyles,
    children: projectChildren,
    text: 'Projects',
    to: '/projects/',
  },
  {
    activeStyles: linkDecoration,
    classNames: linkStyles,
    children: shopChildren,
    text: 'Shop',
    to: '/shop/',
  },
];
