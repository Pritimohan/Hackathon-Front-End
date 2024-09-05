export function sortChallenges(challenges, sortOrder = 'newest') {
    if (sortOrder === 'newest') {
        return challenges.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
    } else if (sortOrder === 'oldest') {
        return challenges.sort((a, b) => new Date(a.createdDate) - new Date(b.createdDate));
    } else {
        return 0; // Default case (no sorting)
    }
};