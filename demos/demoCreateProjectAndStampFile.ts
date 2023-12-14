import { https } from "@build-5/client";
import { Build5 } from "@build-5/client/https";
import { Dataset, Network } from "@build-5/interfaces";

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
setTimeout(() => console.log('-----------------\n\n'), 2000);
console.clear();

// ----

console.log('%cLets go ahead and create your own project / verse...', 'color:green;font-size:14px;font-weight: bold');
const project = await build5.createProject(await signWithMetamask({'config': {'billing': 'volume_based'}, 'name' : 'MONA Verse Project'}));
console.log('Project created: ', project);
const projectAPIKey = project.token;

console.log('%cCreate stamp under your project...', 'color:green;font-size:14px;font-weight: bold');
const order = await build5.project(projectAPIKey).dataset(Dataset.STAMP).stamp(await signWithMetamask({
    file: 'https://www.africau.edu/images/default/sample.pdf',
    network: Network.RMS
}, projectAPIKey));
console.log('Sent: ', order.payload.amount, ' to ', order.payload.targetAddress, ', full order object: ', order);

console.log('%cListen to transactions updates...', 'color:green;font-size:14px;font-weight: bold');
const subTran = build5.project(projectAPIKey).dataset(Dataset.TRANSACTION).id(order.uid).getLive().subscribe((t) => { 
    t && console.log('Transaction record updated - ', t.uid,', ', ' full updates: ', t);
    if (t?.payload.stamp) {
        subTran.unsubscribe();
        build5.project(projectAPIKey).dataset(Dataset.STAMP).id(t.payload.stamp).getLive().subscribe((stamp) => { 
            console.log('Stamp created/updated: ', stamp)
        });
    }
});


// --------
// DEMO ENDS HERE
// --------

}