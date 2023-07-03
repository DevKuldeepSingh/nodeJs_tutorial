const os = require("node:os");

/**
 * 

console.log(os.EOL);
console.log(os.availableParallelism()); //  The returned value from os.availableParallelism()
//indicates the suggested level of parallelism that a program can take advantage of.
//It represents the number of concurrent tasks or threads that can be executed efficiently
//on the available hardware resources, such as CPU cores.
//The method guarantees that the returned value will always be greater than zero,

console.log(os.arch());
//Returns the operating system CPU architecture for which the Node.js binary was compiled.
// Possible values are 'arm', 'arm64', 'ia32', 'mips', 'mipsel', 'ppc', 'ppc64', 's390', 's390x', and 'x64'
// is typically macOS, which supports multiple CPU architectures. While the M1 processor uses the ARM architecture, macOS on M1-based systems also supports running binaries compiled for the x64 (Intel 64-bit) architecture through a translation layer called Rosetta 2.
//When you execute os.arch() on a Mac with an M1 processor, it will typically return "x64" because the Node.js process is running in an environment that supports running x64 binaries. This is due to the compatibility layer that allows running Intel-based (x64) applications on Apple Silicon (ARM) systems.

console.log(os.constants); // -> object return  Contains commonly used operating system-specific constants for error codes, process signals, and so on

console.log(os.cpus()); // Returns an array of objects containing information about each logical CPU core. The array will be empty if no CPU information is available, such as if the /proc file system is unavailable.



console.log(os.freemem()); //Returns the amount of free system memory in bytes as an integer.

console.log(os.getPriority(332)); //Returns the scheduling priority for the process specified by pid. If pid is not provided or is 0, the priority of the current process is returned.

console.log(os.homedir()); // Returns the string path of the current user's home directory. ex - /Users/kuldeepsingh
console.log(os.hostname()); // Returns the host name of the operating system as a string.

console.log(os.loadavg()); // Returns an array containing the 1, 5, and 15 minute load averages.

console.log(os.machine()); //Returns the machine type as a string, such as arm, arm64, aarch64

console.log(os.networkInterfaces()); // Returns an object containing network interfaces that have been assigned a network address.


console.log(os.platform()); // Returns a string identifying the operating system platform for which the Node.js binary was compiled. The value is set at compile time.

console.log(os.release()); //Returns the operating system as a string.

console.log(os.setPriority(pid, priority)); // Attempts to set the scheduling priority for the process specified by pid. If pid is not provided or is 0, the process ID of the current process is used.

*/

console.log(os.type());
console.log(os.totalmem());
console.log(os.uptime());
