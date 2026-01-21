import "dotenv/config";

const toCamelCase = str =>
  str.toLowerCase().replace(/_([a-z])/g, (_, c) => c.toUpperCase());

const parseValue = v => {
  if (v === "true") return true;
  if (v === "false") return false;
  if (!isNaN(v) && v.trim() !== "") return Number(v);
  if (v.includes(",")) return v.split(",").map(x => x.trim());
  return v;
};

const config = {};
for (const key in process.env) {
  config[toCamelCase(key)] = parseValue(process.env[key]);
}

export default config;
