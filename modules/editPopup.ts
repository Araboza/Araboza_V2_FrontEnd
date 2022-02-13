const IS_SHOWPOPUP = "IS_SHOWPOPUP/editPopup" as const;
const IS_CLOSEPOPUP = "IS_CLOSEPOPUP/editPopup" as const;

export const isShowPopup = () => ({
  type: IS_SHOWPOPUP,
});
export const isClosePopup = () => ({
  type: IS_CLOSEPOPUP,
});

type ActionsType =
  | ReturnType<typeof isShowPopup>
  | ReturnType<typeof isClosePopup>;

type initialStateType = boolean;

const initialState = false;

export default function editPopup(
  state: initialStateType = initialState,
  action: ActionsType
) {
  switch (action.type) {
    case IS_SHOWPOPUP:
      if (!state) return true;
      return state;
    case IS_CLOSEPOPUP:
      if (state) return false;
      return state;
    default:
      return state;
  }
}
