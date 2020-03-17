import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer SD0mTmAoUiceR8QlbAIisUWve2QQH-FmqHXtllgoLBzJNsapZl0Oxf36fpKR-RR3VMvzpVFGJkS8SUD_2eSOYh4K2rmVeeF_itEAIwHhOcmNuzpFNhQ3HfFNqdZsXnYx"
  }
});
