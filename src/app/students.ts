export interface IStudents {
  id: number;
  name: string;
  dept: string;
  regulation: string;
  contact: string;
  guest: number;
}

export interface IEvents {
  id: number;
  name: string;
  dept: string;
  date: string;
  invited: number;
  accepted: number;
}


export interface ILectures {
  id: number;
  names: string;
  name: string;
  date: string;
  reviews: number;
  total: number;
}


export interface IReviews{
  id: number;
  lecturername: string;
  reviewer: string;
  name: string;
  reviews: string;
  rating: number;
}

