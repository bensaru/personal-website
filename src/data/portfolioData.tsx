const filterKey = [
  { title: "show all", key: "*" },
  { title: "Blockchain", key: "blockchain" },
  { title: "game", key: "game" },
  { title: "web", key: "web" },
  { title: "Mobile", key: "mobile" }
];

const projectData = [
  {
    type: ["blockchain", "game", "web"],
    role: "Full Stack Web3 AI Engineer",
    skills: ["Rust", "React", "Node.JS", "AI", "Python"],
    imgUrl: "imgs/works/xeet.png",
    summary:
      "Developed backend and AI features powering the xeet.ai platform, focusing on reliability, scalability, and performance under real-world workloads.",
    siteUrl: "https://xeet.ai"
  },
  {
    type: ["blockchain", "web"],
    role: "Full Stack Web3 Developer",
    skills: ["Next.JS", "Node.JS", "MongoDB", "TypeScript", "Web3"],
    imgUrl: "imgs/works/pumpfun-evm.png",
    summary:
      "Fork pump.fun on EVM blockchain.",
    siteUrl: "https://pump.fun"
  },
  {
    type: ["blockchain", "game"],
    role: "Blockchain Developer",
    skills: ["Rust", "Anchor", "Solana", "Web3", "Casino"],
    imgUrl: "imgs/works/panda.png",
    summary:
      "Crash, Plinko, Dice, Mines, Roulette, Blackjack, Baccarat, and more.",
    siteUrl: "https://panda.co",
  },
  {
    type: ["blockchain"],
    role: "Solana Smart Contract Developer",
    skills: ["Rust", "Anchor", "Web3"],
    imgUrl: "imgs/works/pump.png",
    summary:
      "Built a Pump.fun competition bonding curve smart contract to enable fair token launches and price discovery.",
    siteUrl: "https://pump.science"
  },
  {
    type: ["blockchain", "game"],
    role: "Smart Contract/Web3 Developer",
    skills: ["Rust", "Anchor", "Solana", "Web3", "Next.JS", "Tailwind"],
    imgUrl: "imgs/works/goalpost.png",
    summary:
      "Poker platform on Solanan chain.",
    siteUrl: "https://goalpost.gg",
  },
  {
    type: ["blockchain", "web"],
    role: "Web3 | Full Stack Developer",
    skills: ["Web3", "CEX", "React", "Node.JS", ".Net", "C#"],
    imgUrl: "imgs/works/oxfx.png",
    summary:
      "Centralized Exchange Platform",
    siteUrl: "https://oxfx.com"
  },
  {
    type: ["blockchain", "game"],
    role: "Game Developer",
    skills: ["Solana", "Go", "Redis", "Prisma", "WebSocket", "PostgreSQL"],
    imgUrl: "imgs/works/pvplabs.png",
    summary:
      "A fast-paced, skill-based Slither multiplayer game where strategy, speed, and precision decide who becomes the biggest snake on the map.",
    siteUrl: "https://pvplabs.xyz"
  },
  {
    type: ["blockchain"],
    role: "Solana Developer",
    skills: ["Rust", "Solana", "Web3", "Next.JS", "Node.JS"],
    imgUrl: "imgs/works/BASC.png",
    summary:
      "This is pair staking platform on Solana network for BASC (Baby Ape Social Club) collection.",
    siteUrl: "https://stakingv2.babyapesocialclub.com",
  }, {
    type: ["blockchain", "web"],
    role: "Frontend and Web3 Developer",
    skills: ["Solana", "Next.JS", "Web3", "Tailwind"],
    imgUrl: "imgs/works/yaku.png",
    summary:
      "Yaku Hub is your access pass to a smarter platform that delivers value to the ecosystem as a whole.",
    siteUrl: "https://www.yaku.ai",
  },
  {
    type: ["blockchain", "game"],
    role: "Blockchain | Web3 Developer",
    skills: ["Next.JS", "Web3", "Node.JS", "Solidity"],
    imgUrl: "imgs/works/crash.png",
    summary:
      "Crash Game on Cronos",
    siteUrl: "https://crocrash.io",
  },
  {
    type: ["web"],
    role: "Full Stack Developer",
    skills: ["React", "Node.JS", "TypeSccript", "Styled Components"],
    imgUrl: "imgs/works/kiki-koala.png",
    summary:
      "Casino Landing Page",
    siteUrl: "https://kiki-koala.vercel.app",
  },
  {
    type: ["blockchain", "web"],
    role: "Frontend | Web3 Developer",
    skills: ["Next.JS", "Web3", "Solidity"],
    imgUrl: "imgs/works/shogun.jpg",
    summary:
      "Dual Staking Functionality, FlareDrop (WFLR) Delegation Pool, Purchase & Burn NINJA Token Buyback and Burn",
    siteUrl: "https://ninja.shogun-safari.xyz",
  },
  {
    type: ["web"],
    role: "Frontend Developer",
    skills: ["Nuxt.JS", "Tailwind"],
    imgUrl: "imgs/works/wedance.png",
    summary:
      "WeDance is online dance platform.",
    siteUrl: "https://wedance.vip",
  },
  {
    type: ["mobile"],
    role: "Mobile Developer",
    skills: ["IOS", "Android"],
    imgUrl: "imgs/works/g-plans.png",
    summary:
      "G-Plans is fitness mobile application.",
    siteUrl: "https://g-plans.com",
  },
];

export { filterKey, projectData };
