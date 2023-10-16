export interface Featured {
    id: number;
    address: string;
    thumbnails: string[];
    email?: string;
    contactLink: string;
    description: string;
    isNew?: boolean;
}
