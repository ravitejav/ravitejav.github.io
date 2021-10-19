export interface ExperienceModal {
    companyName: string;
    from?: Date;
    to?: Date;
    work: Array<IndependentExperiences>;
}

export interface IndependentExperiences {
    from: Date;
    to: Date;
    position: string;
    workExperience: Array<string> | string;
}