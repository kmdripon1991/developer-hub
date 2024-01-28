export const getFeaturedJobs = async()=>{
    const featuredJobsData = await fetch('jobs.json')
    const featuredJobs = await featuredJobsData.json()
    return featuredJobs
}