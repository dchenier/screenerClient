type Tag = string;

export interface UserFacingProgram {
  guid: string;
  title: string;
  description: string;
  details: string;
  externalLink: string;
  created: number;
  tags: Tag[];
}
