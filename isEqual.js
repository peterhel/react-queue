const isEqual = (o1, o2) => {
    let equals = true;

    if (!o1 && !o2) return true;
    if (o1 && !o2) return false;
    if (o2 && !o1) return false;

    if (typeof o1 !== 'object') {
        return o1 === o2;
    }

    for (const [key, value] of Object.entries(o1)) {
        try {
            if (typeof value === 'object') {
                equals = equals && isEqual(value, o2[key]);
            } else {
                equals = equals && value === o2[key];
            }
        } catch (e) {
            equals = false;
        }
    }
    return equals;
};

export default isEqual;
