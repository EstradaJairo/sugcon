interface Partners {
  label: string;
  src: string;
  width: number;
  height: number;
}

interface Event {
  srcTitle: string;
  location: string;
  year: number;
  locSrc: string;
  src: string;
  link: string;
}

export interface Navbar {
  id: number;
  logo: string;
  text: string;
  partners: Partners[];
}

export interface Navigation {
  id: number;
  title: string;
  link: string;
}

export interface Banner {
  id: number;
  src: string;
  titleLabel: string;
  titleLabelBottom: string;
  title: string;
  desc: string;
  tag: string;
  presented: string;
}

export interface JoinCommunity {
  id: number;
  src: string;
  titleLabel: string;
  titleDesc: string;
  tag: string;
  date: string;
}

export interface Sugcon {
  id: number;
  src: string;
  titleLabel: string;
  title: string;
  desc: string;
  tag: string;
}

export interface SugconCommunity {
  id: number;
  src: string;
  titleLabel: string;
  titleDesc: string;
  welcomePhrase: [];
  title: string;
}

export interface Events {
  id: number;
  title: string;
  eventSrc: string;
  upcomingEvent: string;
  tag: string;
  location: string;
  titleLabel: string;
  waitlistLabel: string;
  bottomDesc: string;
  events: Event[];
}

export interface Footer {
  id: number;
  srcLogo: string;
  label: string;
  copyright: string;
}
