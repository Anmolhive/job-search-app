import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface JobAppliedState {
    job: String;
    name: string;
    email: string;
    coverLetter: string;
    resume: string | null;
}

const initialState: JobAppliedState = {
    job: '',
    name: '',
    email: '',
    coverLetter: '',
    resume: null,
};

export const jobAppliedSlice = createSlice({
    name: 'jobApplied',
    initialState,
    reducers: {
        setJob: (state, action: PayloadAction<string>) => {
            state.job = action.payload;
        },
        setName: (state, action: PayloadAction<string>) => {
            state.name = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setCoverLatter: (state, action: PayloadAction<string>) => {
            state.coverLetter = action.payload;
        },
        setResume: (state, action: PayloadAction<string | null>) => {
            state.resume = action.payload;
        },
        resetJobApplied: () => initialState,
    },
})

// Action creators are generated for each case reducer function
export const { setJob, setName, setEmail, setCoverLatter, setResume } = jobAppliedSlice.actions

export default jobAppliedSlice.reducer

