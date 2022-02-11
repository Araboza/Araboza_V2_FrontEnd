const IS_SHOWNAVBAR = "IS_SHOWNAVBAR/mobileNavbar" as const;
const IS_CLOSENAVBAR = "IS_CLOSENAVBAR/mobileNavbar" as const;
const IS_TOGGLENAVBAR = "IS_TOGGLENAVBAR/mobileNavbar" as const;

export const isShowNavbar = () => ({
  type: IS_SHOWNAVBAR,
});
export const isCloseNavbar = () => ({
  type: IS_CLOSENAVBAR,
});
export const isToggleNavbar = () => ({
  type: IS_TOGGLENAVBAR,
});

type ActionsType =
  | ReturnType<typeof isShowNavbar>
  | ReturnType<typeof isCloseNavbar>
  | ReturnType<typeof isToggleNavbar>;

type initialStateType = boolean;

const initialState = false;

export default function mobileNavbar(
  state: initialStateType = initialState,
  action: ActionsType
) {
  switch (action.type) {
    case IS_SHOWNAVBAR:
      if (!state) return true;
      return state;
    case IS_CLOSENAVBAR:
      if (state) return false;
      return state;
    case IS_TOGGLENAVBAR:
      return !state;
    default:
      return state;
  }
}
