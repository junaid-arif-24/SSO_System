import Databases from '../assets/Component.png';
import Environment from '../assets/HardDrive.png';
import ServiceBoard from '../assets/hello.png';
import BuilderCenter from '../assets/Layers.png';
import LogError from '../assets/Menu.png';
import Monitoring from '../assets/monitoring.png';
import Security from '../assets/security.png';
import Clusters from '../assets/Vector1.png';
import Workflow from '../assets/Vector2.png';
import WebHooks from '../assets/Vector3.png';
import AmazonImage from '../assets/amazon.svg';
import GCP from '../assets/google.svg';
import GithubImage from '../assets/github.svg';
import GitlabImage from '../assets/gitlab.svg';
import BBImage from '../assets/bitbucket.svg';
import MongoDBImage from '../assets/mongodb.svg';
import PostgresqlImage from '../assets/Postgresql.svg';
import RedisImage from '../assets/redis.svg';
export const menuData = [
  {
    name: 'Builder Center',
    link: BuilderCenter,
  },
  {
    name: 'Service Board',
    link: ServiceBoard,
  },
  {
    name: 'Clusters',
    link: Clusters,
  },
  {
    name: 'Databases',
    link: Databases,
  },
  {
    name: 'Environment',
    link: Environment,
  },
  {
    name: 'Workflow',
    link: Workflow,
  },
  {
    name: 'Monitoring',
    link: Monitoring,
  },
  {
    name: 'Security',
    link: Security,
  },
  {
    name: 'Web Hooks',
    link: WebHooks,
  },
  {
    name: 'Log Error',
    link: LogError,
  },
];

export const steps = [
  {
    id: Math.random(),
    label: 'Step 1',
    title: 'Connect to Cloud',
    services: [
      {
        _id: Math.random(),
        name: 'AWS',
        imgLink: AmazonImage,
        bg: '#FFDFA2',
      },
      {
        _id: Math.random(),
        name: 'GCP',
        imgLink: GCP,
        bg: '#4192FF66',
      },
    ],
  },
  {
    id: Math.random(),
    label: 'Step 2',
    title: 'Connect to Source Code',
    services: [
      {
        _id: Math.random(),
        name: 'Github',
        imgLink: GithubImage,
        bg: '#C0C0C0',
      },
      {
        _id: Math.random(),
        name: 'Gitlab',
        imgLink: GitlabImage,
        bg: '#F7755687',
      },
      {
        _id: Math.random(),
        name: 'Bitbucket',
        imgLink: BBImage,
        bg: '#4192FF66',
      },
    ],
  },
  {
    id: Math.random(),
    label: 'Step 3',
    title: 'Connect to DataSource',
    services: [
      {
        _id: Math.random(),
        name: 'MongoDB',
        imgLink: MongoDBImage,
        bg: '#34A853',
      },
      {
        _id: Math.random(),
        name: 'RedisDB',
        imgLink: RedisImage,
        bg: '#F7755687',
      },
      {
        _id: Math.random(),
        name: 'Postgresql',
        imgLink: PostgresqlImage,
        bg: '#64BAFF ',
      },
    ],
  },
];
