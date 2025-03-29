/**
 * @file constants.ts
 * @fileoverview This file contains constants used throughout the application.
 * These constants include the poster information for the missing dog and various messages used in the application.
 */

export const POSTER_INFO = {
    name: "Keiko",
    reward: 300,
    lastSeen: "Near Millsboro, DE in Plantation Lakes",
    contact: "302-228-8022",
    description: "Have you seen this dog? Please provide any information you have about Keiko's whereabouts.",
}

export const MESSAGES = {
    success: "Your tip has been submitted successfully!",
    error: "There was an error submitting your tip. Please try again.",
    empty: "Please fill in all fields before submitting.",
    invalidEmail: "Please enter a valid email address.",
    invalidPhone: "Please enter a valid phone number.",
}

export const FORM_INSTRUCTIONS = {
    missing: "Please provide your email and any additional information you have.",
    submit: "Submit a Tip",
}

export const FORM_LABELS = {
    emailLabel: "Email",
    commentsLabel: "Comments",
    phoneNumberLabel: "Phone Number",
    nameLabel: "Name",
}