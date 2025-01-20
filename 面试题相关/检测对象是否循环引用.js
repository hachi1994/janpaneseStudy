// set
function hasCircularReference(obj) {
    let set = new Set();

    function detect(obj) {
        if (obj && typeof obj === 'object') {
            if (set.has(obj)) {
                return true;
            }
            set.add(obj);
            for (const key of Object.keys(obj)) {
                if (detect(obj[key])) {
                    return true;
                }
            }
        }
        return false;

    }
    return detect(obj);
}

let a = {};
let b = {a};
a.b = b;
console.log(hasCircularReference(a));
