  export interface Image {
    url: string;
  }

  export interface FullImage {
    url: string;
  }

  export interface Max {
    amount: number;
    unit: string;
    original_amount: number;
    boost_type: string;
    boost_amount: number;
  }

  export interface Commission {
    max: Max;
  }

  export interface Image2 {
    url: string;
  }

  export interface Category {
    image: Image2;
  }

  export interface Item {
    id: string;
    active: string;
    title: string;
    image: Image;
    description: string;
    full_image: FullImage;
    url: string;
    store_url: string;
    tracking: string;
    commission: Commission;
    category: Category;
    average_rating?: any;
    commissions: boolean[];
    offers: any[];
    promocodes: any[];
  }

  export interface RootObject {
    total: string;
    items: Item[];
  }
