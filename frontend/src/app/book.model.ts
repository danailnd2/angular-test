export interface Book {
  title: string;
  author: string;
  pageDetails: {
    numberOfPages: number;
    hasPicture: boolean;
  };
}
