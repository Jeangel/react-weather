interface SearchPhotosResultItem {
  id: string;
  width: number;
  height: number;
  user: {
    id: string;
    username: string;
    name: string;
  };
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

export interface SearchPhotosResponse {
  total: number;
  total_pages: number;
  results: SearchPhotosResultItem[];
}
