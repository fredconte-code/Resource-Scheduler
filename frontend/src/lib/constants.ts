// Shared constants for the ResourceFlow application

export const COUNTRY_FLAGS = {
  'Canada': '🇨🇦',
  'Brazil': '🇧🇷'
} as const;

export const PROJECT_COLORS = [
  // Row 1: Strong Colors
  '#3b82f6', // Blue
  '#ef4444', // Red
  '#10b981', // Green
  '#f59e0b', // Amber
  '#8b5cf6', // Purple
  '#ec4899', // Pink
  '#06b6d4', // Cyan
  '#84cc16', // Lime
  '#f97316', // Orange
  '#6366f1', // Indigo
  
  // Row 2: Light Colors (corresponding to strong colors above)
  '#93c5fd', // Light Blue
  '#fca5a5', // Light Red
  '#86efac', // Light Green
  '#fcd34d', // Light Amber
  '#c4b5fd', // Light Purple
  '#f9a8d4', // Light Pink
  '#67e8f9', // Light Cyan
  '#bef264', // Light Lime
  '#fdba74', // Light Orange
  '#a5b4fc', // Light Indigo
] as const;

export const DEFAULT_ROLES = [
  'Developer',
  'Designer', 
  'Scrum Master',
  'QA Engineering',
  'Team Leader',
  'Project Manager',
  'Business Analyst',
  'DevOps Engineer',
  'UX Designer',
  'Product Owner',
  'Strategist',
  'Manager',
  'Tech Lead',
  'Intern'
] as const;

export const DRAG_THRESHOLD = 5; // Minimum pixels to move before considering it a drag

export const WORKING_DAYS_PER_WEEK = 5;
export const WEEKS_PER_MONTH = 4.33;

// Common state initializers
export const createLoadingState = () => ({
  loading: true,
  error: null as string | null
});

export const createDialogState = () => ({
  showDialog: false,
  selectedFile: null as File | null
});

// Validation messages
export const VALIDATION_MESSAGES = {
  REQUIRED: (field: string) => `${field} is required.`,
  DATE_RANGE: "Start date must be before end date.",
  POSITIVE_NUMBER: (field: string) => `${field} must be a positive number.`,
  NUMBER_RANGE: (field: string, min: number, max: number) => 
    `${field} must be between ${min} and ${max}.`,
  MIN_LENGTH: (field: string, min: number) => `${field} must be at least ${min} characters long.`,
  MAX_LENGTH: (field: string, max: number) => `${field} must be no more than ${max} characters long.`,
  EMAIL: (field: string) => `${field} must be a valid email address.`,
  URL: (field: string) => `${field} must be a valid URL.`
} as const;

// Toast variants
export const TOAST_VARIANTS = {
  SUCCESS: "default",
  ERROR: "destructive",
  WARNING: "default",
  INFO: "default"
} as const;

// Common button text
export const BUTTON_TEXT = {
  SAVE: "Save",
  CANCEL: "Cancel",
  DELETE: "Delete",
  EDIT: "Edit",
  ADD: "Add",
  CONFIRM: "Confirm",
  CLEAR: "Clear",
  REFRESH: "Refresh",
  EXPORT: "Export",
  IMPORT: "Import"
} as const;

// Form field labels
export const FIELD_LABELS = {
  NAME: "Name",
  EMAIL: "Email",
  ROLE: "Role",
  COUNTRY: "Country",
  START_DATE: "Start Date",
  END_DATE: "End Date",
  HOURS_PER_DAY: "Hours per Day",
  PROJECT_NAME: "Project Name",
  PROJECT_COLOR: "Project Color",
  PROJECT_STATUS: "Project Status",
  HOLIDAY_NAME: "Holiday Name",
  HOLIDAY_DATE: "Holiday Date",
  VACATION_TYPE: "Vacation Type"
} as const; 