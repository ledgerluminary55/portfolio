export type section = {
  title:string, 
  desc:string[]
}
export type ServiceType = {
  index:number,
  title:string,
  desc:string[],
  list: section[]
}
export type TechnologyType = {
  title:string,
  desc:string[]
}
export type whyChooseType = {
  title:string,
  desc:string[]
}
export type teamType = {
  title:string,
  role:string,
  techRole: string,
  desc:string[],
  img:string
}
export type projectType = {
  title:string,
  desc:string[],
  img: string,
  repo:string,
  live:string,
  tags:string[]
}
export type navType = {
  title:string,
  link:string
}
export type Direction = 'up' | 'right' | 'down' | 'left';
export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};
export type CurrentSlideData = {
  data: ServiceType;
  index: number;
};