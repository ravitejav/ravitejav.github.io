export interface Project {
    projectName: string;
    desc: string;
    url: string;
    technologies: Array<string>;
}

export interface Projects {
    personalProjects: Array<Project>;
}