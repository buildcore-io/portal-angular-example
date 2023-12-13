import { https } from "@build-5/client";
import { Build5 } from "@build-5/client/https";
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

setTimeout(() => console.log('%cBuild5 provides super simple APIs to:', 'font-weight: bold'), 1000);
setTimeout(() => console.log('- Create NFT, mint NFT on various chains, trade NFTs, Auction NFTs, deposit and withdraw NFTs from various chains, staking and much more'), 1500);
setTimeout(() => console.log('- Create tokens, mint tokens on various chains, trade tokens, cross chain trading, token distribution, staking and much more'), 5000);
setTimeout(() => console.log('- Create Auctions, various configurations such as min bid, number of winners and much more'), 7500);
setTimeout(() => console.log('- Digital Twin creations, management and more'), 10000);
setTimeout(() => console.log('- Stamping, fingerprinting of files on chain and more'), 12500);
setTimeout(() => console.log('- DAO management, on chain voting, reputation management'), 15000);
setTimeout(() => console.log('....and so much more.'), 16500);
setTimeout(() => console.log('%cLets do few super basic examples!', 'color:green;font-size:14px;font-weight: bold'), 17000);
setTimeout(() => console.log('-----------------\n\n'), 17200);
console.clear();

// ----

console.log('%cLets go ahead and create your own project / verse...', 'color:green;font-size:14px;font-weight: bold');
const project = await build5.createProject(await signWithMetamask({'config': {'billing': 'volume_based'}, 'name' : 'MONA Verse Project'}));
console.log('Project created: ', project);
const projectAPIKey = project.token;

// ----

console.log('%cListen to milestones & transactions updates!', 'color:green;font-size:14px;font-weight: bold');
const subMilestone = build5.project(projectAPIKey).dataset(Dataset.MILESTONE_RMS).getTopLive(undefined, 1).subscribe((m) =>  {
    if (m[0].completed) {
        build5.project(projectAPIKey).dataset(Dataset.MILESTONE_RMS).id(m[0].milestone.toString()).subset(Subset.TRANSACTIONS).getAll().then((t) => console.log('Milestone ', m[0].milestone, 'Transactions: ', t));
    }
});

// ----

console.log('%cStop listening milestone transactions...', 'color:green;font-size:14px;font-weight: bold;');
subMilestone.unsubscribe();

// ----

console.log('%cValidate RMS Address...', 'color:green;font-size:14px;font-weight: bold');
build5.project(projectAPIKey).dataset(Dataset.MEMBER).validateAddress(await signWithMetamask({
    network: Network.RMS
}, projectAPIKey)).then((t) => console.log('Sent: ', t.payload.amount, ' to ', t.payload.targetAddress));

// ----

console.log('%cCreate token under your project...', 'color:green;font-size:14px;font-weight: bold');
const tokenSymbol = Math.random().toString(36).substr(2, 5).replace(/[0-9]/g, '').toUpperCase();
const token = await build5.project(projectAPIKey).dataset(Dataset.TOKEN).create(await signWithMetamask({
    name: tokenSymbol + ' token',
    symbol: tokenSymbol,
    decimals: 6,
    totalSupply: 1000000000,
    icon: 'https://images-wen.soonaverse.com/0x551fd2c7c7bf356bac194587dab2fcd46420054b/h0b0ns4vhnh/687e89be-fcfd-4d0a-8226-1c2a9c9998d8_jpeg_200X200.webp',
}, projectAPIKey));
console.log('Token: ' + token.uid, token);

// ----

console.log('%cListen to token updates...', 'color:green;font-size:14px;font-weight: bold');
build5.project(projectAPIKey).dataset(Dataset.TOKEN).id(token.uid).getLive().subscribe((t) => { 
    t && console.log('Token record updated - ', t.uid,', current status: ', t.status ,', full updates: ', t) 
});

// ----

console.log('%cMint token on RMS chain...', 'color:green;font-size:14px;font-weight: bold');
build5.project(projectAPIKey).dataset(Dataset.TOKEN).mint(await signWithMetamask({
    token: token.uid,
    network: Network.RMS
}, projectAPIKey)).then((t) => console.log('Sent: ', t.payload.amount, ' to ', t.payload.targetAddress, ', full order object: ', t));

// ----

console.log('%cEnable trading for the token...', 'color:green;font-size:14px;font-weight: bold');
build5.project(projectAPIKey).dataset(Dataset.TOKEN).enableTrading(await signWithMetamask({
    uid: token.uid
}, projectAPIKey)).then((t) => console.log(t));

// ----

console.log('%cListen to the order book...', 'color:green;font-size:14px;font-weight: bold');
const subTokenBids = build5.project(projectAPIKey).dataset(Dataset.TOKEN_MARKET).getBidsLive(token.uid, TokenTradeOrderType.SELL, TokenTradeOrderStatus.ACTIVE).subscribe((t) => { 
    console.log('Current sell orders on the book: ', t) 
});

// ----

console.log('%cSell some of our token on the exchange...', 'color:green;font-size:14px;font-weight: bold');
build5.project(projectAPIKey).dataset(Dataset.TOKEN_MARKET).tradeToken(await signWithMetamask({
    symbol: token.symbol,
    price: 2,
    count: 2000000,
    type: 'sell'
}, projectAPIKey)).then((t) => console.log('Sent: ', parseInt(t.payload.nativeTokens[0].amount, 16), ' ', token.symbol, ' to ', t.payload.targetAddress, ', full order object: ', t));

// ----

console.log('%cStop listening token bids...', 'color:green;font-size:14px;font-weight: bold');
subTokenBids.unsubscribe();

// Done here.
console.log('%cComing up DEMO: mint collection, trade and stake! Stay tuned!\n\n', 'color:green;font-size:14px;font-weight: bold');
console.log('%cAccess code used for this demo here: https://github.com/build-5/portal-angular-example/blob/master/demos/demoCreateProjectAndTradeToken.ts', 'color:green;font-size:14px;font-weight: bold');

// --------
// DEMO ENDS HERE
// --------

}