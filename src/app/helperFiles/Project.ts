export interface Project{
  id: number;
  projectName: string;
  projectCategory: string;
  projectDescription: string;
  thumbnailLink: string;
  projectContactLink: string;
  isNew?: boolean;
}
