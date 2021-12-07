export const STUDENT_AGGREGATION = [
    {
        $lookup: {
            from: 'skills',
            localField: 'skills',
            foreignField: 'id',
            as: 'skills'
        }
    },
    {
        $lookup: {
            from: 'colleges',
            localField: 'college_id',
            foreignField: 'id',
            as: 'college'
        }
    },
    {
        $unwind: {
            path: '$college',
            preserveNullAndEmptyArrays: true
        }
    }
];
