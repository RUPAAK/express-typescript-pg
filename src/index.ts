import * as os from "os";
import cluster from "cluster";
import App from "./Provider/App";

// if (!process.env.NODE_UNIQUE_ID) {
//   console.log(cluster.i)
// } else {
//   /**
//    * Run the Database pool
//    */
//   App.loadDatabase();

//   /**
//    * Run the Server on Clusters
//    */
//   App.loadServer();
// }

// const CPUS: any = os.cpus();

// console.log(CPUS)
// CPUS.forEach(() => cluster.fork());

/**
 * Run the Database pool
 */
App.loadDatabase();

/**
 * Run the Server on Clusters
 */
App.loadServer();
