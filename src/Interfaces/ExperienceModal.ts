export interface ExperienceModal {
    companyName: string;
    totalExperience: string;
    isCurrent?: boolean;
    imageUrl: string;
    desc: string;
    work: Array<IndependentExperiences>;
}

export interface IndependentExperiences {
    from: Date;
    to: Date;
    position: string;
    workExperience: Array<string> | string;
}