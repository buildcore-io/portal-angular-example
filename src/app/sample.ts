import { Build5, https } from "@build-5/client";
import { Dataset, Network, NftAvailable, Subset } from "@build-5/interfaces";

const build5 = https(Build5.TEST);
const signWithMetamask = async (s: any, projectAPIKey: string = '123') => {
    return <any>{};
};

// Bugs:
// - lets remove wenUrl from all objects

async function consoleFunc() {
    // Listen to milestones & transactions updates
    build5.dataset(Dataset.MILESTONE_RMS).getTopLive(undefined, 1).subscribe((m) =>  {
        if (m[0].completed) {
            console.log('Milestone ', m[0].milestone);
            console.log('Transactions: ');
            build5.dataset(Dataset.MILESTONE_RMS).id(m[0].milestone.toString()).subset(Subset.TRANSACTIONS).getAll().then((t) => console.log(t))
        }
    });

    // Create your project / verse
    const project = await build5.dataset(Dataset.PROJECT).create(await signWithMetamask({'config': {'billing': 'volume_based'}, 'name' : 'Test Project'}));
    console.log(project);
    const projectAPIKey = project.token;

    // Use your verse ID to create token.
    const token = await build5.dataset(Dataset.TOKEN).create(await signWithMetamask({
        access: 0,
        name: 'Test token',
        symbol: 'TTEST',
        decimals: 6,
        totalSupply: 1000000000,
        icon: 'https://images-wen.soonaverse.com/0x551fd2c7c7bf356bac194587dab2fcd46420054b/h0b0ns4vhnh/687e89be-fcfd-4d0a-8226-1c2a9c9998d8_jpeg_200X200.webp',
        overviewGraphics: 'https://images-wen.soonaverse.com/0x551fd2c7c7bf356bac194587dab2fcd46420054b/h0b0ns4vhnh/687e89be-fcfd-4d0a-8226-1c2a9c9998d8_jpeg_200X200.webp',
        termsAndConditions: 'https://wen.soonaverse.com',
        allocations: [{title: 'JustOne', percentage: 100 }]
    }, projectAPIKey));
    console.log('Token: ' + token.uid);

    // Mint token on Shimmer.
    build5.dataset(Dataset.TOKEN).mint(await signWithMetamask({
        token: token.uid,
        network: Network.RMS
    })).then((t) => console.log(t));

    // Find available NFTs for sale in the collection.
    build5.dataset(Dataset.NFT).getByField(['collection', 'available'], ['0x267b6d288fc7568e099a929b649e8d5b55c2b39d', NftAvailable.SALE]).then((v) => { console.log(v) });

    // Buy NFT
    build5.dataset(Dataset.NFT).order(await signWithMetamask({collection: '0x267b6d288fc7568e099a929b649e8d5b55c2b39d', nft: '0x353746fd03febb8939d0f4dc1ba8f17737c5c1f9'})).then((t) => console.log(t));

}