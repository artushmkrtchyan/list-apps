import axios from 'axios';
import { compareFunctionSortApps } from './helpers';

export const getAllData = async () => await axios.get('apps.json').then(res => res.data);

export const getDataByCategory = async (category) => {
    try {
        const data = await getAllData();

        if (!category) return data;

        return data.filter(item => Array.isArray(item.categories) && item.categories.some(el => el === category));
    } catch (error) {
        return [];
    }

};

export const fetchApps = async (params) => {
    try {
        const { category, search, order, page = 1, limit = 3 } = params;
        const start = (page - 1) * limit;
        const end = start + limit;

        let data = await getDataByCategory(category);

        if (order) {
            data.sort((a, b) => compareFunctionSortApps(a, b, order));
        }

        if (search) {
            data = data.filter(item => item.name.toUpperCase().includes(search.toUpperCase()));
        }

        const content = data.slice(start, end);
        const totalCount = data.length;

        return {
            content,
            totalCount,
            pageCount: Math.ceil(totalCount / limit),
            page: +page
        }
    } catch (error) {
        return [];
    }

};