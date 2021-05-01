export const CATEGORIES = ["Channels", "Dialer", "Optimization", "Reporting", "Voice Analytics"].sort();

export const debounce = (fn, wait = 500) => {
    let timeoutId;

    return (...args) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), wait);
    };
}

export const debounced300 = debounce(fn => fn(), 300);

export const getSumArrayOfObjectsByField = (arr, field) => {
    try {
        return arr.reduce((acc, cur) => acc + (+cur[field] || 0), 0)
    } catch (error) {
        return 0;
    }
};

export const compareFunctionSortApps = (a, b, order) => {
    try {
        const sumA = getSumArrayOfObjectsByField(a.subscriptions, 'price');
        const sumB = getSumArrayOfObjectsByField(b.subscriptions, 'price');

        if (order === 'asc') {
            return sumA - sumB
        };

        if (order === 'desc') {
            return sumB - sumA
        }
        return 0

    } catch (error) {
        return 0;
    }
};