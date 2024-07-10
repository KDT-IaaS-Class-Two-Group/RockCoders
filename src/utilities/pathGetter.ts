import path from "node:path";

export default (...paths: string[]) => path.resolve(...paths);
