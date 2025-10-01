export interface CardData {
  name: string;
  occasion: string;
  description: string;
  senderName: string;
}

export interface CardContent {
  page1: {
    greeting: string;
    imageUrl: string;
  };
  page2: {
    poem: string;
    accessories: string[];
  };
  borderStyle: string;
}