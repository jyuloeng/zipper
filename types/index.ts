export type StackParamList = {
  Profile: {
    userId: string;
  };
  Studio: {
    userId: string;
    otherParam: string;
  };
};

export type HomeCardProps = {
  id: string | number;
  avatar: string;
  author: string;
  image: string;
  caption?: string;
  content?: string;
  like_count?: number;
  like_authors?: Array<{
    id: string | number;
    nickname: string;
    image: string;
  }>;
  comment_count?: number;
  comments?: Array<{
    id: string | number;
    author: string;
    content: string;
  }>;
  tag?: {
    id: string | number;
    name: string;
  };
  location?: {
    id: string | number;
    name: string;
  };
  gmt_create: number;
};
