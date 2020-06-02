import low from "lowdb";
// @ts-ignore
import lodashId from "lodash-id";
import FileSync from "lowdb/adapters/FileSync";

const adapter = new FileSync("db.json");
const db = low(adapter);

db._.mixin(lodashId);

export default db;
