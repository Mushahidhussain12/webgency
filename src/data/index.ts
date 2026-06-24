import { First, Second, Third, Fourth, Fifth } from '@/icons/ApproachIcons';

export const NAV_ITEMS = [
  {
    title: 'Main',
    href: 'main',
  },
  {
    title: 'About',
    href: 'about',
  },
  {
    title: 'Services',
    href: 'services',
  },
  {
    title: 'Approach',
    href: 'approach',
  },
  {
    title: 'Contact',
    href: 'contact',
  },
];

export const CARDS = [
  {
    title: 'Design',
    description:
      'We craft stunning user interfaces, cohesive brand identities, and intuitive user experiences. From wireframes to pixel-perfect prototypes, our design process ensures your product looks premium and feels effortless to use.',
    services: [
      ['Web app', 'Branding'],
      ['Mobile app', 'Logo'],
    ],
    number: '01.',
    classes: '',
  },
  {
    title: 'Fullstack development',
    description:
      'We build robust web applications end-to-end using modern frameworks like Next.js, React, and Node.js. From database architecture to REST/GraphQL APIs to responsive frontends, we handle the full stack so you can focus on growing your business.',
    services: [
      ['Online shop', 'Web application'],
      ['CMS', 'API Development'],
    ],
    number: '02.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Mobile development',
    description:
      'We develop performant cross-platform mobile applications using Flutter and React Native. With native-like performance, push notifications, offline support, and smooth animations, your app will feel right at home on both iOS and Android.',
    services: [['Android', 'IOS']],
    number: '03.',
    classes: 'border-t border-gray-1/50',
  },
];

export const APPROACH_CARDS = [
  {
    icon: First,
    title: 'Consultation',
    description:
      "We listen carefully to the customer's wishes and ideas about the project. Then we share our vision and, based on this exchange, come to a common agreement.",
  },
  {
    icon: Second,
    title: 'Joint review',
    description:
      'Then we start creating the design. After completion, we conduct a joint review, where the customer, if desired, can make changes.',
  },
  {
    icon: Third,
    title: 'Development',
    description: 'After the design is approved, we proceed to the actual development of the product.',
  },
  {
    icon: Fourth,
    title: 'Testing',
    description:
      'Once the development is complete, we thoroughly test each component of the product. Then we invite the customer for user testing.',
  },
  {
    icon: Fifth,
    title: 'Final result',
    description:
      'After thorough testing, we deploy your product to production, set up monitoring, and hand over complete documentation. We provide ongoing support to ensure everything runs smoothly, and we\'re always available for future iterations and improvements.',
  },
];

export const RADIO_FIELDS = [
  {
    title: 'What type of services you want?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Design/Branding', value: 'design/branding' },
      { name: 'Web Development', value: 'web-dev' },
      { name: 'Mobile Development', value: 'mobile-dev' },
      { name: 'All of the above', value: 'all-types' },
      { name: 'Other', value: 'other-service' },
    ],
    formKey: '_service',
  },
  {
    title: 'What is your budget category?',
    classes: '',
    radioArray: [
      { name: '$2000 - $4000', value: '2-4' },
      { name: '$4000 - $8000', value: '4-8' },
      { name: '$8000 - $10000', value: '8-10' },
      { name: '$10000', value: '10+' },
    ],
    formKey: '_budget',
  },
  {
    title: 'Approximately how many pages will your project have?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Less than 5', value: '<5' },
      { name: '6-10', value: '6-10' },
      { name: '11-20', value: '11-20' },
      { name: '20+', value: '20+' },
    ],
    formKey: '_pages',
  },
  {
    title: 'How quickly do you need the project?',
    classes: '',
    radioArray: [
      { name: 'As fast as possible', value: 'max-fast' },
      { name: 'High priority ', value: 'high-prio ' },
      { name: 'Regular time', value: 'regular' },
      { name: 'Take your time ', value: 'take-your-time' },
    ],
    formKey: '_quickness',
  },
];

export const INPUT_FIELDS = [
  { label: 'Your name', name: 'first', classes: 'inline-block !w-[calc(50%-2vw)] mr-[4vw]', required: true },
  { label: 'Phone', name: 'phone', classes: 'inline-block !w-[calc(50%-2vw)]', type: 'number', required: true },
  { label: 'Email', name: 'email', classes: '', type: 'email' },
  { label: 'Company name', name: 'company', classes: '', required: true },
  { label: 'Company website', name: 'websiteUrl', classes: '' },
];

export const BOOK_FORM_DEFAULT_STATE = {
  _service: null,
  _budget: null,
  _pages: null,
  _quickness: null,

  first: '',
  phone: '',
  email: '',
  company: '',
  websiteUrl: '',
  message: '',
};
