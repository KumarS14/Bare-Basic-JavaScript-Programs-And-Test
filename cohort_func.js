const cohortFunc = (cohort) =>
{
    return `${cohort.id}, ${cohort.name}, ${cohort.arrayNames.length}`
};
module.exports = cohortFunc;