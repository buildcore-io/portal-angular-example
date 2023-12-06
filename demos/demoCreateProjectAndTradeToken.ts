import { Build5, https } from "@build-5/client";
import { Dataset, Network, Subset, TokenTradeOrderStatus, TokenTradeOrderType } from "@build-5/interfaces";

const build5 = https(Build5.TEST);
const signWithMetamask = async (s: any, projectAPIKey: string = '123') => {
    return <any>{};
};

// Just so we remove warning because of async
async function demoCreateProjectAndTradeToken() {

// --------
// DEMO STARTS HERE
// --------


setTimeout(() => console.log('Build5 provides super simple APIs to:'), 1000);
setTimeout(() => console.log('- Create NFT, mint NFT on various chains, trade NFTs, Auction NFTs, deposit and withdraw NFTs from various chains, staking and much more'), 1500);
setTimeout(() => console.log('- Create tokens, mint tokens on various chains, trade tokens, cross chain trading, token distribution, staking and much more'), 5000);
setTimeout(() => console.log('- Create Auctions, various configurations such as min bid, number of winners and much more'), 7500);
setTimeout(() => console.log('- Digital Twin creations, management and more'), 10000);
setTimeout(() => console.log('- Stamping, fingerprinting of files on chain and more'), 12500);
setTimeout(() => console.log('- DAO management, on chain voting, reputation management'), 15000);
setTimeout(() => console.log('....and so much more.'), 16500);
setTimeout(() => console.log('%cLets do few super basic examples!', 'color:green'), 17000);
setTimeout(() => console.log('-----------------\n\n'), 17200);
console.clear();

// ----

console.log('%cListen to milestones & transactions updates!', 'color:green');
const subMilestone = build5.dataset(Dataset.MILESTONE_RMS).getTopLive(undefined, 1).subscribe((m) =>  {
    if (m[0].completed) {
        build5.dataset(Dataset.MILESTONE_RMS).id(m[0].milestone.toString()).subset(Subset.TRANSACTIONS).getAll().then((t) => console.log('Milestone ', m[0].milestone, 'Transactions: ', t));
    }
});

// ----

console.log('%cStop listening milestone transactions...', 'color:green');
subMilestone.unsubscribe();

// ----

console.log('%cLets go ahead and create your own project / verse...', 'color:green');
const project = await build5.dataset(Dataset.PROJECT).create(await signWithMetamask({'config': {'billing': 'volume_based'}, 'name' : 'MONA Verse Project'}));
console.log('Project created: ', project);
const projectAPIKey = project.token;

// ----

console.log('%cValidate RMS Address...', 'color:green');
build5.dataset(Dataset.MEMBER).validateAddress(await signWithMetamask({
    network: Network.RMS
}, projectAPIKey)).then((t) => console.log('Sent: ', t.payload.amount, ' to ', t.payload.targetAddress));

// ----

console.log('%cCreate token under your project...', 'color:green');
const tokenSymbol = Math.random().toString(36).substr(2, 6).replace(/[0-9]/g, '').toUpperCase();
const token = await build5.dataset(Dataset.TOKEN).create(await signWithMetamask({
    access: 0,
    name: tokenSymbol + ' token',
    symbol: tokenSymbol,
    decimals: 6,
    totalSupply: 1000000000,
    icon: 'https://images-wen.soonaverse.com/0x551fd2c7c7bf356bac194587dab2fcd46420054b/h0b0ns4vhnh/687e89be-fcfd-4d0a-8226-1c2a9c9998d8_jpeg_200X200.webp',
    overviewGraphics: 'https://images-wen.soonaverse.com/0x551fd2c7c7bf356bac194587dab2fcd46420054b/h0b0ns4vhnh/687e89be-fcfd-4d0a-8226-1c2a9c9998d8_jpeg_200X200.webp',
    termsAndConditions: 'https://wen.soonaverse.com',
    allocations: [{title: 'JustOne', percentage: 100 }]
}, projectAPIKey));
console.log('Token: ' + token.uid, token);

// ----

console.log('%cListen to token updates...', 'color:green');
build5.dataset(Dataset.TOKEN).id(token.uid).getLive().subscribe((t) => { 
    console.log('Token record updated - ', t.uid,', current status: ', t.status ,', full updates: ', t) 
});

// ----

console.log('%cMint token on RMS chain...', 'color:green');
build5.dataset(Dataset.TOKEN).mint(await signWithMetamask({
    token: token.uid,
    network: Network.RMS
}, projectAPIKey)).then((t) => console.log('Sent: ', t.payload.amount, ' to ', t.payload.targetAddress, ', full order object: ', t));

// ----

console.log('%cEnable trading for the token...', 'color:green');
build5.dataset(Dataset.TOKEN).enableTrading(await signWithMetamask({
    uid: token.uid
}, projectAPIKey)).then((t) => console.log(t));

// ----

console.log('%cListen to the order book...', 'color:green');
const subTokenBids = build5.dataset(Dataset.TOKEN_MARKET).getBidsLive(token.uid, TokenTradeOrderType.SELL, TokenTradeOrderStatus.ACTIVE).subscribe((t) => { 
    console.log('Current sell orders on the book: ', t) 
});

// ----

console.log('%cSell some of our token on the exchange...', 'color:green');
build5.dataset(Dataset.TOKEN_MARKET).tradeToken(await signWithMetamask({
    symbol: token.symbol,
    price: 2,
    count: 2000000,
    type: 'sell'
}, projectAPIKey)).then((t) => console.log('Sent: ', parseInt(t.payload.nativeTokens[0].amount, 16), ' ', token.symbol, ' to ', t.payload.targetAddress, ', full order object: ', t));

// ----

console.log('%cStop listening token bids...', 'color:green');
subTokenBids.unsubscribe();

// Done here.
console.log('%cComing up mint collection, trade and stake! Stay tuned!', 'color:green');
console.log('%cAccess code used for this demo here: https://github.com/build-5/portal-angular-example/blob/master/demos/demoCreateProjectAndTradeToken.ts', 'color:green');

// --------
// DEMO ENDS HERE
// --------

}