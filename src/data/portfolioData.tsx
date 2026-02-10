const filterKey = [
  { title: "show all", key: "*" },
  { title: "Blockchain", key: "blockchain" },
  { title: "game", key: "game" },
  { title: "web", key: "web"},
  { title: "Mobile App", key: "mobile" }
];

const projectData = [
  {
    type: ["blockchain"],
    role: "Smart Contract/Web3 Developer",
    skills: ["Rust", "Anchor", "Solana", "Web3", "Next.js", "Tailwind"],
    imgUrl: "imgs/works/s1.png",
    summary:
      "Poker platform on Solanan chain.",
    siteUrl: "https://goalpost.gg",
  },
  {
    type: ["ai"],
    role: "Fullstack Developer",
    skills: ["Next.js", "Eliza", "OpenAI"],
    imgUrl: "imgs/works/s2.png",
    summary:
      "AI Agent",
    siteUrl: "https://x.com/bankrbot",
  },
  {
    type: ["ai"],
    role: "AI Developer",
    skills: ["Next.js", "Python", "ML"],
    imgUrl: "imgs/works/aiwork1.png",
    summary:
      "AI Project",
    siteUrl: "https://storyfile.com",
  },{
    type: ["ai"],
    role: "AI Developer",
    skills: ["Next.js", "Python", "ML"],
    imgUrl: "imgs/works/aiwork2.png",
    summary:
      "AI Project",
    siteUrl: "https://chatdoc.com",
  },{
    type: ["ai", "dapp"],
    role: "AI Developer",
    skills: ["Next.js", "Node.js", "ElizaOS"],
    imgUrl: "imgs/works/aiwork3.png",
    summary:
      "AI Project",
    siteUrl: "https://trade-ai-pink.vercel.app/",
  },{
    type: ["casino", "game"],
    role: "Fullstack Developer",
    skills: ["Next.js", "Web3.Js", "Node.js", "Solidity"],
    imgUrl: "imgs/works/w102.png",
    summary:
      "Betting game on HyperLiquid",
    siteUrl: "https://vegas.fun/",
  },{
    type: ["casino", "game"],
    role: "Fullstack Developer",
    skills: ["Next.js", "Web3.Js", "Node.js", "Solidity"],
    imgUrl: "imgs/works/work100.png",
    summary:
      "Crash Game on Cronos",
    siteUrl: "https://crocrash.io/",
  },
  
  {
    type: ["dex", "nft"],
    role: "Frontend Developer",
    skills: ["Next.js", "Web3.Js", "Wagmi", "Solidity"],
    imgUrl: "imgs/works/s3.png",
    summary:
      "Dex & NFT Marketplace on Cronos",
    siteUrl: "https://ebisusbay.com",
  },
  {
    type: ["dapp"],
    role: "Fullstack Web3 Developer",
    skills: ["Next.js", "Web3.Js", "Wagmi", "Frontend"],
    imgUrl: "imgs/works/work22.png",
    summary:
      "Meme coin project on Cronos",
    siteUrl: "https://www.croginalcats.xyz//",
  },
  {
    type: ["pumpfun"],
    role: "Fullstack Web3 Developer",
    skills: ["Next.js", "Solana", "Rust"],
    imgUrl: "imgs/works/s9.png",
    summary:
      "Solana pumpfun fork",
    siteUrl: "https://www.ape.lol",
  },
  {
    type: ["mobile"],
    role: "React Native Developer",
    skills: ["React Native", "Firebase"],
    imgUrl: "imgs/works/s10.png",
    summary:
      "Unvaccinated Dating App",
    siteUrl: "https://play.google.com/store/apps/details?id=com.jabless.cupid&hl=en_GB",
  },
  {
    type: ["dex"],
    role: "Fullstack Developer",
    skills: ["Next.js", "Subgraph", "Ethers.js",  "Wagmi", "Node.js", "React"],
    imgUrl: "imgs/works/work23.png",
    summary:
      "Meme coin & Dex on Cronos",
    siteUrl: "https://www.aryhome.xyz/",
  },
  {
    type: ["nft", "design"],
    role: "Frontend and Web3 Developer",
    skills: ["Next.js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work17.jpg",
    summary:
      "Dual Staking Functionality, FlareDrop (WFLR) Delegation Pool, Purchase & Burn NINJA Token Buyback and Burn",
    siteUrl: "https://ninja.shogun-safari.xyz/",
  },
  {
    type: ["ai"],
    role: "Fullstack Developer",
    skills: ["Next.js", "SendAI", "Eliza"],
    imgUrl: "imgs/works/s4.png",
    summary:
      "Elevate your Solana Experiece with AI-powered insights and dlegated actions",
    siteUrl: "https://dextra.guru",
  },
  {
    type: ["casino", "game"],
    role: "FullStack Developer",
    skills: ["React.Js", "Node.Js", "Ngnix"],
    imgUrl: "imgs/works/work19.jpg",
    summary:
      "Platform for games like Baccarat, Roulette, Andar Bahar, Sic Bo, Dragon tiger, Designed and Built all.",
    siteUrl: "https://kasagames.com/",
  },
  {
    type: ["pumpfun"],
    role: "FullStack Developer",
    skills: ["React.Js", "Web3", "Solidity"],
    imgUrl: "imgs/works/s8.png",
    summary:
      "Pumpfun on Flare network",
    siteUrl: "https://app.flarelaunch.net/",
  },
  {
    type: ["nft", "design"],
    role: "Frontend and Solidity Developer",
    skills: ["Next.Js", "Web3.Js"],
    imgUrl: "imgs/works/work1.jpg",
    summary:
      "NFT Mint Project : 15% of the mint cost is shared with NFT holders.",
    siteUrl: "https://flaregods.xyz/",
  },
  {
    type: ["dex"],
    role: "Solana Developer",
    skills: ["Next.Js", "Solana Web3"],
    imgUrl: "imgs/works/s13.png",
    summary:
      "BONKscooper",
    siteUrl: "https://bonkscooper.app",
  },
  {
    type: ["nft", "game"],
    role: "Solana Developer",
    skills: ["Next.Js", "Solana Web3"],
    imgUrl: "imgs/works/s14.png",
    summary:
      "Pioneer Legend",
    siteUrl: "https://pioneerlegends.com",
  },
  {
    type: ["ecommerce","mobile"],
    role: "Mobile App Developer",
    skills: ["Swift", "React Native"],
    imgUrl: "imgs/works/s11.png",
    summary:
      "A shopping app fully made in SwiftUI for iOS 14.1.",
    siteUrl: "https://github.com/crypto-cooker/Furniture-Shop-App-UI-SwiftUI",
  },
  {
    type: ["dex"],
    role: "FullStack Engineer",
    skills: ["Next.js", "Web3.Js", "Wagmi", "Solidity"],
    imgUrl: "imgs/works/work0.png",
    summary:
      "Dex & Aggregator on Cronos",
    siteUrl: "https://meowswap.app/",
  },
  {
    type: ["pumpfun"],
    role: "FullStack Engineer",
    skills: ["Next.js", "Web3.Js", "Wagmi", "Solidity"],
    imgUrl: "imgs/works/s7.png",
    summary:
      "Evm pumpfun",
    siteUrl: "https://bondle.xyz/",
  },
  {
    type: ["casino", "game"],
    role: "FullStack Developer",
    skills: ["React.Js", "Node.Js", "Ngnix"],
    imgUrl: "imgs/works/work20.jpg",
    summary: "Sports Betting Site",
    siteUrl: "https://blockchainbets.club/",
  },
  {
    type: ["mobile"],
    role: "Swift Developer",
    skills: ["Swift", "Firebase"],
    imgUrl: "imgs/works/s12.png",
    summary: "Melkita | Melkita",
    siteUrl: "https://app.appleapps.ir/id/654611/",
  },
  {
    type: ["dex"],
    role: "FullStack Developer",
    skills: ["React.Js", "Node.Js", "Rust"],
    imgUrl: "imgs/works/s5.png",
    summary: "Buy DRVX Tokens With USDT",
    siteUrl: "https://solana-token-swap-dun.vercel.app/swap",
  },
  {
    type: ["nft"],
    role: "Web3 Developer",
    skills: ["React.Js", "Node.Js", "Rust"],
    imgUrl: "imgs/works/s6.png",
    summary: "Puff dog NFT Collection",
    siteUrl: "https://puffdognft.vercel.app",
  },

  {
    type: ["game", "casino"],
    role: "Game Developer",
    skills: ["Unity", "React.Js", "Node.Js", "Solana", "Rust"],
    imgUrl: "imgs/works/work9.jpg",
    summary: "DegenTaxi - Car Crash Game (Solana)",
    siteUrl: "https://degentaxi.io/",
  },
  {
    type: ["game"],
    role: "Frontend and Web3 Developer",
    skills: ["React.Js", "Node.Js", "AWS", "Solana", "Rust"],
    imgUrl: "imgs/works/work10.jpg",
    summary:
      "This is coin-flip game on solana network. Payment is Sol and users can put their amount in this game. ",
    siteUrl: "https://coinflip.deezkits.com/",
  },
  {
    type: ["nft"],
    role: "Frontend and Web3 Developer",
    skills: ["Next.Js", "Node.Js", "Three.Js", "Web3.Js"],
    imgUrl: "imgs/works/work12.jpg",
    summary: "Cobalt NFT Minting",
    siteUrl: "https://cobalt.shop/",
  },
  {
    type: ["game"],
    role: "Solidity and Rust Developer",
    skills: ["React.Js", "Web3.Js", "Solidity", "Ethereum"],
    imgUrl: "imgs/works/work11.jpg",
    summary: "Crypto Legions Game (P2E)",
    siteUrl: "https://cryptolegions.app/",
  },
  {
    type: ["nft", "design"],
    role: "Frontend and Solidity Developer",
    skills: ["Next.Js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work7.jpg",
    summary: "BeastiyBit NFT Minting",
    siteUrl: "https://beastybits.com/",
  },
  {
    type: ["nft", "design"],
    role: "Frontend and Solidity Developer",
    skills: ["Next.Js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work8.jpg",
    summary: "CuteInsane NFT Minting | Staking",
    siteUrl: "https://cutetoinsane.online/",
  },
  {
    type: ["nft", "game"],
    role: "Solana Developer",
    skills: ["Next.Js", "Node.Js", "AWS", "Solana"],
    imgUrl: "imgs/works/work5.png",
    summary: "Solarmy | NFT Game | NFT Staking | Fusion",
    siteUrl: "https://game.solarmy.io/",
  },
  {
    type: ["nft", "design"],
    role: "Frontend and Solidity Developer",
    skills: ["React.Js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work3.png",
    summary: "NFT Marketplace (Songbird Network)",
    siteUrl: "https://market.doodcats.net/",
  },
  {
    type: ["casino", "game"],
    role: "Frontend and Web3 Developer",
    skills: ["Next.Js", "Web3", "Node.js", "Solidity"],
    imgUrl: "imgs/works/w100.png",
    summary: "Casino Game on HyperLiquid",
    siteUrl: "https://www.hyperdegen.com/",
  },
  {
    type: ["casino", "game"],
    role: "Fullstack Developer",
    skills: ["Next.Js", "Web3", "Node.js", "AbstractChain"],
    imgUrl: "imgs/works/w101.png",
    summary: "Betting Game on Abstract Chain",
    siteUrl: "https://www.death.fun",
  },
  {
    type: ["nft", "design"],
    role: "Frontend and Web3 Developer",
    skills: ["Next.Js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work2.jpg",
    summary: "NFT Minting | Staking",
    siteUrl: "https://doodlebunnyflr.live/",
  },
  {
    type: ["nft", "design"],
    role: "Frontend and Solidity Developer",
    skills: ["React.Js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work18.jpg",
    summary: "NFT Staking in Songbird Network",
    siteUrl: "https://tsphunt.xyz/",
  },
  {
    type: ["nft", "design"],
    role: "Frontend and Solidity Developer",
    skills: ["React.Js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work4.jpg",
    summary:
      "NFT Staking (Songbird Network). Holders may stake DoodCats v3 NFTs and DedDoods NFTs to earn sDOOD Token.",
    siteUrl: "https://doodcats.net/",
  },
  {
    type: ["nft", "design"],
    role: "Frontend and Solidity Developer",
    skills: ["React.Js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work21.png",
    summary: "NFT Breeding Dapp",
    siteUrl: "https://portal.animalove.art/",
  },
  {
    type: ["mobile"],
    role: "Mobile app Developer",
    skills: ["React Native", "Firebase"],
    imgUrl: "imgs/works/s20.png",
    summary: "Meal Planner-Ema",
    siteUrl: "https://play.google.com/store/apps/details?id=com.ema.MealPlannerEma",
  },
  {
    type: ["nft"],
    role: "Frontend and Solidity Developer",
    skills: ["React.Js", "Web3.Js", "Solidity"],
    imgUrl: "imgs/works/work16.jpg",
    summary:
      "CashCow Protocol (Designed the site with Figma, Built the staking and marketplace contract)",
    siteUrl: "https://cashcowprotocol.com/",
  },
  {
    type: ["solanabot"],
    role: "Solana Bot Developer",
    skills: ["Solana Web3", "Rust"],
    imgUrl: "imgs/works/s15.png",
    summary:
      "Raydium Sniper Bot",
    siteUrl: "https://www.youtube.com/watch?v=Eq8QVTTxblk&t=157s",
  },
  {
    type: ["solanabot"],
    role: "Solana Bot Developer",
    skills: ["Solana Web3", "Rust"],
    imgUrl: "imgs/works/s16.png",
    summary:
      "Raydium Volume Bot",
    siteUrl: "https://www.youtube.com/watch?v=KXV201mcFBQ",
  },
  {
    type: ["solanabot"],
    role: "Solana Bot Developer",
    skills: ["Solana Web3", "Rust"],
    imgUrl: "imgs/works/s17.png",
    summary:
      "Pumpfun Sniper Bot",
    siteUrl: "https://www.youtube.com/watch?v=JkliCrDxJzc&t=7s",
  },
  {
    type: ["solanabot"],
    role: "Solana Bot Developer",
    skills: ["Solana Web3", "Rust"],
    imgUrl: "imgs/works/s18.png",
    summary:
      "Pumpfun Bundler Bot",
    siteUrl: "https://www.youtube.com/watch?v=r5NsRbB_X0M",
  },
  {
    type: ["solanabot"],
    role: "Solana Bot Developer",
    skills: ["Solana Web3", "Rust"],
    imgUrl: "imgs/works/s19.png",
    summary:
      "Meteora Volume Bot",
    siteUrl: "https://www.youtube.com/watch?v=m3hU-CbFErs",
  },
  {
    type: ["ecommerce"],
    role: "FullStack Developer",
    skills: ["React.Js", "Node.Js", "GraphQL", "AWS"],
    imgUrl: "imgs/works/work13.jpg",
    summary: "Di Bruno Bros E-Commerce",
    siteUrl: "https://dibruno.com/",
  },
  {
    type: ["ecommerce"],
    role: "FullStack Developer",
    skills: ["React.Js", "Node.Js", "GraphQL"],
    imgUrl: "imgs/works/work14.jpg",
    summary: "MercariLogo Marketplace (Designed the site and the database.)",
    siteUrl: "https://www.mercari.com/",
  },
  {
    type: ["ecommerce", "design"],
    role: "FullStack Developer",
    skills: ["React.Js", "Node.Js"],
    imgUrl: "imgs/works/work15.jpg",
    summary: "Littlespoon E-Commerce",
    siteUrl: "https://www.littlespoon.com/",
  },
];

export { filterKey, projectData };
