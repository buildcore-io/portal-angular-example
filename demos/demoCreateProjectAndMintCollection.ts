import { Build5, https } from "@build-5/client";
import { Dataset, Network } from "@build-5/interfaces";

const build5 = https(Build5.TEST);
const signWithMetamask = async (s: any, projectAPIKey: string = '123') => {
    return <any>{};
};

// Just so we remove warning because of async
async function demoCreateProjectAndMintCollection() {

// --------
// DEMO STARTS HERE
// --------

setTimeout(() => console.log('%cMinting large collection with BUILD5 is super easy:', 'font-weight: bold'), 1000);
setTimeout(() => console.log('- minting large collections is not easy on Shimmer'), 1500);
setTimeout(() => console.log('- you have to know how to create alias, NFTs, calculate storage deposists, follow standards'), 3000);
setTimeout(() => console.log('- making it stable so it works everytime is hard'), 5000);
setTimeout(() => console.log('....with BUILD5 is super easy.'), 6000);
setTimeout(() => console.log('-----------------\n\n'), 7000);
console.clear();

// ----

console.log('%cLets go ahead and create your own project / verse...', 'color:green;font-size:14px;font-weight: bold');
const project = await build5.createProject(await signWithMetamask({'config': {'billing': 'volume_based'}, 'name' : 'MONA Verse Project'}));
console.log('Project created: ', project);
const projectAPIKey = project.token;

// -----

console.log('%cLets go ahead and create space...', 'color:green;font-size:14px;font-weight: bold');
const space = await build5.project(projectAPIKey).dataset(Dataset.SPACE).create(await signWithMetamask({
    'name' : 'MONA Space'
}));
console.log('Space created: ', space);

// ----

// console.log('%cValidate address for space...', 'color:green;font-size:14px;font-weight: bold');
// await build5.project(projectAPIKey).dataset(Dataset.SPACE).validateAddress(await signWithMetamask({
//     space: space.uid,
//     network: Network.IOTA
// })).then((t) => console.log('Sent: ', t.payload.amount, ' to ', t.payload.targetAddress));

// ----
console.log('%cCreate NFT Collection under your project...', 'color:green;font-size:14px;font-weight: bold');
const collectionName = Math.random().toString(36).substr(2, 5).replace(/[0-9]/g, '').toUpperCase();
const availableFrom = Date.now();
const collection = await build5.project(projectAPIKey).dataset(Dataset.COLLECTION).create(await signWithMetamask({
    name: collectionName + ' collection',
    description: collectionName + ' collection description',
    availableFrom: availableFrom,
    access: 0,
    category: 'COLLECTIBLE',
    bannerUrl: 'https://images-wen.soonaverse.com/0x551fd2c7c7bf356bac194587dab2fcd46420054b/rrvhjuksm4/fe1105c6-2a66-4496-96d1-ed1625293014.jpeg',
    placeholderUrl: 'https://images-wen.soonaverse.com/0x551fd2c7c7bf356bac194587dab2fcd46420054b/rrvhjuksm4/fe1105c6-2a66-4496-96d1-ed1625293014.jpeg',
    price: 10000000,
    space: space.uid,
    royaltiesFee: 0,
    royaltiesSpace: space.uid,
    type: 0
}, projectAPIKey));
console.log('Collection: ' + collection.uid, collection);

// Create 25 NFTs
console.log('%cCreate 25 NFTs under your collection...', 'color:green;font-size:14px;font-weight: bold');
const nftLists = [];
for(let i = 0; i < 25; i++){
    const nftName = Math.random().toString(36).substr(2, 5).replace(/[0-9]/g, '').toUpperCase();
    nftLists.push({
        availableFrom: availableFrom,
        collection: collection.uid,
        description: nftName + ' description',
        media: 'https://images-wen.soonaverse.com/0x551fd2c7c7bf356bac194587dab2fcd46420054b/rrvhjuksm4/fe1105c6-2a66-4496-96d1-ed1625293014.jpeg',
        name: nftName,
        price: 20000000
    });
}
const nfts = await build5.project(projectAPIKey).dataset(Dataset.NFT).createBatch(await signWithMetamask(nftLists, projectAPIKey));
console.log('NFT ', nfts);

// ----

console.log('%cListen to collection updates...', 'color:green;font-size:14px;font-weight: bold');
build5.project(projectAPIKey).dataset(Dataset.COLLECTION).id(collection.uid).getLive().subscribe((t) => { 
    t && console.log('Collection record updated - ', t.uid,', current status: ', t.status ,', full updates: ', t) 
});

// ----

console.log('%cMint collection on RMS chain...', 'color:green;font-size:14px;font-weight: bold');
build5.project(projectAPIKey).dataset(Dataset.COLLECTION).mint(await signWithMetamask({
    collection: collection.uid,
    network: Network.RMS,
    unsoldMintingOptions: 'keep_price'
}, projectAPIKey)).then((t) => console.log('Sent: ', t.payload.amount, ' to ', t.payload.targetAddress, ', full order object: ', t));

// --------
// DEMO ENDS HERE
// --------

}