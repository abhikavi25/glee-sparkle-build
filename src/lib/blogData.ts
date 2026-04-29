import maltoImg from "@/assets/blog-maltodextrin.jpg";
import milletsImg from "@/assets/blog-millets.jpg";
import kidImg from "@/assets/blog-kid-mug.jpg";

export type BlogCategory =
  | "Nutrition" | "Millets" | "Recipes" | "Clean Eating" | "For Parents";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const categories: BlogCategory[] = [
  "Nutrition", "Millets", "Recipes", "Clean Eating", "For Parents",
];

export const featuredPost: BlogPost = {
  slug: "maltodextrin-problem",
  title: "The Maltodextrin Problem: Why Your Kid's \"Health\" Drink Might Not Be",
  excerpt:
    "Every parent wants the best for their child. So when a health drink says \"no added sugar,\" it feels like a win. But there's a sneaky ingredient hiding in plain sight on the label — and it's quietly undoing all the good.",
  category: "Clean Eating",
  readTime: "5 min read",
  image: maltoImg,
  featured: true,
};

export const posts: BlogPost[] = [
  {
    slug: "millets-og-superfood",
    title: "Why Millets Are the OG Superfood Indian Kids Need Right Now",
    excerpt:
      "Before kale smoothies and chia seeds went viral, Indian grandmothers were quietly feeding their kids the most powerful grains on earth.",
    category: "Millets",
    readTime: "4 min read",
    image: milletsImg,
  },
  {
    slug: "decoding-the-label",
    title: "Decoding the Ingredient Label: 5 Things to Check Before Buying Your Kid's Health Drink",
    excerpt:
      "If you've never Googled \"what is maltodextrin\" at 11pm in a supermarket aisle, you're either very trusting — or you haven't started yet.",
    category: "For Parents",
    readTime: "6 min read",
    image: maltoImg,
  },
  {
    slug: "millet-recipes-kids-eat",
    title: "3 Millet Recipes Your Kids Will Actually Eat (No, Really)",
    excerpt:
      "We asked 50 Glee parents for their favourite kid-approved millet recipes. These three won by a landslide.",
    category: "Recipes",
    readTime: "3 min read",
    image: kidImg,
  },
  {
    slug: "refined-sugar-vs-natural",
    title: "Refined Sugar vs Natural Sweeteners: What's the Real Difference for Growing Kids?",
    excerpt:
      "Not all sweetness is the same. Here's a plain-language breakdown of what refined sugar does to kids' bodies — and what actually works better.",
    category: "Nutrition",
    readTime: "5 min read",
    image: milletsImg,
  },
  {
    slug: "no-junk-30-day-challenge",
    title: "The \"No Junk\" Challenge: What Happens When Kids Eat Clean for 30 Days",
    excerpt:
      "One Glee family decided to document their 30-day no-refined-sugar experiment. The results surprised even us.",
    category: "Clean Eating",
    readTime: "7 min read",
    image: kidImg,
  },
  {
    slug: "ragi-jowar-bajra-guide",
    title: "Ragi, Jowar, Bajra: Your Complete Guide to India's Power Millets",
    excerpt:
      "Three millets. Three powerhouses. One guide that explains everything in words a 10-year-old (and their parent) can understand.",
    category: "Millets",
    readTime: "4 min read",
    image: milletsImg,
  },
];
