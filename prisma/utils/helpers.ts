export default function objMap(obj, func) {
    return Object.fromEntries(Object.entries(obj).map(([k, v]) => func([k, v])));
}