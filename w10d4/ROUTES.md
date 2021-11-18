# API ROUTES

- candidates
- interviewers
- interviews
- questions

/api/candidates -- Access all candidates

```jsx
  interface Candidates [
    Candidate
  ]
```

/api/candidates/:candidate_email -- Access a specific candidate by email

```jsx
  interface Candidate {
   name: String                  // name of the candidate
   email: String                 // email address of the candidate
 }
```

/api/interviewers
/api/interviewers/:interviewer_id

/api/interviews/
/api/interviews/:interview_id
/api/interviews/:interview_id/questions/
/api/interviews/:interview_id/questions/:question_id

/api/questions
/api/questions/:question_id

# FRONTEND ROUTES

- / -> Home page
- /start -> Login/Register component
- /dashboard -> Only visible for interviewers
- /interview -> Visible to candidate and interviewer, but with different content
