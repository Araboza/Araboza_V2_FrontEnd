const IS_NOTICE = "notice/IS_NOTICE";
const IS_CLOSE_NOTICE = "notice/IS_CLOSE_NOTICE";

export const isNotice = () => ({
  type: IS_NOTICE,
});
export const isCloseNotice = () => ({
  type: IS_CLOSE_NOTICE,
});

type ActionsType = ReturnType<typeof isNotice>;

interface StateType {
  showNotice: boolean;
}

const initialState: StateType = {
  showNotice: false,
};

export default function notice(
  state = initialState,
  action: ActionsType
): StateType {
  switch (action.type) {
    case IS_NOTICE:
      return { ...state, showNotice: !state.showNotice };
    case IS_CLOSE_NOTICE:
      return { ...state, showNotice: false };
    default:
      return state;
  }
}
