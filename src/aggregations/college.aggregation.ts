export const COLLEGE_AGGREGATION = [
    {
        $lookup: {
            from: 'cources',
            localField: 'cources',
            foreignField: 'id',
            as: 'cources'
        }
    },
    {
        $lookup: {
            from: 'countries',
            localField: 'country',
            foreignField: 'id',
            as: 'country'
        }
    },
    {
        $lookup: {
            from: 'states',
            localField: 'state',
            foreignField: 'id',
            as: 'state'
        }
    },
    {
        $lookup: {
            from: 'cities',
            localField: 'city',
            foreignField: 'id',
            as: 'city'
        }
    },
    {
        $unwind: {
            path: '$country',
            preserveNullAndEmptyArrays: true
        }
    },
    {
        $unwind: {
            path: '$state',
            preserveNullAndEmptyArrays: true
        }
    },
    {
        $unwind: {
            path: '$city',
            preserveNullAndEmptyArrays: true
        }
    }
];
