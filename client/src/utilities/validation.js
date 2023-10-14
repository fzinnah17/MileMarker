// client/src/utilities/validation.js

export const isGoalRealistic = (goal, timeline, otherCommitments) => {
    // Logic to determine if the goal is realistic considering the user's timeline and other commitments.
    // This is a stub: you should flesh this out based on your app's specific logic and data structures.
    const timeNeeded = calculateTimeNeededForGoal(goal); // This function should be defined based on your needs.
    const availableTime = calculateAvailableTime(timeline, otherCommitments); // This function should also be defined.
    
    return timeNeeded <= availableTime;
};

export const validateMilestone = (milestone) => {
    // Validate if the milestone entered by the user is correct and permissible.
    // For example, you might check if the end date is after the start date, 
    // or if the description meets certain criteria.
    // Flesh this out with your actual validation logic.
    if (milestone.endDate <= milestone.startDate) {
        return { isValid: false, message: "End date must be after start date." };
    }
    // ... other validations ...

    return { isValid: true };
};
