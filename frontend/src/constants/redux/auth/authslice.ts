import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { THospitals, TUser } from "./authTypes";
import { getHospitals, getUser, login } from "./authApi";

type TAuthState = {
  userDetails?: TUser | null;
  token?: string;
  loading: boolean;
  error: string;
  successMsg?: string;
  resetRequestSuccess?: boolean;
  passwordResetSuccess?: boolean;
  isLoggedIn: boolean;
  allHospitals: THospitals[];
};

const initialState: TAuthState = {
  userDetails: null,
  token: "",
  loading: false,
  isLoggedIn: false,
  error: "",
  successMsg: "",
  resetRequestSuccess: false,
  passwordResetSuccess: false,
  allHospitals: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(login.pending, (state: TAuthState) => {
      state.loading = true;
    });

    builder.addCase(
      login.fulfilled,
      (state: TAuthState, { payload }: PayloadAction<any>) => {
        (state.loading = false), (state.userDetails = payload.user);
        state.isLoggedIn = true;
        state.token = payload.accessToken;
      }
    );

    builder.addCase(
      login.rejected,
      (state: TAuthState, { payload }: PayloadAction<any>) => {
        (state.loading = false), (state.error = payload);
      }
    );

    //fetch
    builder.addCase(getUser.pending, (state: TAuthState) => {
      state.loading = true;
    });

    builder.addCase(
      getUser.fulfilled,
      (state: TAuthState, { payload }: PayloadAction<any>) => {
        (state.loading = false), (state.userDetails = payload.user);
      }
    );

    builder.addCase(
      getUser.rejected,
      (state: TAuthState, { payload }: PayloadAction<any>) => {
        (state.loading = false), (state.error = payload);
      }
    );

    // getHospitals
    //fetch
    builder.addCase(getHospitals.pending, (state: TAuthState) => {
      state.loading = true;
    });

    builder.addCase(
      getHospitals.fulfilled,
      (state: TAuthState, { payload }: PayloadAction<any>) => {
        (state.loading = false), (state.allHospitals = payload);
      }
    );

    builder.addCase(
      getHospitals.rejected,
      (state: TAuthState, { payload }: PayloadAction<any>) => {
        (state.loading = false), (state.error = payload);
      }
    );
  },
});

// export const {};

export default authSlice.reducer;
