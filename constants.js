const devEnv = process.env.NODE_ENV !== 'production';
const localServer = 'http://localhost:3000';
const remoteServer = 'https://jackyly.ca';

export const serverUrl = devEnv ? localServer : remoteServer;

export const email = 'shamazsaeed332@gmail.com';
export const contactUrl = 'mailto:' + email;
export const gitHubUrl = 'https://github.com/shamaz332';
export const projectsUrl = gitHubUrl + '?tab=repositories';
export const linkedinUrl = 'https://www.linkedin.com/in/shamaz-saeed';

const localResume = '/resume/ShamazResume.pdf';
const gDocsResume = 'https://docs.google.com/viewer?url=' + remoteServer + localResume + '&embedded=true';
export const resumeUrl = devEnv ? localResume : gDocsResume;

export const pageAuthor = 'Shamaz Saeed';
export const pageTitle = pageAuthor + ' | Frontend Dev';
export const pageDesc = 'Hi there! I am Shamaz Saeed, a Frontend Developer at NSTOP Group AB. Check out my projects on GitHub! - @shamaz332';
export const pageTheme = '#1A3A59';

export const avatarUrl = '/img/profile.png';
export const faviconUrl = '/favicon.ico';
export const imageUrl = remoteServer + '/img/coverr.png';