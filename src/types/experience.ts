export interface Experience {
  id: string;
  company: string;
  role: string;
  location?: string;
  employmentType?: string;
  startDate: string;
  endDate?: string;
  description?: string;
  highlights?: string[];
  technologies?: string[];
}
